export default function addHabitElement(name) {
  let habitElement = document.createElement("li");
  habitElement.classList.add("habit");
  habitElement.innerText = name;

  let habitsContainerElement = document.querySelector("#habits-container");
  habitsContainerElement.append(habitElement);
}
