"use client";
import { FC } from "react";
import { Alert } from "@/components/ui/alert";
import SubTitle1 from "@/components/typography_components/sub_title_1";
import Heading5 from "@/components/typography_components/heading_5";
import Icon from "@/components/icons/icon";
import { cn } from "@/lib/utils";

interface IAlertComponentProps {
  title?: string;
  titleClassName?: string;

  description?: string;
  descriptionClassName?: string;

  icon?: string;
  iconClassName?: string;

  color?: string;
  className?: string;
  closable?: boolean;
  closableIconClassName?: string;
  onClosableClick?: () => void;
}

const AlertComponent: FC<IAlertComponentProps> = ({
  className,

  icon,
  iconClassName,

  title,
  titleClassName,

  description,
  descriptionClassName,

  closable,
  closableIconClassName,
  onClosableClick,
}) => {
  return (
    <Alert
      className={cn(
        "bg-primary-alpha w-full h-full flex items-center gap-4",
        className
      )}
    >
      {/* Icon */}
      {(icon || iconClassName) && (
        <Icon className={cn("text-primary", iconClassName, icon)} />
      )}

      {/* Title and Description */}
      <div className="w-full h-full flex flex-col">
        {title && (
          <Heading5
            text={title}
            className={cn("text-primary leading-6", titleClassName)}
          />
        )}
        {description && (
          <SubTitle1
            text={description}
            className={cn("text-primary", descriptionClassName)}
          />
        )}
      </div>

      {/* Closable Icon */}
      {closable && (
        <span
          className="flex justify-between items-center cursor-pointer"
          onClick={onClosableClick}
        >
          <i className={cn("bx bx-md bx-x", closableIconClassName)}></i>
        </span>
      )}
    </Alert>
  );
};

export default AlertComponent;
