"use client";
import { FC } from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface IChipComponentProps {
  label?: string;
  icon?: string;
  iconClassName?: string;
  className?: string;
  closable?: boolean;
  closableIconClassName?: string;
  onClosableClick?: () => void;
}

const ChipComponent: FC<IChipComponentProps> = ({
  label,
  className,
  icon,
  iconClassName,
  closable,
  closableIconClassName,
  onClosableClick,
}) => {
  return (
    <Badge
      className={cn(
        "bg-primary-alpha text-primary flex items-center gap-2 px-3 py-2 pointer-events-none",
        className
      )}
    >
      {/* Label and Icon */}
      <div className="flex items-center gap-2">
        {label && (
          <span className="flex justify-center items-center">{label}</span>
        )}
        {icon && (
          <span className="flex justify-center items-center">
            <i className={cn("bx bx-xs", iconClassName, icon)}></i>
          </span>
        )}
      </div>

      {/* Closable Icon */}
      {closable && (
        <span
          className="flex justify-between items-center cursor-pointer"
          onClick={onClosableClick}
        >
          <i className={cn("bx bx-x text-lg", closableIconClassName)}></i>
        </span>
      )}
    </Badge>
  );
};

export default ChipComponent;
