"use client";
import { FC, ReactNode } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  // SelectValue
} from "@/components/ui/select";

export interface ISelectOption {
  label: string;
  value: string;
  icon: ReactNode;
  disabled?: boolean;
}

interface ISelectComponentProps {
  trigger?: ReactNode;
  options: ISelectOption[];
  groupLabel?: string;
  className?: string; // To pass custom styles
  onChange?: (value: string) => void; // Callback for value change
}

const SelectComponent: FC<ISelectComponentProps> = ({
  trigger,
  options,
  groupLabel,
  className,
  onChange,
}) => {
  return (
    <Select onValueChange={onChange}>
      <SelectTrigger className={className}>{trigger}</SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {groupLabel && <SelectLabel>{groupLabel}</SelectLabel>}
          {options.map((option) => (
            <SelectItem
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              <div className="flex items-center">
                <span className="flex justify-center items-center">
                  {option.icon}
                </span>
                {/* <span className="flex justify-center items-center">
                                    {option.label}
                                </span> */}
              </div>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectComponent;
