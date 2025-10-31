import { Badge } from "@/components/ui/badge";

interface CategoryBadgeProps {
  category: string;
  color: string;
}

const categoryColors: Record<string, { bg: string; text: string }> = {
  health: { bg: "bg-green-100 dark:bg-green-900/30", text: "text-green-700 dark:text-green-300" },
  productivity: { bg: "bg-blue-100 dark:bg-blue-900/30", text: "text-blue-700 dark:text-blue-300" },
  fitness: { bg: "bg-orange-100 dark:bg-orange-900/30", text: "text-orange-700 dark:text-orange-300" },
  learning: { bg: "bg-purple-100 dark:bg-purple-900/30", text: "text-purple-700 dark:text-purple-300" },
  mindfulness: { bg: "bg-pink-100 dark:bg-pink-900/30", text: "text-pink-700 dark:text-pink-300" },
  social: { bg: "bg-yellow-100 dark:bg-yellow-900/30", text: "text-yellow-700 dark:text-yellow-300" },
  creative: { bg: "bg-indigo-100 dark:bg-indigo-900/30", text: "text-indigo-700 dark:text-indigo-300" },
  finance: { bg: "bg-emerald-100 dark:bg-emerald-900/30", text: "text-emerald-700 dark:text-emerald-300" },
};

export function CategoryBadge({ category, color }: CategoryBadgeProps) {
  const colorScheme = categoryColors[color.toLowerCase()] || categoryColors.health;
  
  return (
    <Badge 
      variant="secondary" 
      className={`${colorScheme.bg} ${colorScheme.text} border-0 text-xs font-medium`}
      data-testid={`badge-category-${category.toLowerCase()}`}
    >
      {category}
    </Badge>
  );
}
