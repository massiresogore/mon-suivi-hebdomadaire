export const DAY_NAMES = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];
export const MONTH_NAMES = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
const CONFIG_KEY = "suivi-emploi-config-v1";
const WEEK_PLANS_KEY = "suivi-emploi-week-plans-v1";

const courseToefl = ["Reading", "Listening", "Grammar & Vocabulary", "Speaking", "Writing"];
const courseStudy = ["Spring Boot - approfondissement", "Scénarisation / design d’interface - cours et projet", "Spring Boot - mise en pratique", "Angular - étude et exercices", "IA générative - lecture active et notes"];
const courseBooks = ["Pro Spring Boot 4", "livre de scénarisation", "IA générative", "Angular", "Kotlin"];
const freeToefl = ["Reading", "Listening", "Grammar & Vocabulary", "Speaking", "Writing"];
const freeStudy = ["Spring Boot - approfondissement", "Scénarisation / design d’interface", "Spring Boot - mise en pratique", "Angular - étude et exercices", "IA générative - lecture active et notes", "Kotlin - étude et pratique", "Bilan hebdomadaire + théâtre / repos"];

function activity(id, start, end, name, description = "", enabled = true) {
  return { id, start, end, name, description, enabled };
}

function createInitialCoursePlan() {
  const plan = {};
  for (let day = 0; day < 5; day += 1) {
    plan[DAY_NAMES[day]] = [
      activity(`${day}-06-45`, "06:45", "07:30", "Routine, petit-déjeuner"),
      activity(`${day}-07-30`, "07:30", "08:00", "Trajet vers les cours"),
      activity(`${day}-08-00`, "08:00", "10:00", "Cours"),
      activity(`${day}-10-00`, "10:00", "10:15", "Cours / pause selon l’emploi du temps"),
      activity(`${day}-10-15`, "10:15", "12:00", "Cours"),
      activity(`${day}-12-00`, "12:00", "14:00", "Cours / déjeuner selon l’emploi du temps"),
      activity(`${day}-14-00`, "14:00", "15:30", "Cours"),
      activity(`${day}-15-30`, "15:30", "17:00", "Cours"),
      activity(`${day}-17-00`, "17:00", "18:00", "Retour, repas et décompression"),
      activity(`${day}-18-00`, "18:00", "19:00", `TOEFL - ${courseToefl[day]}`),
      activity(`${day}-19-00`, "19:00", "19:15", "Pause"),
      activity(`${day}-19-15`, "19:15", "20:15", courseStudy[day]),
      activity(`${day}-20-15`, "20:15", "20:55", `Lecture : ${courseBooks[day]} (15 pages)`),
      activity(`${day}-20-55`, "20:55", "21:10", "Robert + virelangues"),
      activity(`${day}-21-10`, "21:10", "21:30", day === 1 ? "Rédaction : exorde, réfutation, narration, conclusion" : day === 3 ? "Exposé oral de 3 minutes, enregistré" : "Lecture à voix haute / diction"),
      activity(`${day}-21-30`, "21:30", "", "Déconnexion et sommeil")
    ];
  }
  plan.samedi = [
    activity("5-06-45", "06:45", "07:30", "Réveil libre / petit-déjeuner"),
    activity("5-07-30", "07:30", "08:00", "Temps personnel"),
    activity("5-08-30", "08:30", "10:00", "TOEFL - entraînement ciblé"),
    activity("5-10-00", "10:00", "10:15", "Pause"),
    activity("5-10-15", "10:15", "12:00", "10:15–11:45 : Kotlin - étude et pratique"),
    activity("5-12-00", "12:00", "14:00", "Déjeuner et repos"),
    activity("5-14-00", "14:00", "15:30", "Travaux universitaires : scénarisation / design"),
    activity("5-15-30", "15:30", "17:00", "15:45–16:30 : Dramaturgie - Yves Lavandier"),
    activity("5-17-00", "17:00", "18:00", "Repos"),
    activity("5-18-00", "18:00", "19:00", "Repos / activité personnelle"),
    activity("5-19-00", "19:00", "19:15", "Dîner / pause"),
    activity("5-19-15", "19:15", "20:15", "Temps personnel / rattrapage léger"),
    activity("5-20-15", "20:15", "20:55", "Lecture : La Dramaturgie (15 pages)"),
    activity("5-20-55", "20:55", "21:10", "Robert + virelangues"),
    activity("5-21-10", "21:10", "21:30", "Exposé oral de 3 minutes, enregistré"),
    activity("5-21-30", "21:30", "", "Déconnexion et sommeil")
  ];
  plan.dimanche = [
    activity("6-06-45", "06:45", "07:30", "Réveil libre / petit-déjeuner"),
    activity("6-07-30", "07:30", "08:00", "Temps personnel"),
    activity("6-08-00", "08:00", "10:00", "Repos / temps personnel"),
    activity("6-10-00", "10:00", "10:15", "09:00–10:00 : TOEFL - correction et révision"),
    activity("6-10-15", "10:15", "12:00", "10:15–11:00 : Shakespeare ou Racine"),
    activity("6-12-00", "12:00", "14:00", "Déjeuner et repos"),
    activity("6-14-00", "14:00", "15:30", "Repos / lecture libre"),
    activity("6-15-30", "15:30", "17:00", "Repos"),
    activity("6-17-00", "17:00", "17:30", "17:00–17:30 : bilan de la semaine"),
    activity("6-17-30", "17:30", "18:00", "Puis repos"),
    activity("6-18-00", "18:00", "19:00", "Repos / activité personnelle"),
    activity("6-19-00", "19:00", "19:15", "Dîner / pause"),
    activity("6-19-15", "19:15", "20:15", "Préparation de la semaine / repos"),
    activity("6-20-15", "20:15", "20:55", "Lecture : Shakespeare ou Racine (15 pages)"),
    activity("6-20-55", "20:55", "21:10", "Robert + virelangues"),
    activity("6-21-10", "21:10", "21:30", "Repos"),
    activity("6-21-30", "21:30", "", "Déconnexion et sommeil")
  ];
  return plan;
}

function createInitialFreePlan() {
  const plan = {};
  for (let day = 0; day < 7; day += 1) {
    const freeToeflName = day < 5 ? `TOEFL - ${freeToefl[day]}` : day === 5 ? "TOEFL - entraînement chronométré" : "TOEFL - correction / révision";
    const communication = day === 1 ? "Communication : rédaction structurée" : day === 3 ? "Communication : exposé de 3 minutes" : day === 5 ? "Communication : exposé enregistré" : "Repos / temps libre";
    const books = ["Pro Spring Boot 4", "livre de scénarisation", "IA générative", "Angular", "Kotlin", "La Dramaturgie", "Shakespeare ou Racine"];
    plan[DAY_NAMES[day]] = [
      activity(`${day}f-06-00`, "06:00", "06:30", "Réveil, petit-déjeuner"),
      activity(`${day}f-06-30`, "06:30", "07:15", freeToeflName),
      activity(`${day}f-07-15`, "07:15", "08:00", "Préparation et trajet"),
      activity(`${day}f-08-00`, "08:00", "16:30", "Travail + trajets (bloc réservé de 8h30)"),
      activity(`${day}f-16-30`, "16:30", "17:30", "Retour, repas et repos"),
      activity(`${day}f-17-30`, "17:30", "18:30", freeStudy[day]),
      activity(`${day}f-18-30`, "18:30", "19:00", "Repas / pause"),
      activity(`${day}f-19-00`, "19:00", "19:45", `Lecture : ${books[day]} (15 pages)`),
      activity(`${day}f-19-45`, "19:45", "20:00", "Robert + virelangues"),
      activity(`${day}f-20-00`, "20:00", "20:25", communication),
      activity(`${day}f-20-25`, "20:25", "", "Déconnexion et sommeil")
    ];
  }
  return plan;
}

export const INITIAL_PLANS = { courses: createInitialCoursePlan(), free: createInitialFreePlan() };

export function getInitialPlan(mode) { return JSON.parse(JSON.stringify(INITIAL_PLANS[mode] || INITIAL_PLANS.courses)); }
export function getPlan(mode, date = new Date()) { const weekStart = getWeekStart(date); const snapshots = JSON.parse(localStorage.getItem(WEEK_PLANS_KEY) || "{}"); const snapshot = snapshots[dateKey(weekStart)]?.[mode]; if (snapshot) return JSON.parse(JSON.stringify(snapshot)); const saved = JSON.parse(localStorage.getItem(CONFIG_KEY) || "null"); return saved?.[mode] ? JSON.parse(JSON.stringify(saved[mode])) : getInitialPlan(mode); }
export function getWeekStart(date = new Date()) { const d = new Date(date); const day = (d.getDay() + 6) % 7; d.setHours(0, 0, 0, 0); d.setDate(d.getDate() - day); return d; }
export function dateKey(date) { const d = new Date(date); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`; }
export function getWeekInfo(date = new Date()) { const start = getWeekStart(date); const end = new Date(start); end.setDate(start.getDate() + 6); const weekNumber = Math.floor((start.getDate() - 1) / 7) + 1; return { start, end, startKey: dateKey(start), endKey: dateKey(end), weekNumber, month: start.getMonth() + 1, year: start.getFullYear() }; }
export function getSchedule(date, mode = "courses") { const day = (new Date(date).getDay() + 6) % 7; const plan = getPlan(mode, date); const activities = plan[DAY_NAMES[day]] || []; return activities.filter(item => item.enabled).map((item, index) => ({ id: `${dateKey(date)}-${mode}-${item.id || index}`, time: item.end ? `${item.start} – ${item.end}` : item.start ? `À partir de ${item.start}` : "", name: item.name, description: item.description || "" })); }
export function formatDate(date, options = { day: "numeric", month: "long" }) { return new Intl.DateTimeFormat("fr-FR", options).format(new Date(date)); }
export function dayDate(weekStart, index) { const date = new Date(weekStart); date.setDate(date.getDate() + index); return date; }
