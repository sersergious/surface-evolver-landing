import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import { GitHubIcon } from "./icons";
import { REPO } from "@/lib/release";

const links = [
  { href: "#features", label: "Features" },
  { href: "#workflow", label: "Workflow" },
  { href: "#commands", label: "Commands" },
  { href: "#download", label: "Download" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-base-content/10 bg-base-100/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center gap-6 px-4 sm:px-6">
        <a href="#" className="flex items-center gap-2.5">
          <Image
            src="/surface-evolver.svg"
            alt=""
            width={28}
            height={28}
            className="h-7 w-7 rounded-md"
          />
          <span className="text-[15px] font-semibold tracking-tight">
            Surface Evolver
          </span>
        </a>

        <ul className="hidden flex-1 items-center gap-6 md:flex">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="text-sm text-base-content/60 transition-colors hover:text-base-content"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-1 md:ml-0">
          <ThemeToggle />
          <a
            href={REPO}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub repository"
            className="btn btn-ghost btn-sm btn-square"
          >
            <GitHubIcon />
          </a>
          <a href="#download" className="btn btn-primary btn-sm ml-2">
            Download
          </a>
        </div>
      </nav>
    </header>
  );
}
