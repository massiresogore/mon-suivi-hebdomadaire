export function updateDashboard(days, weekLabel, currentDay) {
  const activities = days.flatMap(day => day.activities); const completed = activities.filter(item => item.done).length; const total = activities.length; const percent = total ? Math.round(completed / total * 100) : 0;
  document.querySelector("#week-label").textContent = weekLabel; document.querySelector("#current-day").textContent = currentDay; document.querySelector("#completed-count").textContent = completed; document.querySelector("#remaining-count").textContent = total - completed; document.querySelector("#progress-value").textContent = `${percent} %`; document.querySelector("#progress-bar").style.width = `${percent}%`;
}
