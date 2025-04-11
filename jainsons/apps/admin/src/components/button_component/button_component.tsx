"use client";
import { FC, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BeatLoader } from "react-spinners";

interface IButtonComponentProps {
  type?: "submit" | "reset" | "button";
  loading?: boolean;
  btnText?: string;
  handleSubmit?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  disabled?: boolean;
  icon?: ReactNode;
  iconClassName?: string;
  children?: ReactNode;
  rest?: Record<string, unknown>[]; // This prop appears unused in the implementation; consider removing.
}

const ButtonComponent: FC<IButtonComponentProps> = ({
  type = "submit",
  loading,
  btnText,
  handleSubmit,
  className,
  icon,
  iconClassName,
  children,
  ...rest
}) => {
  return (
    <Button
      type={type}
      onClick={loading ? (e) => e.preventDefault() : handleSubmit}
      className={cn(
        "bg-primary shadow-primary text-button transition-color w-full flex justify-center px-4 py-2 tracking-wide text-white rounded-md shadow-sm duration-300 ease-in cursor-pointer hover:translate-y-[-1px] hover:bg-primary-dark",
        className
      )}
      {...rest}
    >
      {/* Show loader when loading */}
      {loading ?
        <BeatLoader color="#ffffff" />
      : <>
          {children || (
            <div className="flex items-center gap-2">
              {/* Button text */}
              {btnText && (
                <span className="flex justify-center items-center">
                  {btnText}
                </span>
              )}

              {/* Optional icon */}
              {icon && (
                <span className="flex justify-center items-center">
                  <i className={cn("bx bx-xs", iconClassName, icon)}></i>
                </span>
              )}
            </div>
          )}
        </>
      }
    </Button>
  );
};

export default ButtonComponent;
