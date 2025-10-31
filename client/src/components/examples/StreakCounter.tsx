import { StreakCounter } from "../StreakCounter";

export default function StreakCounterExample() {
  return (
    <div className="space-y-4 p-6">
      <StreakCounter currentStreak={0} bestStreak={5} />
      <StreakCounter currentStreak={5} bestStreak={12} />
      <StreakCounter currentStreak={14} bestStreak={30} />
      <StreakCounter currentStreak={45} bestStreak={45} />
    </div>
  );
}
