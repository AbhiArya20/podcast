"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { FC } from "react";

interface ICheckboxComponentProps {
  label: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  id: string;
}

const CheckboxComponent: FC<ICheckboxComponentProps> = ({
  checked,
  onCheckedChange,
  label,
  id,
}) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        checked={checked}
        onCheckedChange={onCheckedChange}
        id={id}
        className="data-[state=checked]:bg-primary ring-2 ring-gray-300 dark:ring-slate-500 data-[state=checked]:ring-primary dark:data-[state=checked]:ring-primary outline-none border-none"
      />
      <label
        htmlFor={id}
        className="text-body-1 text-on-foreground block cursor-pointer peer-disabled:opacity-70 peer-disabled:cursor-not-allowed"
      >
        {label}
      </label>
    </div>
  );
};

export default CheckboxComponent;
