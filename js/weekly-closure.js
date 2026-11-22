import { getWeekInfo } from "./schedule.js";
import { getReports } from "./storage.js";
import { closeWeek } from "./weekly-report.js";
export async function checkWeeklyClosure(now = new Date()) {
  const reports = getReports(); const currentWeek = getWeekInfo(now); const previous = new Date(currentWeek.start); previous.setDate(previous.getDate() - 1); const previousWeek = getWeekInfo(previous);
  if (now >= new Date(`${previousWeek.endKey}T23:00:00`) && !reports[previousWeek.startKey]) return closeWeek(previousWeek.start);
  if (now.getDay() === 0 && now.getHours() >= 23 && !reports[currentWeek.startKey]) return closeWeek(currentWeek.start);
  return null;
}
export function startClosureMonitor(onClosed) { const check = async () => { const report = await checkWeeklyClosure(); if (report) onClosed(report); }; check(); return window.setInterval(check, 60 * 1000); }
