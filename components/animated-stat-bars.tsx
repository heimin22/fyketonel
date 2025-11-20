"use client";

import { useEffect, useState } from "react";
import HealthBar from "@/components/ui/8bit/health-bar";
import ManaBar from "@/components/ui/8bit/mana-bar";
import { Skeleton } from "@/components/ui/8bit/skeleton";

interface AnimatedStatBarsProps {
  healthValue: number;
  manaValue: number;
}

export default function AnimatedStatBars({
  healthValue,
  manaValue,
}: AnimatedStatBarsProps) {
  const [currentHealth, setCurrentHealth] = useState(0);
  const [currentMana, setCurrentMana] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Ensure component is mounted before starting animations
    const mountTimer = setTimeout(() => {
      setIsMounted(true);
    }, 0);

    return () => clearTimeout(mountTimer);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    
    // Simulate initial loading
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(loadingTimer);
  }, [isMounted]);

  useEffect(() => {
    if (isLoading || !isMounted) return;

    // Animate health bar
    const healthInterval = setInterval(() => {
      setCurrentHealth((prev) => {
        if (prev >= healthValue) {
          clearInterval(healthInterval);
          return healthValue;
        }
        return Math.min(prev + 2, healthValue);
      });
    }, 20);

    // Animate mana bar with slight delay
    const manaTimeout = setTimeout(() => {
      const manaInterval = setInterval(() => {
        setCurrentMana((prev) => {
          if (prev >= manaValue) {
            clearInterval(manaInterval);
            return manaValue;
          }
          return Math.min(prev + 2, manaValue);
        });
      }, 20);
    }, 400);

    return () => {
      clearInterval(healthInterval);
      clearTimeout(manaTimeout);
    };
  }, [isLoading, isMounted, healthValue, manaValue]);

  if (!isMounted || isLoading) {
    return (
      <div className="flex w-full flex-col gap-4 text-center">
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center justify-between w-full">
            <p className="retro text-xs uppercase tracking-[0.3em]">Health</p>
            <Skeleton className="h-4 w-12" />
          </div>
          <Skeleton className="h-6 w-full" />
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center justify-between w-full">
            <p className="retro text-xs uppercase tracking-[0.3em]">Mana</p>
            <Skeleton className="h-4 w-12" />
          </div>
          <Skeleton className="h-6 w-full" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-4 text-center">
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center justify-between w-full">
          <p className="retro text-xs uppercase tracking-[0.3em]">Health</p>
          <p className="retro text-xs text-muted-foreground">
            {currentHealth}/100
          </p>
        </div>
        <HealthBar value={currentHealth} variant="retro" className="h-6 w-full" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center justify-between w-full">
          <p className="retro text-xs uppercase tracking-[0.3em]">Mana</p>
          <p className="retro text-xs text-muted-foreground">
            {currentMana}/100
          </p>
        </div>
        <ManaBar value={currentMana} variant="retro" className="h-6 w-full" />
      </div>
    </div>
  );
}

