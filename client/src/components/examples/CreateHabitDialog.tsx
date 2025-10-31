import { CreateHabitDialog } from "../CreateHabitDialog";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function CreateHabitDialogExample() {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-6">
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>
      <CreateHabitDialog
        open={open}
        onOpenChange={setOpen}
        onSave={(habit) => {
          console.log("Created habit:", habit);
        }}
      />
    </div>
  );
}
