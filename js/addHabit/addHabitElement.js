import getCompletionLevel from "./addHabitElement/getCompletionLevel.js";
import updateHabitListProperty from "./addHabitElement/updateHabitListProperty.js";
import updateStreak from "./addHabitElement/updateStreak.js";

export default function addHabitElement({
  id,
  name,
  streak,
  goal,
  unit,
  completionLevel,
}) {
  let habitElement = document.createElement("li");
  habitElement.classList.add("habit");

  let nameElement = document.createElement("span");
  nameElement.innerText = name;
  habitElement.append(nameElement);

  let streakElement = document.createElement("span");
  streakElement.innerText = streak || "0";
  streakElement.dataset.id = id;
  streakElement.classList.add("streak");
  habitElement.append(streakElement);

  let completionLevelContainer = document.createElement("div");
  let completionLevelElement = document.createElement("span");
  completionLevelElement.innerText = completionLevel || 0;
  completionLevelElement.classList.add("completion-level");
  completionLevelContainer.append(completionLevelElement);

  let completionGoalElement = document.createElement("span");
  completionGoalElement.innerText = `/${goal} ${unit}`;
  completionLevelContainer.append(completionGoalElement);

  habitElement.append(completionLevelContainer);

  let doneButtonElement = document.createElement("button");
  doneButtonElement.dataset.id = id;
  doneButtonElement.innerText = "+";
  doneButtonElement.addEventListener("click", (e) => {
    const habitId = e.target.dataset.id;
    const newCompletionLevel = getCompletionLevel(habitId) + 1;
    updateHabitListProperty(habitId, "completionLevel", newCompletionLevel);
    const habitListItemElement = e.target.parentNode;
    let completionLevelElement =
      habitListItemElement.querySelector(".completion-level");
    completionLevelElement.innerText = newCompletionLevel;
    updateStreak(habitId);
  });
  habitElement.append(doneButtonElement);

  let habitsContainerElement = document.querySelector("#habits-container");
  habitsContainerElement.append(habitElement);
}
