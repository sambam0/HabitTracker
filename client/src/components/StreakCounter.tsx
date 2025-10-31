import { Flame } from "lucide-react";

interface StreakCounterProps {
  currentStreak: number;
  bestStreak: number;
}

export function StreakCounter({ currentStreak, bestStreak }: StreakCounterProps) {
  const getStreakColor = (streak: number) => {
    if (streak === 0) return "text-muted-foreground";
    if (streak < 7) return "text-yellow-500";
    if (streak < 30) return "text-orange-500";
    return "text-red-500";
  };

  return (
    <div className="flex items-center gap-4" data-testid="streak-counter">
      <div className="flex items-center gap-2">
        <Flame className={`h-5 w-5 ${getStreakColor(currentStreak)}`} />
        <div>
          <div className="text-2xl font-bold" data-testid="text-current-streak">
            {currentStreak}
          </div>
          <div className="text-xs text-muted-foreground">Current</div>
        </div>
      </div>
      <div className="h-10 w-px bg-border" />
      <div>
        <div className="text-lg font-semibold text-muted-foreground" data-testid="text-best-streak">
          {bestStreak}
        </div>
        <div className="text-xs text-muted-foreground">Best</div>
      </div>
    </div>
  );
}
