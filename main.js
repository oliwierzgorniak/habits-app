import createAndShowModal from "./js/addHabit/createAndShowModal.js";

const addButton = document.querySelector("#add-button");

addButton.addEventListener("click", () => {
  createAndShowModal();
});
