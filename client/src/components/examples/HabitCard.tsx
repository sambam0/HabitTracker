import { HabitCard, type Habit } from "../HabitCard";
import { useState } from "react";

export default function HabitCardExample() {
  const [habits, setHabits] = useState<Habit[]>([
    {
      id: "1",
      name: "Morning Meditation",
      description: "10 minutes of mindful meditation",
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
      completedToday: true,
    },
  ]);

  const handleToggle = (habitId: string) => {
    setHabits(prev =>
      prev.map(h =>
        h.id === habitId ? { ...h, completedToday: !h.completedToday } : h
      )
    );
    console.log(`Toggled habit ${habitId}`);
  };

  return (
    <div className="space-y-4 p-6 max-w-2xl">
      {habits.map(habit => (
        <HabitCard
          key={habit.id}
          habit={habit}
          onToggle={handleToggle}
          onEdit={(id) => console.log(`Edit habit ${id}`)}
          onDelete={(id) => console.log(`Delete habit ${id}`)}
        />
      ))}
    </div>
  );
}
