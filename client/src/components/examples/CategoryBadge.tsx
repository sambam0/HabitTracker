import { CategoryBadge } from "../CategoryBadge";

export default function CategoryBadgeExample() {
  return (
    <div className="flex flex-wrap gap-2">
      <CategoryBadge category="Health" color="health" />
      <CategoryBadge category="Productivity" color="productivity" />
      <CategoryBadge category="Fitness" color="fitness" />
      <CategoryBadge category="Learning" color="learning" />
      <CategoryBadge category="Mindfulness" color="mindfulness" />
    </div>
  );
}
