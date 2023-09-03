export default function getStreak(habitId) {
  const habitsJSON = localStorage.getItem("habits-list");
  const habits = JSON.parse(habitsJSON);
  return habits.find(({ id }) => id == habitId).streak;
}
