export default function saveHabitAndGetId(id, name) {
  const habitsJSON = localStorage.getItem("habits-list");
  const habits = JSON.parse(habitsJSON) || [];
  const newHabit = {
    id: id,
    name: name,
    streak: 0,
  };
  localStorage.setItem("last-habit-id", id);
  habits.push(newHabit);
  localStorage.setItem("habits-list", JSON.stringify(habits));
}
