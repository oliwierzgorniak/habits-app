export default function addHabitElement() {
  const nameInputElement = document.querySelector("#name-input");
  const habitName = nameInputElement.value;

  let habitElement = document.createElement("li");
  habitElement.classList.add("habit");
  habitElement.innerText = habitName;

  let habitsContainerElement = document.querySelector("#habits-container");
  habitsContainerElement.append(habitElement);
}
