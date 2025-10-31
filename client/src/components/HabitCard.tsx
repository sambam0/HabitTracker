import { Card } from "@/components/ui/card";
import { HabitCheckbox } from "./HabitCheckbox";
import { StreakCounter } from "./StreakCounter";
import { CategoryBadge } from "./CategoryBadge";
import { MoreVertical, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export interface Habit {
  id: string;
  name: string;
  description: string;
  category: string;
  color: string;
  currentStreak: number;
  bestStreak: number;
  completedToday: boolean;
}

interface HabitCardProps {
  habit: Habit;
  onToggle: (habitId: string) => void;
  onEdit?: (habitId: string) => void;
  onDelete?: (habitId: string) => void;
}

export function HabitCard({ habit, onToggle, onEdit, onDelete }: HabitCardProps) {
  return (
    <Card 
      className={`p-6 hover-elevate transition-all duration-200 ${
        habit.completedToday ? 'opacity-70' : ''
      }`}
      data-testid={`card-habit-${habit.id}`}
    >
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <h3 
              className={`text-lg font-medium ${
                habit.completedToday ? 'line-through text-muted-foreground' : ''
              }`}
              data-testid={`text-habit-name-${habit.id}`}
            >
              {habit.name}
            </h3>
            <CategoryBadge category={habit.category} color={habit.color} />
          </div>
          <p className="text-sm text-muted-foreground" data-testid={`text-habit-description-${habit.id}`}>
            {habit.description}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <HabitCheckbox
            checked={habit.completedToday}
            onChange={() => onToggle(habit.id)}
            habitId={habit.id}
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" data-testid={`button-habit-menu-${habit.id}`}>
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem 
                onClick={() => onEdit?.(habit.id)}
                data-testid={`button-edit-habit-${habit.id}`}
              >
                <Pencil className="h-4 w-4 mr-2" />
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem 
                onClick={() => onDelete?.(habit.id)}
                className="text-destructive"
                data-testid={`button-delete-habit-${habit.id}`}
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="pt-4 border-t">
        <StreakCounter 
          currentStreak={habit.currentStreak} 
          bestStreak={habit.bestStreak} 
        />
      </div>
    </Card>
  );
}
