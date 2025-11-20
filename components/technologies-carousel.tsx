"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/8bit/carousel";
import Autoplay from "embla-carousel-autoplay";
import {
  SiDart,
  SiTypescript,
  SiJavascript,
  SiFlutter,
  SiPostgresql,
  SiSqlite,
  SiFirebase,
  SiSupabase,
  SiGooglecloud,
  SiGithub,
  SiGitlab,
  SiMysql,
  SiPostman,
  SiCloudflare,
  SiExpress,
  SiNodedotjs,
  SiNextdotjs,
  SiThreedotjs,
  SiTailwindcss,
  SiReact,
  SiNpm,
  SiPnpm,
  SiBun,
  SiRemix,
  SiDocker,
  SiNeovim,
  SiAndroidstudio,
  SiArchlinux,
  SiLinux,
  SiGnubash,
  SiGit,
} from "react-icons/si";
import { TbDatabase, TbBrandVscode, TbBrandWindows, TbBrandPowershell, TbBrandVisualStudio } from "react-icons/tb";
import type { IconType } from "react-icons";

const panelClass =
  "rounded-none border-4 border-border bg-card/80 p-6 text-center shadow-[6px_6px_0_var(--border)] backdrop-blur-sm dark:border-ring";

const technologies: Array<{ name: string; icon: IconType }> = [
  { name: "Dart", icon: SiDart },
  { name: "TypeScript", icon: SiTypescript },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Flutter", icon: SiFlutter },
  { name: "PL/pgSQL", icon: SiPostgresql },
  { name: "SQL", icon: TbDatabase },
  { name: "SQLite", icon: SiSqlite },
  { name: "Firebase", icon: SiFirebase },
  { name: "Supabase", icon: SiSupabase },
  { name: "GCP", icon: SiGooglecloud },
  { name: "GitHub", icon: SiGithub },
  { name: "GitLab", icon: SiGitlab },
  { name: "MySQL", icon: SiMysql },
  { name: "Postman", icon: SiPostman },
  { name: "Cloudflare", icon: SiCloudflare },
  { name: "Express.js", icon: SiExpress },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Three.js", icon: SiThreedotjs },
  { name: "QuestDB", icon: TbDatabase },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "React", icon: SiReact },
  { name: "npm", icon: SiNpm },
  { name: "pnpm", icon: SiPnpm },
  { name: "Bun", icon: SiBun },
  { name: "Remix", icon: SiRemix },
  { name: "Docker", icon: SiDocker },
  { name: "Zed", icon: TbBrandVscode },
  { name: "Neovim", icon: SiNeovim },
  { name: "Android Studio", icon: SiAndroidstudio },
  { name: "Visual Studio Code", icon: TbBrandVscode },
  { name: "Visual Studio", icon: TbBrandVisualStudio },
  { name: "ArchLinux", icon: SiArchlinux },
  { name: "Linux", icon: SiLinux },
  { name: "Windows", icon: TbBrandWindows },
  { name: "Bash", icon: SiGnubash },
  { name: "Powershell", icon: TbBrandPowershell },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Git", icon: SiGit },
];

export default function TechnologiesCarousel() {
  return (
    <section className="space-y-6">
      <div className="space-y-3 text-center">
        <p className="retro text-xs uppercase tracking-[0.4em] text-muted-foreground">
          Tech Arsenal
        </p>
        <h2 className="retro text-2xl uppercase tracking-[0.3em]">
          Technologies I Use
        </h2>
      </div>
      <div className="relative px-12 md:px-16">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent>
            {technologies.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <CarouselItem
                  key={`${tech.name}-${index}`}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <div className={panelClass}>
                    <div className="flex flex-col items-center gap-3">
                      <Icon className="h-12 w-12" />
                      <p className="retro text-sm uppercase tracking-[0.2em]">
                        {tech.name}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}

