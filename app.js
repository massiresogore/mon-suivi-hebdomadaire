import { DAY_NAMES, INITIAL_PLANS, dayDate, formatDate, getInitialPlan, getPlan, getWeekInfo } from "./js/schedule.js";
import { chooseRootFolder, exportCache, getConfiguration, getDayData, getReports, restoreConfiguration, saveConfiguration, saveDayData, saveWeekPlanSnapshot } from "./js/storage.js";
import { startClosureMonitor } from "./js/weekly-closure.js";
import { updateDashboard } from "./js/dashboard.js";
const week = getWeekInfo(); let currentMode = "courses"; let days = [];
const $ = selector => document.querySelector(selector);
function renderDays() {
  const container = currentMode === "courses" ? $("#courses-days") : $("#free-days"); container.innerHTML = ""; days = [];
  for (let index = 0; index < 7; index += 1) { const date = dayDate(week.start, index); const data = getDayData(date, currentMode); days.push(data); const card = document.createElement("article"); card.className = "day-card"; if (new Date().toDateString() === date.toDateString()) card.classList.add("today"); card.innerHTML = `<div class="day-header"><div><h3>${DAY_NAMES[index][0].toUpperCase()}${DAY_NAMES[index].slice(1)}</h3><p>${formatDate(date, { day: "numeric", month: "long", year: "numeric" })}</p></div><span class="day-progress"></span></div><div class="progress-track"><span></span></div><ul class="activities"></ul>`;
    const list = card.querySelector(".activities"); data.activities.forEach((activity, activityIndex) => { const item = document.createElement("li"); item.className = `activity${activity.done ? " done" : ""}`; item.innerHTML = `<input type="checkbox" id="${activity.id}" ${activity.done ? "checked" : ""}><label for="${activity.id}"><span class="activity-time">${activity.time || " "}</span><span class="activity-name">${activity.name}</span><span class="activity-status">${activity.done ? "Terminée" : "À faire"}</span></label>`; item.querySelector("input").addEventListener("change", async event => { data.activities[activityIndex].done = event.target.checked; item.classList.toggle("done", event.target.checked); item.querySelector(".activity-status").textContent = event.target.checked ? "Terminée" : "À faire"; await persistDay(data, card); }); list.append(item); }); container.append(card); updateCardProgress(card, data); }
  updateDashboard(days, `${formatDate(week.start)} – ${formatDate(week.end)}`, DAY_NAMES[(new Date().getDay() + 6) % 7]); renderArchive();
}
function updateCardProgress(card, data) { const completed = data.activities.filter(item => item.done).length; const percent = data.activities.length ? Math.round(completed / data.activities.length * 100) : 0; card.querySelector(".day-progress").textContent = `${completed}/${data.activities.length} · ${percent}%`; card.querySelector(".progress-track span").style.width = `${percent}%`; }
async function persistDay(data, card) { try { const result = await saveDayData(data.date, data.mode, data.activities); updateCardProgress(card, data); $("#last-saved").textContent = `Dernière sauvegarde : ${new Date(result.updatedAt).toLocaleTimeString("fr-FR")}`; $("#storage-status").textContent = result.persisted ? "Sauvegarde directe active." : "Cache local actif."; updateDashboard(days, `${formatDate(week.start)} – ${formatDate(week.end)}`, DAY_NAMES[(new Date().getDay() + 6) % 7]); } catch (error) { $("#storage-status").textContent = error.message; } }
function renderArchive() { const reports = Object.values(getReports()).sort((a, b) => b.week.startKey.localeCompare(a.week.startKey)); $("#archive-list").innerHTML = reports.length ? reports.map(report => `<div class="archive-item"><div><strong>${report.week.label}</strong><span>${report.completed}/${report.total} activités terminées</span></div><span>${report.percent}%</span></div>`).join("") : '<p class="muted">Aucun bilan clôturé pour le moment.</p>'; }
let planningDraft = null;
let planningOriginal = null;
function fullConfiguration() {
  const saved = getConfiguration();
  return {
    courses: saved?.courses ? JSON.parse(JSON.stringify(saved.courses)) : getInitialPlan("courses"),
    free: saved?.free ? JSON.parse(JSON.stringify(saved.free)) : getInitialPlan("free")
  };
}
function setupPlanning() {
  $("#planning-day").innerHTML = DAY_NAMES.map(day => `<option value="${day}">${day[0].toUpperCase()}${day.slice(1)}</option>`).join("");
  planningOriginal = fullConfiguration();
  planningDraft = fullConfiguration();
  renderPlanningEditor();
}
function selectedPlanningMode() { return $("#planning-mode").value; }
function selectedPlanningDay() { return $("#planning-day").value; }
function planningActivities() { return planningDraft[selectedPlanningMode()][selectedPlanningDay()] || []; }
function validatePlanning(activities) {
  const ordered = [...activities].sort((a, b) => (a.start || "").localeCompare(b.start || ""));
  for (let index = 0; index < ordered.length; index += 1) {
    const item = ordered[index];
    if (!item.name.trim()) return "Chaque activité doit avoir un nom.";
    if (item.start && !/^([01]\d|2[0-3]):[0-5]\d$/.test(item.start)) return "Une heure de début est invalide.";
    if (item.end && !/^([01]\d|2[0-3]):[0-5]\d$/.test(item.end)) return "Une heure de fin est invalide.";
    if (item.start && item.end && item.end <= item.start) return `L’activité « ${item.name} » doit finir après son heure de début.`;
    if (item.start && item.end && index > 0) {
      const previous = ordered[index - 1];
      if (previous.end && item.start < previous.end) return `Les horaires de « ${previous.name} » et « ${item.name} » se chevauchent.`;
    }
  }
  return "";
}
function renderPlanningEditor() {
  const editor = $("#planning-editor");
  editor.innerHTML = "";
  planningActivities().forEach((item, index) => {
    const row = document.createElement("div");
    row.className = "activity-editor";
    row.innerHTML = `
      <label>Début<input type="time" data-field="start" value="${item.start || ""}"></label>
      <label>Fin<input type="time" data-field="end" value="${item.end || ""}"></label>
      <label>Nom et description
        <input type="text" data-field="name" value="${item.name.replace(/"/g, "&quot;")}">
        <textarea data-field="description">${item.description || ""}</textarea>
      </label>
      <div class="editor-actions">
        <label><input type="checkbox" data-field="enabled" ${item.enabled ? "checked" : ""}> Activée</label>
        <button type="button" data-action="up" ${index === 0 ? "disabled" : ""}>Monter</button>
        <button type="button" data-action="down" ${index === planningActivities().length - 1 ? "disabled" : ""}>Descendre</button>
        <button type="button" data-action="delete">Supprimer</button>
      </div>`;
    row.querySelectorAll("[data-field]").forEach(field => field.addEventListener("change", event => {
      const key = event.target.dataset.field;
      item[key] = key === "enabled" ? event.target.checked : event.target.value;
    }));
    row.querySelector('[data-action="up"]').addEventListener("click", () => movePlanningActivity(index, -1));
    row.querySelector('[data-action="down"]').addEventListener("click", () => movePlanningActivity(index, 1));
    row.querySelector('[data-action="delete"]').addEventListener("click", () => {
      if (confirm(`Supprimer l’activité « ${item.name} » ?`)) {
        planningActivities().splice(index, 1);
        renderPlanningEditor();
      }
    });
    editor.append(row);
  });
  $("#planning-status").textContent = "";
}
function movePlanningActivity(index, offset) {
  const activities = planningActivities();
  const target = index + offset;
  if (target < 0 || target >= activities.length) return;
  [activities[index], activities[target]] = [activities[target], activities[index]];
  renderPlanningEditor();
}
function previewPlanning() {
  const activities = planningActivities();
  $("#planning-preview").innerHTML = activities.length ? activities.map(item => `<div class="preview-item ${item.enabled ? "" : "disabled"}"><strong>${item.start || "Toute la journée"}${item.end ? ` – ${item.end}` : ""}</strong><span>${item.name}${item.description ? `<br>${item.description}` : ""}</span></div>`).join("") : '<p class="muted">Aucune activité pour cette journée.</p>';
}
$("#planning-mode").addEventListener("change", renderPlanningEditor);
$("#planning-day").addEventListener("change", () => { renderPlanningEditor(); $("#planning-preview").innerHTML = ""; });
$("#add-activity").addEventListener("click", () => {
  planningActivities().push({ id: `custom-${Date.now()}`, start: "09:00", end: "10:00", name: "Nouvelle activité", description: "", enabled: true });
  renderPlanningEditor();
});
$("#copy-day").addEventListener("click", () => {
  const target = prompt(`Copier vers quel jour ?\n${DAY_NAMES.map((day, index) => `${index + 1}. ${day}`).join("\n")}`);
  const index = Number(target) - 1;
  if (index >= 0 && index < 7) {
    planningDraft[selectedPlanningMode()][DAY_NAMES[index]] = JSON.parse(JSON.stringify(planningActivities()));
    $("#planning-status").textContent = `Programme copié vers ${DAY_NAMES[index]}.`;
  }
});
$("#preview-planning").addEventListener("click", previewPlanning);
$("#cancel-planning").addEventListener("click", () => { planningDraft = fullConfiguration(); renderPlanningEditor(); $("#planning-preview").innerHTML = ""; $("#planning-status").textContent = "Modifications annulées."; });
$("#restore-planning").addEventListener("click", async () => {
  if (!confirm("Restaurer les deux plannings initiaux ? Cette action remplacera la configuration actuelle.")) return;
  planningDraft = { courses: getInitialPlan("courses"), free: getInitialPlan("free") };
  planningOriginal = planningDraft;
  await restoreConfiguration(planningDraft);
  renderPlanningEditor();
  renderDays();
  $("#planning-status").textContent = "Planning initial restauré.";
});
$("#save-planning").addEventListener("click", async () => {
  const error = validatePlanning(planningActivities());
  if (error) { $("#planning-status").textContent = error; return; }
  try {
    const direct = await saveConfiguration(planningDraft);
    if ($("#current-week-action").value === "current") {
      saveWeekPlanSnapshot(selectedPlanningMode(), week.start, planningDraft[selectedPlanningMode()]);
    }
    planningOriginal = fullConfiguration();
    renderDays();
    $("#planning-status").textContent = direct ? "Modifications enregistrées dans les fichiers locaux." : "Modifications enregistrées dans le cache local.";
  } catch (error) { $("#planning-status").textContent = `Échec de la sauvegarde : ${error.message}`; }
});
document.querySelectorAll(".nav-button").forEach(button => button.addEventListener("click", () => {
  currentMode = button.dataset.page === "free-page" ? "free" : button.dataset.page === "courses-page" ? "courses" : "management";
  document.querySelectorAll(".nav-button").forEach(item => item.classList.toggle("active", item === button));
  document.querySelectorAll(".page").forEach(page => page.classList.toggle("hidden", page.id !== button.dataset.page));
  if (button.dataset.page === "management-page") setupPlanning();
  else if (button.dataset.page === "archive-section") $("#archive-section").scrollIntoView({ behavior: "smooth" });
  else renderDays();
}));
$("#choose-folder").addEventListener("click", async () => { try { await chooseRootFolder(); $("#storage-status").textContent = "Dossier de sauvegarde autorisé."; } catch (error) { $("#storage-status").textContent = error.message; } });
$("#export-data").addEventListener("click", () => { exportCache(); $("#storage-status").textContent = "Export JSON téléchargé."; });
renderDays();
startClosureMonitor(() => { renderArchive(); $("#storage-status").textContent = "Bilan hebdomadaire clôturé."; });
