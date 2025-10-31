import { HabitCard, type Habit } from "@/components/HabitCard";
import { EmptyState } from "@/components/EmptyState";
import { CreateHabitDialog } from "@/components/CreateHabitDialog";
import { Button } from "@/components/ui/button";
import { Plus, Target } from "lucide-react";
import { useState } from "react";

export default function Dashboard() {
  const [dialogOpen, setDialogOpen] = useState(false);
  
  // TODO: Replace with real data from backend
  const [habits, setHabits] = useState<Habit[]>([
    {
      id: "1",
      name: "Morning Meditation",
      description: "10 minutes of mindful meditation to start the day",
      category: "Mindfulness",
      color: "mindfulness",
      currentStreak: 7,
      bestStreak: 12,
      completedToday: false,
    },
    {
      id: "2",
      name: "Read 30 Pages",
      description: "Read at least 30 pages of a book",
      category: "Learning",
      color: "learning",
      currentStreak: 14,
      bestStreak: 21,
      completedToday: false,
    },
    {
      id: "3",
      name: "Exercise",
      description: "30 minutes of physical activity",
      category: "Fitness",
      color: "fitness",
      currentStreak: 5,
      bestStreak: 15,
      completedToday: true,
    },
  ]);

  const handleToggle = (habitId: string) => {
    setHabits((prev) =>
      prev.map((h) =>
        h.id === habitId
          ? {
              ...h,
              completedToday: !h.completedToday,
              currentStreak: !h.completedToday ? h.currentStreak + 1 : h.currentStreak - 1,
            }
          : h
      )
    );
  };

  const handleCreateHabit = (newHabit: { name: string; description: string; category: string; color: string }) => {
    const habit: Habit = {
      id: String(Date.now()),
      ...newHabit,
      currentStreak: 0,
      bestStreak: 0,
      completedToday: false,
    };
    setHabits((prev) => [...prev, habit]);
  };

  const handleDelete = (habitId: string) => {
    setHabits((prev) => prev.filter((h) => h.id !== habitId));
  };

  const totalHabits = habits.length;
  const completedToday = habits.filter((h) => h.completedToday).length;
  const completionRate = totalHabits > 0 ? Math.round((completedToday / totalHabits) * 100) : 0;

  return (
    <div className="h-full overflow-auto">
      <div className="max-w-5xl mx-auto p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Today's Habits</h1>
            <p className="text-muted-foreground">
              {completedToday} of {totalHabits} completed ({completionRate}%)
            </p>
          </div>
          <Button onClick={() => setDialogOpen(true)} data-testid="button-create-habit">
            <Plus className="h-4 w-4 mr-2" />
            New Habit
          </Button>
        </div>

        {habits.length === 0 ? (
          <EmptyState
            icon={Target}
            title="No habits yet"
            description="Start building better habits by creating your first habit tracker."
            actionLabel="Create Your First Habit"
            onAction={() => setDialogOpen(true)}
          />
        ) : (
          <div className="space-y-4">
            {habits.map((habit) => (
              <HabitCard
                key={habit.id}
                habit={habit}
                onToggle={handleToggle}
                onEdit={(id) => console.log("Edit habit", id)}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}

        <CreateHabitDialog
          open={dialogOpen}
          onOpenChange={setDialogOpen}
          onSave={handleCreateHabit}
        />
      </div>
    </div>
  );
}
