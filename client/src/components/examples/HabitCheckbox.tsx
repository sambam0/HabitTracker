import { HabitCheckbox } from "../HabitCheckbox";
import { useState } from "react";

export default function HabitCheckboxExample() {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(true);

  return (
    <div className="flex gap-4 p-6">
      <HabitCheckbox checked={checked1} onChange={setChecked1} habitId="1" />
      <HabitCheckbox checked={checked2} onChange={setChecked2} habitId="2" />
    </div>
  );
}
