import Image from "next/image";
import { GitHubIcon } from "./icons";
import {
  ARCHITECTURE,
  BRAKKE,
  CHANGELOG,
  LICENSE,
  RELEASES,
  REPO,
} from "@/lib/release";

const columns = [
  {
    title: "Page",
    links: [
      { label: "Features", href: "#features" },
      { label: "Workflow", href: "#workflow" },
      { label: "Commands", href: "#commands" },
      { label: "Download", href: "#download" },
    ],
  },
  {
    title: "Source",
    links: [
      { label: "GitHub", href: REPO },
      { label: "Releases", href: RELEASES },
      { label: "Changelog", href: CHANGELOG },
      { label: "Architecture", href: ARCHITECTURE },
      { label: "Apache 2.0", href: LICENSE },
    ],
  },
  {
    title: "Built with",
    links: [
      { label: "Surface Evolver", href: BRAKKE },
      { label: "Tauri", href: "https://tauri.app" },
      { label: "Three.js", href: "https://threejs.org" },
      { label: "daisyUI", href: "https://daisyui.com" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-base-100">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2.5">
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
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-base-content/45">
              A desktop wrapper around Ken Brakke&apos;s engine. An independent
              hobby project — no company, no roadmap.
            </p>
            <a
              href={REPO}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm text-base-content/60 hover:text-base-content"
            >
              <GitHubIcon />
              sersergious/surface-evolver
            </a>
          </div>

          {columns.map(({ title, links }) => (
            <div key={title}>
              <p className="font-mono text-xs uppercase tracking-widest text-base-content/40">
                {title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target={href.startsWith("#") ? undefined : "_blank"}
                      rel={href.startsWith("#") ? undefined : "noopener noreferrer"}
                      className="text-sm text-base-content/55 transition-colors hover:text-base-content"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-3 border-t border-base-content/10 pt-6 text-xs text-base-content/35">
          <p>
            The C engine is Ken Brakke&apos;s Surface Evolver; this app is a
            wrapper around it.
          </p>
          <p>Apache License 2.0</p>
        </div>
      </div>
    </footer>
  );
}
