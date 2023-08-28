import createAndShowModal from "./js/addHabit/createAndShowModal.js";

// PWA
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    try {
      navigator.serviceWorker.register("/serviceWorker.js");
    } catch {
      console.error("service worker not installed");
    }
  });
}

const addButton = document.querySelector("#add-button");
addButton.addEventListener("click", () => {
  createAndShowModal();
});
