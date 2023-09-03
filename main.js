import createAndShowModal from "./js/addHabit/createAndShowModal.js";
import addHabitsElmentsStart from "./js/addHabitsElmentsStart.js";

// PWA
// if ("serviceWorker" in navigator) {
//   window.addEventListener("load", () => {
//     try {
//       navigator.serviceWorker.register("/serviceWorker.js");
//     } catch {
//       console.error("service worker not installed");
//     }
//   });
// }

addHabitsElmentsStart();

const addButton = document.querySelector("#add-button");
addButton.addEventListener("click", () => {
  createAndShowModal();
});
