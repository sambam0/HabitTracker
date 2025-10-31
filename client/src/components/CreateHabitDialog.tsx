import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

interface CreateHabitDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (habit: { name: string; description: string; category: string; color: string }) => void;
}

const categories = [
  { label: "Health", value: "health", color: "health" },
  { label: "Productivity", value: "productivity", color: "productivity" },
  { label: "Fitness", value: "fitness", color: "fitness" },
  { label: "Learning", value: "learning", color: "learning" },
  { label: "Mindfulness", value: "mindfulness", color: "mindfulness" },
  { label: "Social", value: "social", color: "social" },
  { label: "Creative", value: "creative", color: "creative" },
  { label: "Finance", value: "finance", color: "finance" },
];

export function CreateHabitDialog({ open, onOpenChange, onSave }: CreateHabitDialogProps) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const handleSave = () => {
    if (name && category) {
      const selectedCategory = categories.find(c => c.value === category);
      onSave({
        name,
        description,
        category: selectedCategory?.label || category,
        color: selectedCategory?.color || "health",
      });
      setName("");
      setDescription("");
      setCategory("");
      onOpenChange(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent data-testid="dialog-create-habit">
        <DialogHeader>
          <DialogTitle>Create New Habit</DialogTitle>
          <DialogDescription>
            Add a new habit to track. Fill in the details below.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="name">Habit Name *</Label>
            <Input
              id="name"
              placeholder="e.g., Morning Meditation"
              value={name}
              onChange={(e) => setName(e.target.value)}
              data-testid="input-habit-name"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Describe your habit..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              data-testid="input-habit-description"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="category">Category *</Label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger data-testid="select-habit-category">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat.value} value={cat.value}>
                    {cat.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            data-testid="button-cancel"
          >
            Cancel
          </Button>
          <Button
            onClick={handleSave}
            disabled={!name || !category}
            data-testid="button-save-habit"
          >
            Create Habit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
