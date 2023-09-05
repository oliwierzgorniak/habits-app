export default function updateStreak(habitId) {
  const habitsJSON = localStorage.getItem("habits-list");
  const habits = JSON.parse(habitsJSON);

  habits.map((habit) => {
    if (habitId != habit.id) return habit;
    if (habit.completionLevel < habit.goal) return habit;

    const date = new Date();
    if (
      habit.lastStreakUpdate === null ||
      habit.lastStreakUpdate !== date.toDateString()
    ) {
      habit.streak++;
      habit.lastStreakUpdate = date.toDateString();
      let streakElement = document.querySelector(
        `.streak[data-id="${habitId}"]`
      );
      streakElement.innerText = habit.streak;
    }
    return habit;
  });

  localStorage.setItem("habits-list", JSON.stringify(habits));
}
