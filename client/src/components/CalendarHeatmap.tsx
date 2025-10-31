import { Card } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface HeatmapDay {
  date: string;
  count: number;
  total: number;
}

interface CalendarHeatmapProps {
  data: HeatmapDay[];
}

export function CalendarHeatmap({ data }: CalendarHeatmapProps) {
  const getIntensityClass = (count: number, total: number) => {
    if (total === 0) return "bg-muted";
    const percentage = (count / total) * 100;
    if (percentage === 0) return "bg-muted";
    if (percentage < 25) return "bg-primary/20";
    if (percentage < 50) return "bg-primary/40";
    if (percentage < 75) return "bg-primary/60";
    if (percentage < 100) return "bg-primary/80";
    return "bg-primary";
  };

  const weeks: HeatmapDay[][] = [];
  let currentWeek: HeatmapDay[] = [];

  data.forEach((day, index) => {
    currentWeek.push(day);
    if (currentWeek.length === 7 || index === data.length - 1) {
      weeks.push([...currentWeek]);
      currentWeek = [];
    }
  });

  return (
    <Card className="p-6 glass-card">
      <h3 className="text-lg font-semibold mb-4">Activity Overview</h3>
      <TooltipProvider>
        <div className="flex gap-1 overflow-x-auto pb-2">
          {weeks.map((week, weekIndex) => (
            <div key={weekIndex} className="flex flex-col gap-1">
              {week.map((day, dayIndex) => (
                <Tooltip key={dayIndex}>
                  <TooltipTrigger asChild>
                    <div
                      className={`w-4 h-4 rounded-sm ${getIntensityClass(day.count, day.total)} hover-elevate cursor-pointer transition-all`}
                      data-testid={`heatmap-cell-${day.date}`}
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-xs">
                      {day.date}: {day.count}/{day.total} completed
                    </p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          ))}
        </div>
      </TooltipProvider>
      <div className="flex items-center gap-2 mt-4 text-xs text-muted-foreground">
        <span>Less</span>
        <div className="flex gap-1">
          <div className="w-3 h-3 rounded-sm bg-muted" />
          <div className="w-3 h-3 rounded-sm bg-primary/20" />
          <div className="w-3 h-3 rounded-sm bg-primary/40" />
          <div className="w-3 h-3 rounded-sm bg-primary/60" />
          <div className="w-3 h-3 rounded-sm bg-primary/80" />
          <div className="w-3 h-3 rounded-sm bg-primary" />
        </div>
        <span>More</span>
      </div>
    </Card>
  );
}
