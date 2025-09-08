"use client";

import { ThemeProvider, useTheme } from "next-themes";

export default function Providers({ children }) {
  const { theme } = useTheme();

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange={false}
    >
      {children}
    </ThemeProvider>
  );
}
