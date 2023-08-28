import addHabitElement from "./addHabitElement.js";

export default function createAndShowModal() {
  let addModalElement = document.createElement("form");
  addModalElement.classList.add("add-modal");
  addModalElement.addEventListener("submit", (e) => {
    e.preventDefault();
    addHabitElement();
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
