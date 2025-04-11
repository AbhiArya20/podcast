"use client";
import { nanoid } from "nanoid";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "../../ui/input-otp";
import { FC, useContext } from "react";
import { OTPInputContext } from "input-otp";

interface IOTPComponent {
  label: string;
  length: number;
  errorMessage?: false | null | string;
  onChange: (value: string) => void;
  separator?: boolean;
}

const OTPComponent: FC<IOTPComponent> = ({
  label,
  length,
  onChange,
  errorMessage,
  separator,
}) => {
  const items = [];
  for (let i = 0; i < length; i++) {
    const id = nanoid();
    items.push(id);
  }

  return (
    <div>
      <label
        className={`text-on-foreground block mb-1 text-body-1 ${errorMessage && "text-red-500"}`}
      >
        {label}
      </label>
      <InputOTP maxLength={length} onChange={onChange}>
        {items.map((item, idx) => (
          <>
            <InputOTPGroup key={item}>
              <InputOTPSlotWithContext idx={idx} errorMessage={errorMessage} />
            </InputOTPGroup>
            {idx < length - 1 && separator && (
              <InputOTPSeparator className="text-black dark:text-white" />
            )}
          </>
        ))}
      </InputOTP>
      {errorMessage && <em className="text-xs text-red-500">{errorMessage}</em>}
    </div>
  );
};

const InputOTPSlotWithContext = ({
  idx,
  errorMessage,
}: {
  idx: number;
  errorMessage?: string | false | null;
}) => {
  const inputOTPContext = useContext(OTPInputContext);
  const slot = inputOTPContext.slots[idx];
  return (
    <InputOTPSlot
      index={idx}
      className={`bg-foreground text-[0.9375rem] leading-[1.5rem] rounded-md ring-1 ring-gray-300 dark:ring-slate-600 autofill:bg-foreground dark:autofill:bg-foreground text-on-foreground dark:text-on-foreground dark:border-slate-700 shadow-sm ${slot.isActive && "ring-primary dark:ring-primary ring-[2px] shadow-sm shadow-primary dark:shadow-primary outline-none"} ${errorMessage && "bg-red-500"}`}
    />
  );
};

export default OTPComponent;
