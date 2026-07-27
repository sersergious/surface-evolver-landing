"use client";

import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark" | undefined>(undefined);

  useEffect(() => {
    const stored = localStorage.getItem("se-theme");
    if (stored === "dark" || stored === "light") {
      setTheme(stored);
      // Also re-apply it: without this the icon reflects the saved choice but
      // the page keeps rendering the OS theme, and the two disagree.
      document.documentElement.setAttribute("data-theme", stored);
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setTheme(prefersDark ? "dark" : "light");
    }
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("se-theme", next);
  };

  return (
    <button
      onClick={toggle}
      className="btn btn-ghost btn-sm btn-circle"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <SunIcon className="h-5 w-5" />
      ) : (
        <MoonIcon className="h-5 w-5" />
      )}
    </button>
  );
}
