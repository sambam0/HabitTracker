import { Check } from "lucide-react";
import { useState } from "react";

interface HabitCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  habitId: string;
}

export function HabitCheckbox({ checked, onChange, habitId }: HabitCheckboxProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    onChange(!checked);
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <button
      onClick={handleClick}
      className={`
        w-8 h-8 rounded-lg border-2 flex items-center justify-center
        transition-all duration-200 hover-elevate active-elevate-2
        ${checked 
          ? 'bg-primary border-primary-border' 
          : 'border-border bg-background'
        }
        ${isAnimating ? 'animate-pulse-check' : ''}
      `}
      data-testid={`checkbox-habit-${habitId}`}
    >
      {checked && (
        <Check className="h-5 w-5 text-primary-foreground" />
      )}
    </button>
  );
}
