export default function saveHabit(name) {
  const habitsJSON = localStorage.getItem("habits");
  const habits = JSON.parse(habitsJSON) || [];
  habits.push(name);
  localStorage.setItem("habits", JSON.stringify(habits));
}
