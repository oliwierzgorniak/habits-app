export default function updateHabitListProperty(id, key, value) {
  const habitsJSON = localStorage.getItem("habits-list");
  const habits = JSON.parse(habitsJSON);
  const newHabits = habits.map((habit) => {
    if (habit.id != id) return habit;

    habit[key] = value;
    return habit;
  });
  localStorage.setItem("habits-list", JSON.stringify(newHabits));
}
