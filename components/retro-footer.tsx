import Image from "next/image";
import Link from "next/link";
import { SiGithub, SiFacebook, SiLinkedin } from "react-icons/si";

const socialLinks = [
  {
    name: "GitHub",
    icon: SiGithub,
    url: "https://github.com/heimin22",
  },
  {
    name: "Facebook",
    icon: SiFacebook,
    url: "https://www.facebook.com/profile.php?id=61577905192138",
  },
  {
    name: "LinkedIn",
    icon: SiLinkedin,
    url: "https://www.linkedin.com/in/fyke-tonel-906663228/",
  },
];

export default function RetroFooter() {
  return (
    <footer className="mt-16 border-t-4 border-border bg-card/80 backdrop-blur-sm dark:border-ring">
      <div className="mx-auto flex max-w-[95vw] flex-col items-center justify-between gap-6 px-6 py-8 md:flex-row md:gap-12">
        {/* Logo and Copyright */}
        <div className="flex flex-col items-center gap-4 md:flex-row md:items-center">
          <div className="relative h-12 w-12 rounded-none border-4 border-border bg-background p-1 shadow-[4px_4px_0_var(--border)] dark:border-ring">
            <Image
              src="/assets/logobrain.png"
              alt="Logo"
              width={40}
              height={40}
              className="h-full w-full object-contain"
            />
          </div>
          <div className="text-center md:text-left">
            <p className="retro text-xs uppercase tracking-[0.25em] text-muted-foreground">
              © 2025 All Rights Reserved
            </p>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex items-center gap-4">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <Link
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex h-12 w-12 items-center justify-center rounded-none border-4 border-border bg-background shadow-[4px_4px_0_var(--border)] transition-all duration-200 hover:-translate-y-1 hover:border-primary hover:shadow-[6px_6px_0_var(--primary)] dark:border-ring"
                aria-label={social.name}
              >
                <Icon className="h-6 w-6 transition-colors group-hover:text-primary" />
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

