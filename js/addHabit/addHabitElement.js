import getStreak from "./addHabitElement/getStreak.js";
import updateHabitListProperty from "./addHabitElement/updateHabitListProperty.js";

export default function addHabitElement(id, name, streak) {
  let habitElement = document.createElement("li");
  habitElement.classList.add("habit");

  let nameElement = document.createElement("span");
  nameElement.innerText = name;
  habitElement.append(nameElement);

  let streakElement = document.createElement("span");
  streakElement.innerText = streak || "0";
  streakElement.classList.add("streak");
  habitElement.append(streakElement);

  let doneButtonElement = document.createElement("button");
  doneButtonElement.dataset.habitid = id;
  doneButtonElement.innerText = "+";
  doneButtonElement.addEventListener("click", (e) => {
    const habitId = e.target.dataset.habitid;
    const newStreak = getStreak(habitId) + 1;
    updateHabitListProperty(habitId, "streak", newStreak);
    const habitListItemElement = e.target.parentNode;
    let streakElement = habitListItemElement.querySelector(".streak");
    streakElement.innerText = newStreak;
  });
  habitElement.append(doneButtonElement);

  let habitsContainerElement = document.querySelector("#habits-container");
  habitsContainerElement.append(habitElement);
}
