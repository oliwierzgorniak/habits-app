import addHabitElement from "./addHabit/addHabitElement.js";

export default function addHabitsElmentsStart() {
  const habitsJSON = localStorage.getItem("habits");
  const habits = JSON.parse(habitsJSON) || [];
  habits.forEach((name) => addHabitElement(name));
}
