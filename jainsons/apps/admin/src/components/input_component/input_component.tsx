// "use client";
// import { ChangeEventHandler, FC, FocusEventHandler, useState } from "react";
// import { IoEye } from "react-icons/io5";
// import { IoEyeOff } from "react-icons/io5";

// interface IInputComponentProps {
//   label?: string;
//   id: string;
//   type: string;
//   placeholder: string;
//   value?: string | number;
//   className?: string;
//   currentLength?: number;
//   maxLength?: number;
//   errorMessage?: false | null | string;
//   onChange: ChangeEventHandler<HTMLInputElement>;
//   onBlur?: FocusEventHandler<HTMLInputElement>;
//   showPassword?: boolean;
// }

// const InputComponent: FC<IInputComponentProps> = ({
//   label,
//   id,
//   type = "text",
//   placeholder,
//   value,
//   className,
//   currentLength,
//   maxLength,
//   errorMessage,
//   onChange,
//   onBlur,
// }) => {
//   const [showPassword, setShowPassword] = useState(false);

//   return (
//     <div className="w-full relative transition-all duration-300">
//       {label && (
//         <label
//           htmlFor={id}
//           className={`text-on-surface dark:text-on-dark-surface block mb-1 text-body-1 font-body-1 ${errorMessage && "text-error"}`}
//         >
//           {label}
//         </label>
//       )}
//       <div className="relative">
//         <input
//           value={value}
//           type={
//             type.toLocaleLowerCase() === "password" ?
//               showPassword ?
//                 "text"
//               : type
//             : type
//           }
//           id={id}
//           className={`shadow-sm placeholder:transition-transform placeholder:duration-300 text-on-surface dark:text-on-dark-surface bg-surface placeholder:text-[0.9375rem] placeholder:leading-[1.5rem] text-[0.9375rem] leading-[1.5rem] dark:bg-dark-surface placeholder:ease-out focus:placeholder:translate-x-[3px] rounded-md w-full px-[14px] py-[7px] ring-1 ring-gray-300 dark:ring-slate-600 autofill:bg-surface dark:autofill:bg-dark-surface focus:outline-none ${type.toLocaleLowerCase() === "password" && "pr-8"} focus:ring-app-primary focus:dark:ring-app-primary focus:ring-[2px] focus:shadow-shadow-sm focus:shadow-app-primary focus:dark:shadow-app-primary ${errorMessage && "ring-error"} ${className}`}
//           placeholder={placeholder}
//           onChange={(e) => {
//             if (maxLength != undefined && e.target.value.length > maxLength)
//               return;
//             onChange(e);
//           }}
//           onBlur={onBlur}
//         ></input>
//         {type.toLocaleLowerCase() === "password" && (
//           <span
//             className="text-on-surface absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer dark:text-on-dark-surface"
//             onClick={() => setShowPassword(!showPassword)}
//           >
//             {!showPassword ?
//               <IoEye />
//             : <IoEyeOff />}
//           </span>
//         )}
//       </div>
//       {errorMessage && <em className="text-error text-xs">{errorMessage}</em>}
//       {maxLength ?
//         <span
//           className={`flex justify-end pt-1 mr-2 text-xs text-gray-400 ${currentLength !== undefined && maxLength !== undefined && currentLength === maxLength && "text-error"} `}
//         >{`${currentLength}/${maxLength}`}</span>
//       : <></>}
//     </div>
//   );
// };

// export default InputComponent;
