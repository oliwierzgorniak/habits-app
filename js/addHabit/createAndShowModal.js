import addHabitElement from "./addHabitElement.js";
import getHabitName from "./getHabitName.js";
import saveHabit from "./saveHabit.js";

export default function createAndShowModal() {
  let addModalElement = document.createElement("form");
  addModalElement.classList.add("add-modal");
  addModalElement.addEventListener("submit", (e) => {
    e.preventDefault();
    const habitName = getHabitName();
    const lastHabitId = localStorage.getItem("last-habit-id");
    const habitId = lastHabitId ? +lastHabitId + 1 : 0;
    saveHabit(habitId, habitName);
    addHabitElement(habitId, habitName);
    addModalElement.remove();
  });

  let nameInput = document.createElement("input");
  nameInput.id = "name-input";
  nameInput.classList.add("name-input");
  addModalElement.append(nameInput);

  let addButton = document.createElement("input");
  addButton.type = "submit";
  addButton.id = "add-submit-button";
  addButton.classList.add("add-submit-button");
  addModalElement.append(addButton);

  document.body.append(addModalElement);
}
