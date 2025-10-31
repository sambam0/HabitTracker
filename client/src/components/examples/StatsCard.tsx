import { StatsCard } from "../StatsCard";
import { Target, CheckCircle2, TrendingUp, Flame } from "lucide-react";

export default function StatsCardExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
      <StatsCard title="Total Habits" value={12} icon={Target} />
      <StatsCard title="Completions" value={248} icon={CheckCircle2} />
      <StatsCard title="Completion Rate" value="87%" icon={TrendingUp} subtitle="Last 7 days" />
      <StatsCard title="Longest Streak" value={45} icon={Flame} subtitle="Days" />
    </div>
  );
}
