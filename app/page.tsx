import giveMeAJoke from "give-me-a-joke";

import { Button } from "@/components/ui/8bit/button";
import { Calendar } from "@/components/ui/8bit/calendar";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemSeparator,
  ItemTitle,
} from "@/components/ui/8bit/item";
import { Avatar, AvatarFallback } from "@/components/ui/8bit/avatar";
import HealthBar from "@/components/ui/8bit/health-bar";
import ManaBar from "@/components/ui/8bit/mana-bar";

const panelClass =
  "rounded-none border-4 border-border bg-card/80 p-6 text-center shadow-[6px_6px_0_var(--border)] backdrop-blur-sm dark:border-ring";

const wishlistItems = [
  {
    id: "crt-monitor",
    title: "JVC CRT Monitor",
    description: "Need razor-sharp scanlines for proper sprite testing.",
  },
  {
    id: "synth-module",
    title: "Modular Synth Kit",
    description: "Fuel for the lab&apos;s ambient radar pings.",
  },
  {
    id: "nano-drone",
    title: "Pixelated Nano Drone",
    description: "For scouting secret boss rooms around the city.",
  },
  {
    id: "mech-keyboard",
    title: "Magenta Switch Keyboard",
    description: "Because plotting chaos deserves the perfect click.",
  },
] as const;

async function getJokeOfTheDay() {
  try {
    return await new Promise<string>((resolve, reject) => {
      giveMeAJoke.getRandomDadJoke((joke: string) => {
        if (joke) {
          resolve(joke);
        } else {
          reject(new Error("No joke received"));
        }
      });
    });
  } catch {
    return "The joke machine is recalibrating—check back after the next coffee break.";
  }
}

export default async function Home() {
  const joke = await getJokeOfTheDay();
  const today = new Date();

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-12 px-6 py-16 text-foreground">
      <section className="flex flex-col items-center gap-6 text-center">
        <div className="space-y-3">
          <p className="retro text-xs uppercase tracking-[0.4em] text-muted-foreground">
            Laboratory Intel
          </p>
          <h1 className="retro text-3xl uppercase tracking-[0.3em]">
            Welcome to Fyke&apos;s Laboratory
          </h1>
          <p className="retro text-base leading-relaxed text-muted-foreground">
            Where my plans, whatever the hell I want to do are listed here.
          </p>
        </div>
        <Button
          asChild
          className="retro h-12 px-10 text-base uppercase tracking-[0.3em]"
        >
          <a href="#wishlist">Learn More</a>
        </Button>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <div className={panelClass}>
            <p className="retro text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Mission Planner
            </p>
            <div className="mt-6 flex justify-center">
              <Calendar
                mode="single"
                selected={today}
                initialFocus
                className="text-center"
              />
            </div>
          </div>

          <div id="wishlist" className={panelClass}>
            <p className="retro text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Wishlist
            </p>
            <div className="mt-6">
              <ItemGroup className="gap-3">
                {wishlistItems.map((item, index) => (
                  <div key={item.id}>
                    <Item variant="outline" className="flex flex-col items-center">
                      <ItemContent className="items-center text-center">
                        <ItemTitle className="retro text-base uppercase tracking-[0.2em]">
                          {item.title}
                        </ItemTitle>
                        <ItemDescription className="retro text-sm text-muted-foreground">
                          {item.description}
                        </ItemDescription>
                      </ItemContent>
                      <ItemContent className="mt-2 flex justify-center">
                        <span className="retro text-xs uppercase tracking-[0.3em] text-muted-foreground">
                          #{String(index + 1).padStart(2, "0")}
                        </span>
                      </ItemContent>
                    </Item>
                    {index < wishlistItems.length - 1 && (
                      <ItemSeparator className="my-3 border-dashed border-border" />
                    )}
                  </div>
                ))}
              </ItemGroup>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className={`${panelClass} text-center`}>
            <p className="retro text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Player Card
            </p>
            <div className="mt-6 flex flex-col items-center gap-4">
              <Avatar className="size-24" variant="pixel">
                <AvatarFallback>FY</AvatarFallback>
              </Avatar>
              <div className="space-y-2">
                <p className="retro text-xl uppercase tracking-[0.3em]">Fyke</p>
                <p className="retro text-xs uppercase tracking-[0.4em] text-muted-foreground">
                  Guardian of Chaotic Plans
                </p>
              </div>
              <div className="flex w-full flex-col gap-4 text-center">
                <div className="flex flex-col items-center">
                  <p className="retro mb-2 text-xs uppercase tracking-[0.3em]">
                    Health
                  </p>
                  <HealthBar
                    value={86}
                    variant="retro"
                    className="h-6 w-full"
                  />
                </div>
                <div className="flex flex-col items-center">
                  <p className="retro mb-2 text-xs uppercase tracking-[0.3em]">
                    Mana
                  </p>
                  <ManaBar
                    value={64}
                    variant="retro"
                    className="h-6 w-full"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className={panelClass}>
            <p className="retro text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Random Joke of the Day
            </p>
            <p className="retro mt-6 text-base leading-relaxed text-center text-muted-foreground">
              {joke}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
