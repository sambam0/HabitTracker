import { WeeklyTrendsChart } from "../WeeklyTrendsChart";

export default function WeeklyTrendsChartExample() {
  const mockData = [
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
    <div className="p-6 max-w-4xl">
      <WeeklyTrendsChart data={mockData} />
    </div>
  );
}
