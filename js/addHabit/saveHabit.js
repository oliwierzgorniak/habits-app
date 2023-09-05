export default function saveHabitAndGetId({ id, name, unit, goal, goalUnit }) {
  const habitsJSON = localStorage.getItem("habits-list");
  const habits = JSON.parse(habitsJSON) || [];
  const newHabit = {
    id: id,
    name: name,
    streak: 0,
    lastStreakUpdate: null,
    completionLevel: 0,
    unit: unit,
    goal: goal,
    goalUnit: goalUnit,
  };
  localStorage.setItem("last-habit-id", id);
  habits.push(newHabit);
  localStorage.setItem("habits-list", JSON.stringify(habits));
}
