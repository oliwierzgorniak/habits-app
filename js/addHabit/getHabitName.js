export default function getHabitName() {
  const nameInputElement = document.querySelector("#name-input");
  const habitName = nameInputElement.value;
  return habitName;
}
