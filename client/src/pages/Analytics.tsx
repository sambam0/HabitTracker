import { StatsCard } from "@/components/StatsCard";
import { CompletionRateCard } from "@/components/CompletionRateCard";
import { CalendarHeatmap } from "@/components/CalendarHeatmap";
import { WeeklyTrendsChart } from "@/components/WeeklyTrendsChart";
import { Target, CheckCircle2, TrendingUp, Flame } from "lucide-react";

export default function Analytics() {
  // TODO: Replace with real data from backend
  const generateMockHeatmapData = () => {
    const data = [];
    const today = new Date();
    
    for (let i = 83; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      const dateStr = date.toISOString().split('T')[0];
      const total = 5;
      const count = Math.floor(Math.random() * (total + 1));
      
      data.push({
        date: dateStr,
        count,
        total,
      });
    }
    
    return data;
  };

  const mockWeeklyData = [
    { week: "Week 1", completions: 28 },
    { week: "Week 2", completions: 35 },
    { week: "Week 3", completions: 31 },
    { week: "Week 4", completions: 42 },
    { week: "Week 5", completions: 38 },
    { week: "Week 6", completions: 45 },
    { week: "Week 7", completions: 40 },
    { week: "Week 8", completions: 48 },
  ];

  return (
    <div className="h-full overflow-auto">
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Analytics</h1>
          <p className="text-muted-foreground">
            Track your progress and insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatsCard 
            title="Total Habits" 
            value={12} 
            icon={Target}
          />
          <StatsCard 
            title="Total Completions" 
            value={248} 
            icon={CheckCircle2}
          />
          <StatsCard 
            title="Avg. Completion Rate" 
            value="87%" 
            icon={TrendingUp}
            subtitle="Last 30 days"
          />
          <StatsCard 
            title="Longest Streak" 
            value={45} 
            icon={Flame}
            subtitle="Days"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <CompletionRateCard period="7 days" percentage={87} trend={5} />
          <CompletionRateCard period="30 days" percentage={76} trend={-3} />
        </div>

        <CalendarHeatmap data={generateMockHeatmapData()} />

        <WeeklyTrendsChart data={mockWeeklyData} />
      </div>
    </div>
  );
}
