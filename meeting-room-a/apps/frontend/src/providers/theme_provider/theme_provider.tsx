"use client";

import React, { useEffect, useState } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

type ThemeType = "light" | "dark" | "system";

export function ThemeProvider({
  children,
}: React.ComponentProps<typeof NextThemesProvider>) {
  const [mounted, setMounted] = useState(false);
  const [initialTheme, setInitialTheme] = useState<ThemeType>("light");

  useEffect(() => {
    // Check for saved theme in localStorage
    const storedTheme = (localStorage.getItem("theme") ?? "light") as ThemeType;

    if (storedTheme) {
      setInitialTheme(storedTheme);
    } else {
      setInitialTheme("system");
    }
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div />;
  }
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme={initialTheme}
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}
