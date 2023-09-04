import addHabitElement from "./addHabitElement.js";
import getHabitInfo from "./getHabitInfo.js";
import saveHabit from "./saveHabit.js";

export default function createAndShowModal() {
  let addModalElement = document.createElement("form");
  addModalElement.classList.add("add-modal");
  addModalElement.addEventListener("submit", (e) => {
    e.preventDefault();
    const habitInfo = getHabitInfo();
    const lastHabitId = localStorage.getItem("last-habit-id");
    const habitId = lastHabitId ? +lastHabitId + 1 : 0;
    saveHabit({ id: habitId, ...habitInfo });
    addHabitElement({ id: habitId, ...habitInfo });
    addModalElement.remove();
  });

  let nameLabel = document.createElement("label");
  nameLabel.htmlFor = "name-input";
  nameLabel.innerText = "Name: ";

  let nameInput = document.createElement("input");
  nameInput.id = "name-input";
  nameInput.classList.add("name-input");
  nameLabel.append(nameInput);
  addModalElement.append(nameLabel);

  let unitLabel = document.createElement("label");
  unitLabel.htmlFor = "unit-input";
  unitLabel.innerText = "Unit: ";

  let unitInput = document.createElement("input");
  unitInput.id = "unit-input";
  unitInput.classList.add("unit-input");
  unitLabel.append(unitInput);
  addModalElement.append(unitLabel);

  let goalLabel = document.createElement("label");
  goalLabel.htmlFor = "goal-input";
  goalLabel.innerText = "Goal: ";

  let goalInput = document.createElement("input");
  goalInput.id = "goal-input";
  goalInput.type = "number";
  goalInput.classList.add("goal-input");
  goalLabel.append(goalInput);
  addModalElement.append(goalLabel);

  let goalUnitLabel = document.createElement("label");
  goalUnitLabel.htmlFor = "goal-unit-select";
  goalUnitLabel.innerText = "Unit: ";

  let goalUnitSelect = document.createElement("select");
  goalUnitSelect.id = "goal-unit-select";
  goalUnitSelect.classList.add("goal-unit-select");

  let goalUnitOption0 = document.createElement("option");
  goalUnitOption0.value = "day";
  goalUnitOption0.innerText = "day";
  goalUnitSelect.append(goalUnitOption0);

  let goalUnitOption1 = document.createElement("option");
  goalUnitOption1.value = "week";
  goalUnitOption1.innerText = "week";
  goalUnitSelect.append(goalUnitOption1);

  goalUnitLabel.append(goalUnitSelect);
  addModalElement.append(goalUnitLabel);

  let submitButton = document.createElement("input");
  submitButton.type = "submit";
  submitButton.id = "add-submit-button";
  submitButton.classList.add("add-submit-button");
  addModalElement.append(submitButton);

  document.body.append(addModalElement);
}
