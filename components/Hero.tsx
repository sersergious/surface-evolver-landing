import Image from "next/image";
import DownloadButton from "./DownloadButton";
import { GitHubIcon } from "./icons";
import { BRAKKE, CHANGELOG, LATEST, REPO } from "@/lib/release";

const stats = [
  { value: "190k", label: "lines of C engine, unmodified" },
  { value: "20 / 20", label: "bundled datafiles render correctly" },
  { value: "345 KB", label: "Rust worker sidecar" },
  { value: "3", label: "platforms, installers included" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-base-content/10">
      <div
        aria-hidden
        className="bg-grid pointer-events-none absolute inset-0 text-base-content"
      />

      <div className="relative mx-auto max-w-6xl px-4 pt-20 pb-0 sm:px-6 sm:pt-28">
        <div className="flex flex-col items-center gap-8 text-center">
          <a
            href={CHANGELOG}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-base-content/15 px-3 py-1 text-xs text-base-content/70 transition-colors hover:border-base-content/40 hover:text-base-content"
          >
            <span className="font-mono">{LATEST}</span>
            <span className="text-base-content/30">·</span>
            <span>Periodic surfaces now render correctly</span>
            <span aria-hidden>→</span>
          </a>

          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tighter text-balance sm:text-6xl lg:text-7xl">
            Surface Evolver, without the terminal.
          </h1>

          <p className="max-w-2xl text-lg leading-relaxed text-base-content/60 text-pretty">
            A native desktop app for macOS, Linux and Windows that wraps Ken
            Brakke&apos;s{" "}
            <a
              href={BRAKKE}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base-content underline underline-offset-4 decoration-base-content/30 hover:decoration-base-content"
            >
              Surface Evolver
            </a>{" "}
            C engine in a three-pane interface: datafile editor, the complete
            command language, and a live WebGL viewer.
          </p>

          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <DownloadButton className="btn btn-primary px-6" />
            <a
              href={REPO}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline border-base-content/20 px-6 hover:border-base-content"
            >
              <GitHubIcon />
              View source
            </a>
          </div>
        </div>

        {/* Real app capture: cube.fe refined and evolved under its volume
            constraint. Two shots — the app follows the OS appearance, so the
            page shows the one matching the theme it is read in (globals.css).
            fetchPriority rather than `preload`: preloading would fetch both. */}
        <figure className="mt-16 sm:mt-20">
          <div className="overflow-hidden rounded-xl border border-base-content/10 bg-base-200">
            <Image
              src="/app-screenshot-light.png"
              alt="Surface Evolver desktop app: .fe datafile editor, command log, and a cube evolved into a sphere in the 3D viewer"
              width={1280}
              height={800}
              fetchPriority="high"
              className="shot-light w-full"
            />
            <Image
              src="/app-screenshot-dark.png"
              alt="Surface Evolver desktop app in dark mode: .fe datafile editor, command log, and a cube evolved into a sphere in the 3D viewer"
              width={1280}
              height={800}
              fetchPriority="high"
              className="shot-dark w-full"
            />
          </div>
          <figcaption className="mt-4 text-center text-sm text-base-content/40">
            <code className="font-mono">cube.fe</code> refined twice and evolved
            to a sphere under its volume constraint — energy, area and mesh
            counts update live in the titlebar.
          </figcaption>
        </figure>
      </div>

      <dl className="relative mt-16 grid grid-cols-2 border-t border-base-content/10 sm:mt-20 lg:grid-cols-4">
        {stats.map(({ value, label }) => (
          <div
            key={label}
            className="border-b border-r border-base-content/10 px-6 py-8 last:border-r-0 lg:border-b-0"
          >
            <dt className="text-3xl font-semibold tracking-tight tabular-nums">
              {value}
            </dt>
            <dd className="mt-1 text-sm text-base-content/50">{label}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
