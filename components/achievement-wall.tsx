"use client";

import { cn } from "@/lib/utils";

interface Achievement {
  id: string;
  title: string;
  description: string;
  gamerscore: number;
  icon: string;
  pixelArt: React.ReactNode;
  unlocked: boolean;
  rarity?: "common" | "rare" | "legendary";
  unlockedDate?: string;
}

// Pixelated achievement icons
const OwlPixel = () => (
  <div className="flex flex-col items-center gap-0.5">
    {/* Owl head */}
    <div className="relative">
      {/* Ear tufts */}
      <div className="absolute -left-1.5 -top-0.5 h-2 w-1 bg-amber-700 dark:bg-amber-600 sm:h-2.5 sm:w-1.5" />
      <div className="absolute -right-1.5 -top-0.5 h-2 w-1 bg-amber-700 dark:bg-amber-600 sm:h-2.5 sm:w-1.5" />
      {/* Head */}
      <div className="relative h-6 w-7 border-2 border-foreground bg-amber-700 dark:bg-amber-600 sm:h-7 sm:w-8 sm:border-3">
        {/* Eyes */}
        <div className="absolute left-1 top-1.5 h-2 w-2 border border-foreground bg-yellow-200 dark:bg-yellow-100 sm:h-2.5 sm:w-2.5" />
        <div className="absolute right-1 top-1.5 h-2 w-2 border border-foreground bg-yellow-200 dark:bg-yellow-100 sm:h-2.5 sm:w-2.5" />
        {/* Pupils */}
        <div className="absolute left-1.5 top-2 h-1 w-1 bg-foreground sm:h-1.5 sm:w-1.5" />
        <div className="absolute right-1.5 top-2 h-1 w-1 bg-foreground sm:h-1.5 sm:w-1.5" />
        {/* Beak */}
        <div className="absolute bottom-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 bg-orange-500 sm:h-2 sm:w-2" style={{ clipPath: 'polygon(50% 100%, 0 0, 100% 0)' }} />
      </div>
    </div>
  </div>
);

const BugPixel = () => (
  <div className="flex flex-col items-center">
    <div className="relative">
      {/* Antennae */}
      <div className="absolute -left-1 -top-1.5 h-2 w-0.5 origin-bottom rotate-[-30deg] bg-foreground sm:h-2.5" />
      <div className="absolute -right-1 -top-1.5 h-2 w-0.5 origin-bottom rotate-[30deg] bg-foreground sm:h-2.5" />
      {/* Body segments */}
      <div className="flex flex-col gap-0.5">
        <div className="h-2 w-6 border-2 border-foreground bg-green-600 dark:bg-green-500 sm:h-2.5 sm:w-7 sm:border-3" />
        <div className="h-2.5 w-7 border-2 border-foreground bg-green-700 dark:bg-green-600 sm:h-3 sm:w-8 sm:border-3">
          {/* Spots */}
          <div className="absolute left-1 top-3 h-1 w-1 bg-foreground/50 sm:h-1.5 sm:w-1.5" />
          <div className="absolute right-1 top-3 h-1 w-1 bg-foreground/50 sm:h-1.5 sm:w-1.5" />
        </div>
      </div>
      {/* Legs */}
      <div className="absolute -left-1 top-2 h-0.5 w-2 bg-foreground sm:w-2.5" />
      <div className="absolute -right-1 top-2 h-0.5 w-2 bg-foreground sm:w-2.5" />
    </div>
  </div>
);

const CoffeePixel = () => (
  <div className="flex items-center justify-center">
    <div className="relative">
      {/* Steam */}
      <div className="absolute -top-2 left-1/2 flex -translate-x-1/2 gap-0.5">
        <div className="h-1.5 w-0.5 bg-muted-foreground/50 sm:h-2 sm:w-1" />
        <div className="h-2 w-0.5 bg-muted-foreground/50 sm:h-2.5 sm:w-1" />
        <div className="h-1.5 w-0.5 bg-muted-foreground/50 sm:h-2 sm:w-1" />
      </div>
      {/* Cup */}
      <div className="h-6 w-5 border-2 border-foreground bg-red-100 dark:bg-red-950 sm:h-7 sm:w-6 sm:border-3">
        {/* Coffee */}
        <div className="absolute bottom-0.5 left-0.5 right-0.5 h-3 bg-amber-900 dark:bg-amber-950 sm:h-3.5" />
      </div>
      {/* Handle */}
      <div className="absolute -right-1 top-1 h-4 w-2 rounded-r-full border-2 border-l-0 border-foreground sm:-right-1.5 sm:h-5 sm:w-2.5 sm:border-3" />
    </div>
  </div>
);

const TrophyPixel = () => (
  <div className="flex flex-col items-center gap-0.5">
    {/* Cup top */}
    <div className="h-1 w-2 bg-amber-400 dark:bg-amber-500 sm:h-1.5 sm:w-2.5" />
    {/* Cup body */}
    <div className="relative h-4 w-6 border-2 border-foreground bg-amber-400 dark:bg-amber-500 sm:h-5 sm:w-7 sm:border-3">
      {/* Handles */}
      <div className="absolute -left-1.5 top-0.5 h-3 w-1.5 rounded-l-full border-2 border-r-0 border-foreground sm:h-3.5 sm:w-2" />
      <div className="absolute -right-1.5 top-0.5 h-3 w-1.5 rounded-r-full border-2 border-l-0 border-foreground sm:h-3.5 sm:w-2" />
      {/* Star decoration */}
      <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 bg-amber-600 dark:bg-amber-700 sm:h-2 sm:w-2" />
    </div>
    {/* Base */}
    <div className="h-1 w-4 border-2 border-t-0 border-foreground bg-amber-600 dark:bg-amber-700 sm:h-1.5 sm:w-5" />
    <div className="h-0.5 w-5 bg-amber-700 dark:bg-amber-800 sm:h-1 sm:w-6" />
  </div>
);

const RocketPixel = () => (
  <div className="flex flex-col items-center">
    {/* Nose cone */}
    <div className="h-2 w-2 bg-red-500 sm:h-2.5 sm:w-2.5" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
    {/* Body */}
    <div className="relative h-5 w-4 border-2 border-foreground bg-gray-300 dark:bg-gray-600 sm:h-6 sm:w-5 sm:border-3">
      {/* Window */}
      <div className="absolute left-1/2 top-1 h-1.5 w-1.5 -translate-x-1/2 rounded-full border border-foreground bg-blue-300 dark:bg-blue-900 sm:h-2 sm:w-2" />
    </div>
    {/* Fins */}
    <div className="relative flex w-full justify-between">
      <div className="h-2 w-1.5 bg-red-600 sm:h-2.5 sm:w-2" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }} />
      <div className="h-2 w-1.5 bg-red-600 sm:h-2.5 sm:w-2" style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }} />
    </div>
    {/* Exhaust */}
    <div className="flex gap-0.5">
      <div className="h-1.5 w-1 bg-orange-500 sm:h-2 sm:w-1.5" />
      <div className="h-1 w-1 bg-yellow-400 sm:h-1.5 sm:w-1.5" />
      <div className="h-1.5 w-1 bg-orange-500 sm:h-2 sm:w-1.5" />
    </div>
  </div>
);

const MergePixel = () => (
  <div className="flex items-center justify-center gap-1">
    {/* Left branch */}
    <div className="flex flex-col items-end gap-0.5">
      <div className="h-0.5 w-3 bg-purple-500 sm:h-1 sm:w-4" />
      <div className="h-0.5 w-2 bg-purple-500 sm:h-1 sm:w-2.5" />
    </div>
    {/* Center merge point */}
    <div className="h-3 w-3 border-2 border-purple-500 bg-purple-500/20 sm:h-4 sm:w-4 sm:border-3" />
    {/* Right branch */}
    <div className="flex flex-col items-start gap-0.5">
      <div className="h-0.5 w-3 bg-purple-500 sm:h-1 sm:w-4" />
      <div className="h-0.5 w-2 bg-purple-500 sm:h-1 sm:w-2.5" />
    </div>
  </div>
);

const BookStackPixel = () => (
  <div className="flex flex-col gap-0.5">
    {/* Top book */}
    <div className="h-1.5 w-6 border-2 border-foreground bg-red-600 dark:bg-red-700 sm:h-2 sm:w-7" />
    {/* Middle book */}
    <div className="h-1.5 w-7 border-2 border-foreground bg-green-600 dark:bg-green-700 sm:h-2 sm:w-8" />
    {/* Bottom book */}
    <div className="relative h-2 w-6 border-2 border-foreground bg-blue-600 dark:bg-blue-700 sm:h-2.5 sm:w-7">
      {/* Bookmark */}
      <div className="absolute left-1 top-0 h-3 w-1 bg-amber-400 sm:h-3.5 sm:w-1.5" />
    </div>
  </div>
);

const LightningPixel = () => (
  <div className="flex items-center justify-center">
    <div className="relative h-7 w-4 sm:h-8 sm:w-5">
      {/* Lightning bolt */}
      <div className="absolute left-1/2 top-0 h-3 w-2 -translate-x-1/2 bg-yellow-400 sm:h-3.5 sm:w-2.5" style={{ clipPath: 'polygon(0 0, 100% 0, 20% 50%, 100% 50%, 0 100%, 80% 50%)' }} />
      <div className="absolute bottom-0 left-1/2 h-3 w-2 -translate-x-1/2 bg-yellow-300 sm:h-3.5 sm:w-2.5" style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0 100%, 80% 50%)' }} />
      {/* Glow effect */}
      <div className="absolute inset-0 bg-yellow-400/30 blur-sm" />
    </div>
  </div>
);

const achievements: Achievement[] = [
  {
    id: "night-owl",
    title: "Night Owl",
    description: "Committed code at 3 AM",
    gamerscore: 50,
    icon: "🦉",
    pixelArt: <OwlPixel />,
    unlocked: true,
    rarity: "common",
    unlockedDate: "Oct 2024",
  },
  {
    id: "bug-hunter",
    title: "Bug Hunter",
    description: "Fixed 100 bugs this month",
    gamerscore: 25,
    icon: "🐛",
    pixelArt: <BugPixel />,
    unlocked: true,
    rarity: "common",
    unlockedDate: "Sep 2024",
  },
  {
    id: "coffee-addict",
    title: "Coffee Addict",
    description: "Drank 500 cups of coffee",
    gamerscore: 10,
    icon: "☕",
    pixelArt: <CoffeePixel />,
    unlocked: true,
    rarity: "common",
    unlockedDate: "Aug 2024",
  },
  {
    id: "stackoverflow-survivor",
    title: "Stack Overflow Survivor",
    description: "Found solution without Stack Overflow",
    gamerscore: 100,
    icon: "🏆",
    pixelArt: <TrophyPixel />,
    unlocked: true,
    rarity: "legendary",
    unlockedDate: "Nov 2024",
  },
  {
    id: "first-deploy",
    title: "First Deploy",
    description: "Successfully deployed first project",
    gamerscore: 15,
    icon: "🚀",
    pixelArt: <RocketPixel />,
    unlocked: true,
    rarity: "common",
    unlockedDate: "June 2021",
  },
  {
    id: "merge-master",
    title: "Merge Master",
    description: "Resolved 50 merge conflicts",
    gamerscore: 30,
    icon: "🔀",
    pixelArt: <MergePixel />,
    unlocked: true,
    rarity: "rare",
    unlockedDate: "Oct 2024",
  },
  {
    id: "documentation-hero",
    title: "Documentation Hero",
    description: "Wrote comprehensive docs",
    gamerscore: 40,
    icon: "📚",
    pixelArt: <BookStackPixel />,
    unlocked: false,
    rarity: "rare",
  },
  {
    id: "speed-demon",
    title: "Speed Demon",
    description: "Optimized load time by 80%",
    gamerscore: 75,
    icon: "⚡",
    pixelArt: <LightningPixel />,
    unlocked: false,
    rarity: "legendary",
  },
];

export function AchievementWall({ className }: { className?: string }) {
  const totalGamerscore = achievements
    .filter((a) => a.unlocked)
    .reduce((sum, a) => sum + a.gamerscore, 0);
  const maxGamerscore = achievements.reduce((sum, a) => sum + a.gamerscore, 0);

  return (
    <section
      className={cn(
        "relative space-y-4 sm:space-y-5 md:space-y-6",
        className
      )}
    >
      {/* Header */}
      <div className="space-y-2 text-center sm:space-y-2.5 md:space-y-3">
        <p className="retro text-[0.5rem] uppercase tracking-[0.3em] text-muted-foreground sm:text-[0.6rem] sm:tracking-[0.35em] md:text-xs md:tracking-[0.4em]">
          Developer Achievements
        </p>
        <h2 className="retro text-lg uppercase tracking-[0.2em] sm:text-xl sm:tracking-[0.25em] md:text-2xl md:tracking-[0.3em]">
          Trophy Case
        </h2>
        
        {/* Gamerscore Counter */}
        <div className="mx-auto inline-flex items-center gap-2 rounded-none border-2 border-border bg-card/80 px-4 py-2 shadow-[2px_2px_0_var(--border)] backdrop-blur-sm dark:border-ring sm:gap-2.5 sm:border-3 sm:px-5 sm:py-2.5 sm:shadow-[3px_3px_0_var(--border)] md:gap-3 md:border-4 md:px-6 md:py-3 md:shadow-[4px_4px_0_var(--border)]">
          <span className="text-xl sm:text-2xl md:text-3xl">🏆</span>
          <div className="text-left">
            <p className="retro text-[0.5rem] uppercase tracking-[0.2em] text-muted-foreground sm:text-[0.6rem] sm:tracking-[0.25em] md:text-xs">
              Total Score
            </p>
            <p className="retro text-sm font-bold tracking-[0.15em] text-primary sm:text-base sm:tracking-[0.2em] md:text-lg md:tracking-[0.25em]">
              {totalGamerscore} / {maxGamerscore}G
            </p>
          </div>
        </div>
      </div>

      {/* Achievements Grid */}
      <div className="grid gap-3 sm:gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-2">
        {achievements.map((achievement) => (
          <AchievementCard key={achievement.id} achievement={achievement} />
        ))}
      </div>
    </section>
  );
}

function AchievementCard({ achievement }: { achievement: Achievement }) {
  const rarityColors = {
    common: "border-border dark:border-ring",
    rare: "border-blue-500 dark:border-blue-400",
    legendary: "border-amber-500 dark:border-amber-400",
  };

  const rarityGlow = {
    common: "",
    rare: "shadow-[0_0_20px_rgba(59,130,246,0.3)]",
    legendary: "shadow-[0_0_20px_rgba(245,158,11,0.5)]",
  };

  const rarityBg = {
    common: "bg-card/80",
    rare: "bg-gradient-to-br from-card/80 to-blue-500/10",
    legendary: "bg-gradient-to-br from-card/80 to-amber-500/10",
  };

  return (
    <div
      className={cn(
        "group relative rounded-none border-2 backdrop-blur-sm transition-all duration-200 sm:border-3 md:border-4",
        achievement.unlocked
          ? cn(
              rarityColors[achievement.rarity || "common"],
              rarityBg[achievement.rarity || "common"],
              "shadow-[2px_2px_0_var(--border)] hover:bg-accent/30 hover:border-primary hover:shadow-[3px_3px_0_var(--primary)] sm:hover:shadow-[4px_4px_0_var(--primary)] hover:-translate-y-1 cursor-pointer sm:shadow-[3px_3px_0_var(--border)] md:shadow-[4px_4px_0_var(--border)]",
              rarityGlow[achievement.rarity || "common"]
            )
          : "border-border/40 bg-card/40 opacity-60 shadow-[2px_2px_0_var(--border)] grayscale dark:border-ring/40 sm:shadow-[3px_3px_0_var(--border)] md:shadow-[4px_4px_0_var(--border)]"
      )}
    >
      {/* Locked overlay */}
      {!achievement.unlocked && (
        <div className="absolute inset-0 z-10 flex items-center justify-center rounded-none bg-background/60 backdrop-blur-[2px]">
          <div className="relative flex flex-col items-center gap-1">
            {/* Retro lock icon */}
            <div className="relative">
              {/* Lock shackle */}
              <div className="mx-auto h-6 w-8 rounded-t-full border-4 border-b-0 border-muted-foreground/40 sm:h-7 sm:w-9 md:h-8 md:w-10" />
              {/* Lock body */}
              <div className="relative h-8 w-10 rounded-none border-4 border-muted-foreground/40 bg-muted/40 sm:h-9 sm:w-11 md:h-10 md:w-12">
                {/* Keyhole */}
                <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
                  <div className="size-2 rounded-full bg-muted-foreground/40 sm:size-2.5 md:size-3" />
                  <div className="h-2 w-1 bg-muted-foreground/40 sm:h-2.5 sm:w-1.5 md:h-3 md:w-2" />
                </div>
              </div>
            </div>
            {/* Locked text */}
            <span className="retro text-[0.4rem] uppercase tracking-[0.2em] text-muted-foreground/60 sm:text-[0.45rem] md:text-[0.5rem]">
              Locked
            </span>
          </div>
        </div>
      )}

      <div className="relative flex gap-3 p-3 sm:gap-4 sm:p-4 md:gap-5 md:p-5">
        {/* Icon */}
        <div className="flex-shrink-0">
          <div
            className={cn(
              "flex size-12 items-center justify-center rounded-none border-2 shadow-inner sm:size-14 sm:border-3 md:size-16 md:border-4",
              achievement.unlocked
                ? "border-border bg-background/80 dark:border-ring"
                : "border-border/40 bg-background/40 dark:border-ring/40"
            )}
          >
            {achievement.pixelArt}
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col justify-between">
          <div className="space-y-1 sm:space-y-1.5">
            <div className="flex items-start justify-between gap-2">
              <h3
                className={cn(
                  "retro text-xs uppercase leading-tight tracking-[0.15em] sm:text-sm sm:tracking-[0.18em] md:text-base md:tracking-[0.2em]",
                  achievement.unlocked
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
              >
                {achievement.title}
              </h3>
              <span
                className={cn(
                  "retro flex-shrink-0 text-[0.5rem] font-bold tracking-[0.15em] sm:text-[0.6rem] sm:tracking-[0.18em] md:text-xs md:tracking-[0.2em]",
                  achievement.unlocked ? "text-primary" : "text-muted-foreground"
                )}
              >
                {achievement.gamerscore}G
              </span>
            </div>
            <p
              className={cn(
                "retro text-[0.5rem] leading-relaxed tracking-[0.1em] sm:text-[0.6rem] sm:tracking-[0.12em] md:text-xs md:tracking-[0.15em]",
                achievement.unlocked
                  ? "text-muted-foreground"
                  : "text-muted-foreground/60"
              )}
            >
              {achievement.description}
            </p>
          </div>

          {/* Unlocked date and rarity */}
          {achievement.unlocked && (
            <div className="mt-2 flex items-center justify-between sm:mt-2.5 md:mt-3">
              <span className="retro text-[0.45rem] uppercase tracking-[0.15em] text-muted-foreground/80 sm:text-[0.5rem] sm:tracking-[0.18em] md:text-[0.55rem] md:tracking-[0.2em]">
                {achievement.unlockedDate}
              </span>
              {achievement.rarity && achievement.rarity !== "common" && (
                <span
                  className={cn(
                    "retro rounded-none border px-1.5 py-0.5 text-[0.4rem] uppercase tracking-[0.15em] sm:px-2 sm:py-1 sm:text-[0.45rem] sm:tracking-[0.18em] md:text-[0.5rem] md:tracking-[0.2em]",
                    achievement.rarity === "rare" &&
                      "border-blue-500 bg-blue-500/10 text-blue-600 dark:border-blue-400 dark:text-blue-400",
                    achievement.rarity === "legendary" &&
                      "border-amber-500 bg-amber-500/10 text-amber-600 dark:border-amber-400 dark:text-amber-400"
                  )}
                >
                  {achievement.rarity}
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Shine effect on hover for unlocked achievements */}
      {achievement.unlocked && (
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
          }}
        />
      )}
    </div>
  );
}

export default AchievementWall;

