export default function getHabitInfo() {
  const nameInputElement = document.querySelector("#name-input");
  const name = nameInputElement.value;

  const unitInputElement = document.querySelector("#unit-input");
  const unit = unitInputElement.value;

  const goalInputElement = document.querySelector("#goal-input");
  const goal = +goalInputElement.value;

  const goalUnitSelectElement = document.querySelector("#goal-unit-select");
  const goalUnit = goalUnitSelectElement.value;

  return { name, unit, goal, goalUnit };
}
