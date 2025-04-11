"use client";
import { cn } from "@/lib/utils";
import { ChangeEventHandler, FC, FocusEventHandler, useState } from "react";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";

interface IInputComponentProps {
  label?: string;
  id: string;
  type?: string;
  placeholder: string;
  value?: string | number;
  className?: string;
  currentLength?: number;
  maxLength?: number;
  errorMessage?: false | null | string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  showPassword?: boolean;
  disabled?: boolean;
}

const InputComponent: FC<IInputComponentProps> = ({
  label,
  id,
  type = "text",
  placeholder,
  value,
  className,
  currentLength,
  maxLength,
  errorMessage,
  onChange,
  onBlur,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full relative transition-all duration-300">
      {label && (
        <label
          htmlFor={id}
          className={`text-on-foreground block mb-1 text-body-2 ${errorMessage && "text-red-500"}`}
        >
          {label}
        </label>
      )}
      <div className="relative">
        <input
          value={value}
          type={
            type.toLocaleLowerCase() === "password" ?
              showPassword ?
                "text"
              : type
            : type
          }
          id={id}
          className={cn(
            `shadow-sm placeholder:transition-all placeholder:duration-300 text-on-foreground bg-foreground placeholder:text-[0.9375rem] placeholder:leading-[1.5rem] text-[0.9375rem] leading-[1.5rem] placeholder:ease-out focus:placeholder:translate-x-[3px] rounded-md w-full px-[14px] py-[7px] ring-1 ring-gray-300 dark:ring-slate-600 autofill:bg-foreground autofill:dark:bg-foreground focus:outline-none ${type.toLocaleLowerCase() === "password" && "pr-8"} focus:ring-primary dark:focus:ring-primary focus:ring-[2px] focus:shadow-md focus:shadow-primary ${errorMessage && "text-red-500 ring-red-500 dark:ring-red-500 focus:ring-red-500 shadow-none dark:shadow-none dark:focus:ring-red-500"}`,
            className
          )}
          placeholder={placeholder}
          onChange={(e) => {
            if (maxLength != undefined && e.target.value.length > maxLength)
              return;
            if (onChange !== undefined) onChange(e);
          }}
          onBlur={onBlur}
        ></input>
        {type.toLocaleLowerCase() === "password" && (
          <span
            className={`text-on-foreground absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer ${errorMessage && "text-red-500"}`}
            onClick={() => setShowPassword(!showPassword)}
          >
            {!showPassword ?
              <IoEye />
            : <IoEyeOff />}
          </span>
        )}
      </div>
      {errorMessage && <em className="text-xs text-red-500">{errorMessage}</em>}
      {maxLength ?
        <span
          className={`flex justify-end pt-1 mr-2 text-xs text-gray-400 ${currentLength !== undefined && maxLength !== undefined && currentLength === maxLength && "text-red-500"} `}
        >{`${currentLength}/${maxLength}`}</span>
      : <></>}
    </div>
  );
};

export default InputComponent;
