import { EmptyState } from "../EmptyState";
import { Target } from "lucide-react";

export default function EmptyStateExample() {
  return (
    <div className="p-6">
      <EmptyState
        icon={Target}
        title="No habits yet"
        description="Start building better habits by creating your first habit tracker."
        actionLabel="Create Your First Habit"
        onAction={() => console.log("Create habit clicked")}
      />
    </div>
  );
}
