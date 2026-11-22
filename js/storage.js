import { DAY_NAMES, MONTH_NAMES, dateKey, dayDate, getSchedule, getWeekInfo } from "./schedule.js";
const CACHE_KEY = "suivi-emploi-du-temps";
const CONFIG_KEY = "suivi-emploi-config-v1";
const WEEK_PLANS_KEY = "suivi-emploi-week-plans-v1";
let rootHandle = null;
const readCache = () => JSON.parse(localStorage.getItem(CACHE_KEY) || '{"days":{},"reports":{}}');
const writeCache = cache => localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
export function getDayData(date, mode = "courses") { const cache = readCache(); const key = `${dateKey(date)}-${mode}`; const activities = getSchedule(date, mode).map(activity => ({ ...activity, done: Boolean(cache.days[key]?.activities?.find(item => item.id === activity.id)?.done) })); return { date: dateKey(date), mode, activities, updatedAt: cache.days[key]?.updatedAt || null }; }
export async function saveDayData(date, mode, activities) {
  const cache = readCache(); const key = `${dateKey(date)}-${mode}`; const updatedAt = new Date().toISOString();
  const data = { date: dateKey(date), mode, activities, updatedAt }; cache.days[key] = data; writeCache(cache);
  if (rootHandle) { try { await writeDayFile(data); return { persisted: true, updatedAt }; } catch (error) { console.error("Échec de la sauvegarde directe", error); throw new Error("La sauvegarde dans le dossier a échoué. Les données restent conservées dans le cache local."); } }
  return { persisted: false, updatedAt };
}
async function ensureDirectory(parent, name) { return parent.getDirectoryHandle(name, { create: true }); }
async function writeDayFile(data) {
  const date = new Date(`${data.date}T12:00:00`); const week = getWeekInfo(date); const monthDir = await ensureDirectory(rootHandle, `${String(week.month).padStart(2, "0")}_${week.year}_${MONTH_NAMES[week.month - 1]}`);
  const weekDir = await ensureDirectory(monthDir, `${String(week.start.getDate()).padStart(2, "0")}_${String(week.month).padStart(2, "0")}_${week.year}_semaine_${week.weekNumber}`);
  const dailyDir = await ensureDirectory(weekDir, "suivi_quotidien"); const file = await dailyDir.getFileHandle(`${DAY_NAMES[(date.getDay() + 6) % 7]}.json`, { create: true }); const writable = await file.createWritable(); await writable.write(JSON.stringify(data, null, 2)); await writable.close(); const verification = await file.getFile(); JSON.parse(await verification.text());
}
export async function chooseRootFolder() { if (!window.showDirectoryPicker) throw new Error("Ce navigateur ne prend pas en charge la sauvegarde directe dans les dossiers."); rootHandle = await window.showDirectoryPicker({ mode: "readwrite" }); await rootHandle.requestPermission({ mode: "readwrite" }); return true; }
export function getConfiguration() {
  return JSON.parse(localStorage.getItem(CONFIG_KEY) || "null");
}
export async function saveConfiguration(configuration) {
  localStorage.setItem(CONFIG_KEY, JSON.stringify(configuration));
  if (!rootHandle) return false;
  const configDir = await ensureDirectory(rootHandle, "configuration");
  const files = [
    ["emploi_du_temps_avec_cours.json", JSON.stringify(configuration.courses, null, 2)],
    ["emploi_du_temps_sans_cours.json", JSON.stringify(configuration.free, null, 2)]
  ];
  for (const [name, content] of files) {
    const file = await configDir.getFileHandle(name, { create: true });
    const writable = await file.createWritable();
    await writable.write(content);
    await writable.close();
  }
  return true;
}
export async function restoreConfiguration(initialConfiguration) {
  localStorage.setItem(CONFIG_KEY, JSON.stringify(initialConfiguration));
  if (rootHandle) await saveConfiguration(initialConfiguration);
  return true;
}
export function saveWeekPlanSnapshot(mode, weekStart, plan) {
  const snapshots = JSON.parse(localStorage.getItem(WEEK_PLANS_KEY) || "{}");
  snapshots[dateKey(weekStart)] = { ...(snapshots[dateKey(weekStart)] || {}), [mode]: JSON.parse(JSON.stringify(plan)) };
  localStorage.setItem(WEEK_PLANS_KEY, JSON.stringify(snapshots));
}
export function getReports() { return readCache().reports; }
export async function saveReport(report) { const cache = readCache(); cache.reports[report.week.startKey] = report; writeCache(cache); if (!rootHandle) return false; const date = new Date(`${report.week.startKey}T12:00:00`); const week = getWeekInfo(date); const monthDir = await ensureDirectory(rootHandle, `${String(week.month).padStart(2, "0")}_${week.year}_${MONTH_NAMES[week.month - 1]}`); const weekDir = await ensureDirectory(monthDir, `${String(week.start.getDate()).padStart(2, "0")}_${String(week.month).padStart(2, "0")}_${week.year}_semaine_${week.weekNumber}`); const dir = await ensureDirectory(weekDir, "bilan"); for (const [name, content] of [["bilan_semaine.json", JSON.stringify(report, null, 2)], ["bilan_semaine.html", report.html]]) { const file = await dir.getFileHandle(name, { create: true }); const writable = await file.createWritable(); await writable.write(content); await writable.close(); } return true; }
export function exportCache() { const blob = new Blob([JSON.stringify(readCache(), null, 2)], { type: "application/json" }); const link = document.createElement("a"); link.href = URL.createObjectURL(blob); link.download = `suivi_${dateKey(new Date())}.json`; link.click(); URL.revokeObjectURL(link.href); }
export { dayDate };
