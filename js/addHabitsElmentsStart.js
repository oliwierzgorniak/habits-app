import addHabitElement from "./addHabit/addHabitElement.js";

export default function addHabitsElmentsStart() {
  const habitsJSON = localStorage.getItem("habits-list");
  const habits = JSON.parse(habitsJSON) || [];
  habits.forEach((habit) => addHabitElement(habit));
}
