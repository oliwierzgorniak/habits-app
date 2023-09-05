export default function getCompletionLevel(habitId) {
  const habitsJSON = localStorage.getItem("habits-list");
  const habits = JSON.parse(habitsJSON);
  return habits.find(({ id }) => id == habitId).completionLevel;
}
