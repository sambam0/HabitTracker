import { Card } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";

interface CompletionRateCardProps {
  period: "7 days" | "30 days";
  percentage: number;
  trend: number;
}

export function CompletionRateCard({ period, percentage, trend }: CompletionRateCardProps) {
  const isPositive = trend >= 0;

  return (
    <Card className="p-6">
      <div className="mb-2">
        <p className="text-sm text-muted-foreground" data-testid={`text-period-${period}`}>
          Last {period}
        </p>
      </div>
      <div className="flex items-baseline gap-2 mb-2">
        <p className="text-4xl font-bold" data-testid={`text-completion-rate`}>
          {percentage}%
        </p>
        <div className={`flex items-center gap-1 text-sm ${
          isPositive ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
        }`}>
          {isPositive ? (
            <TrendingUp className="h-4 w-4" />
          ) : (
            <TrendingDown className="h-4 w-4" />
          )}
          <span data-testid="text-trend">{Math.abs(trend)}%</span>
        </div>
      </div>
      <p className="text-xs text-muted-foreground">
        Completion rate
      </p>
    </Card>
  );
}
