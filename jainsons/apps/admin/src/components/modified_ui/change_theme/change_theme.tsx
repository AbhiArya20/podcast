"use client";
import CircularIcon from "@/components/circular_icon/circular_icon";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useTheme } from "next-themes";
const themes = [
  {
    label: "Light",
    icon: <i className={"bx bx-sun text-2xl"}></i>,
    value: "light",
  },
  {
    label: "Dark",
    icon: <i className={"bx bx-moon text-2xl"}></i>,
    value: "dark",
  },
  {
    label: "System",
    icon: <i className={"bx bx-desktop text-2xl"}></i>,
    value: "system",
  },
];

const ChangeTheme = () => {
  const { theme: themeMode, setTheme } = useTheme();

  const handleThemeChange = (theme: string) => {
    setTheme(theme);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div>
          <CircularIcon
            icon={
              themeMode === "light" ? "bx-sun"
              : themeMode === "dark" ?
                "bx-moon"
              : "bx-desktop"
            }
          />
        </div>
      </PopoverTrigger>
      <PopoverContent
        sideOffset={20}
        className="bg-foreground w-44 p-0 py-2 border-none outline-none ring-0 dark:bg-dark-surface"
      >
        <div className="grid gap-1">
          {themes.map((theme) => (
            <div
              key={theme.value}
              className={`flex items-center gap-4 px-4 py-2 dark:hover:bg-gray-600/40 hover:bg-gray-200/60 cursor-pointer ${theme.value === themeMode && "bg-primary-alpha dark:bg-primary-dark-alpha hover:bg-primary-alpha hover:dark:bg-primary-dark-alpha"}`}
              onClick={() => handleThemeChange(theme.value)}
            >
              <span
                className={`flex justify-center items-center ${theme.value === themeMode && "text-primary"}`}
              >
                {theme.icon}
              </span>
              <span
                className={`flex justify-center items-center ${theme.value === themeMode && "text-primary"}`}
              >
                {theme.label}
              </span>
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ChangeTheme;
