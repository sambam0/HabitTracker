import { Badge } from "@/components/ui/badge";

interface CategoryBadgeProps {
  category: string;
  color: string;
}

const categoryColors: Record<string, { bg: string; text: string }> = {
  health: { bg: "bg-emerald-500/20", text: "text-emerald-300" },
  productivity: { bg: "bg-blue-500/20", text: "text-blue-300" },
  fitness: { bg: "bg-orange-500/20", text: "text-orange-300" },
  learning: { bg: "bg-purple-500/20", text: "text-purple-300" },
  mindfulness: { bg: "bg-pink-500/20", text: "text-pink-300" },
  social: { bg: "bg-yellow-500/20", text: "text-yellow-300" },
  creative: { bg: "bg-indigo-500/20", text: "text-indigo-300" },
  finance: { bg: "bg-teal-500/20", text: "text-teal-300" },
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
