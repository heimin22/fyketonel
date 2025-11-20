"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/8bit/navigation-menu";
import { Button } from "@/components/ui/8bit/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Plans", href: "/plans" },
];

type ThemeMode = "light" | "dark";

export function RetroNavigation() {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    if (typeof window === "undefined") return "light";
    const storedTheme = window.localStorage.getItem("pixel-theme");
    if (storedTheme === "light" || storedTheme === "dark") {
      return storedTheme;
    }
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
  });

  useEffect(() => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;

    root.classList.toggle("dark", theme === "dark");
    root.dataset.theme = theme;

    if (typeof window !== "undefined") {
      window.localStorage.setItem("pixel-theme", theme);
    }
  }, [theme]);

  return (
    <header
      className="border-b-4 border-border bg-background px-4 py-4 text-foreground shadow-[0_8px_0_var(--border)]"
    >
      <div className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-between gap-4">
        <Link
          href="/"
          className="retro text-xs uppercase tracking-[0.5em]"
        >
          FYKE&apos;S LABORATORY
        </Link>

        <NavigationMenu
          viewport={false}
          className="justify-start text-[0.65rem] uppercase tracking-[0.2em] text-foreground [&_[data-slot=navigation-menu-trigger]]:rounded-none"
        >
          <NavigationMenuList className="gap-3">
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.label}>
                <NavigationMenuLink asChild className="retro">
                  <Link
                    href={link.href}
                    className={cn(
                      "inline-flex items-center border-4 px-5 py-2 text-foreground transition hover:-translate-y-1",
                      "border-border bg-card hover:bg-primary hover:text-primary-foreground shadow-[4px_4px_0_var(--border)]"
                    )}
                  >
                    {link.label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <Button
          type="button"
          font="retro"
          variant="default"
          onClick={() => setTheme((prev) => (prev === "light" ? "dark" : "light"))}
          className="border-4 border-border bg-primary px-6 py-3 text-[10px] uppercase tracking-[0.3em] text-primary-foreground shadow-[4px_4px_0_var(--border)] hover:bg-secondary hover:text-secondary-foreground"
        >
          {theme === "light" ? "Switch to Dark" : "Switch to Light"}
        </Button>
      </div>
    </header>
  );
}

export default RetroNavigation;

