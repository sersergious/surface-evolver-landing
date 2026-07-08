import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-base-100">
      {/* engineering-grid backdrop, echoes the app icon */}
      <div aria-hidden className="bg-grid pointer-events-none absolute inset-0 text-base-content" />
      {/* subtle radial glow behind the screenshot */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/3 h-[600px] bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--color-primary)_12%,transparent),transparent_65%)]"
      />
      <div className="relative hero-content flex-col gap-14 py-20 px-4 text-center max-w-6xl mx-auto">
        <div className="space-y-6">
          <div className="badge badge-primary badge-outline gap-1 text-xs">
            macOS · Linux · Windows · Apache 2.0
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold leading-tight tracking-tight text-base-content">
            Minimal surfaces.{" "}
            <span className="text-primary">Maximum clarity.</span>
          </h1>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto leading-relaxed">
            A native desktop app wrapping Ken Brakke&apos;s{" "}
            <a
              href="https://facstaff.susqu.edu/brakke/evolver/evolver.html"
              target="_blank"
              rel="noopener noreferrer"
              className="link link-primary"
            >
              Surface Evolver
            </a>{" "}
            C engine — datafile editor, full command language, and a live 3D
            viewer in one window. Load, evolve, refine, inspect, export.
          </p>
        </div>

        {/* Real app screenshot: cube.fe refined + evolved under its volume constraint */}
        <figure className="w-full max-w-4xl">
          <Image
            src="/app-screenshot.png"
            alt="Surface Evolver desktop app: .fe datafile editor, CLI with evolution output, and a cube evolved into a sphere in the 3D viewer"
            width={1280}
            height={800}
            preload
            className="rounded-xl ring-1 ring-base-content/10 shadow-2xl"
          />
          <figcaption className="mt-4 text-sm text-base-content/40">
            cube.fe refined and evolved to a sphere under its volume constraint
            — energy, area, and mesh counts update live.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
