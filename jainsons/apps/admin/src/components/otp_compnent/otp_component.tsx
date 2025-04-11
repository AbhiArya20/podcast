// import { nanoid } from "nanoid";
// import {
//   InputOTP,
//   InputOTPGroup,
//   InputOTPSeparator,
//   InputOTPSlot,
// } from "../ui/input-otp";
// import { FC } from "react";

// interface IOTPComponent {
//   label: string;
//   length: number;
//   errorMessage?: false | null | string;
//   onChange: (value: string) => void;
//   separator?: boolean;
// }

// const OTPComponent: FC<IOTPComponent> = ({
//   label,
//   length,
//   onChange,
//   errorMessage,
//   separator,
// }) => {
//   const items = [];
//   for (let i = 0; i < length; i++) {
//     const id = nanoid();
//     items.push(id);
//   }
//   return (
//     <div>
//       <label
//         className={`text-on-surface dark:text-on-dark-surface block mb-1 text-body-1 font-body-1 ${errorMessage && "text-error"}`}
//       >
//         {label}
//       </label>
//       <InputOTP maxLength={length} onChange={onChange}>
//         {items.map((item, idx) => (
//           <>
//             <InputOTPGroup key={item}>
//               <InputOTPSlot
//                 index={idx}
//                 className={`bg-surface dark:bg-dark-surface text-[0.9375rem] leading-[1.5rem] rounded-md ring-1 ring-gray-300 dark:ring-slate-600 autofill:bg-surface dark:autofill:bg-dark-surface focus:ring-app-primary focus:dark:ring-app-primary focus:ring-[2px] focus:shadow-shadow-sm focus:shadow-app-primary focus:dark:shadow-app-primary  focus:outline-none text-on-surface dark:text-on-dark-surface dark:border-slate-700 shadow-shadow-sm ${errorMessage && "ring-error"}`}
//               />
//             </InputOTPGroup>
//             {idx < length - 1 && separator && (
//               <InputOTPSeparator className="text-black dark:text-white" />
//             )}
//           </>
//         ))}
//       </InputOTP>
//       {errorMessage && <em className="text-xs text-red-500">{errorMessage}</em>}
//     </div>
//   );
// };

// export default OTPComponent;
