import {
  ArrowDownOnSquareStackIcon,
  ArrowPathIcon,
  CodeBracketSquareIcon,
  CubeTransparentIcon,
  CursorArrowRaysIcon,
  RectangleGroupIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  StopCircleIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    icon: CubeTransparentIcon,
    title: "Live WebGL viewer",
    description:
      "Three.js rendering with solid, wireframe and X-ray modes, native SE per-element colors, an all-edge overlay, orbit controls and an auto-fit camera. The original ships an X11/OpenGL window many users never get working.",
  },
  {
    icon: Squares2X2Icon,
    title: "Correct periodic rendering",
    description:
      "Foam and crystal models wrap around a periodic cell. A C accessor exposes the engine's per-edge wrap codes, so wrapped edges are hidden instead of drawn across the view — 103 of 368 edges in phelanc.fe. Non-destructive, unlike detorus.",
  },
  {
    icon: CodeBracketSquareIcon,
    title: "Syntax-highlighted editor",
    description:
      "Edit the .fe datafile in place with Save & Reload — change the geometry and re-run without leaving the app or restarting the engine.",
  },
  {
    icon: CursorArrowRaysIcon,
    title: "Click-to-inspect vertices",
    description:
      "Click any vertex for its id, coordinates, constraints and attribute flags, plus body centre-of-mass markers. In the original this is a print statement and a wall of numbers.",
  },
  {
    icon: ArrowPathIcon,
    title: "Topology ops with feedback",
    description:
      "Refine, equiangulate, vertex-average and pop from a menu or the keyboard — each reporting element deltas, named topology counters (pops, edgeswaps, dissolves) and ΔE instead of raw text.",
  },
  {
    icon: StopCircleIcon,
    title: "A real Stop button",
    description:
      "se_run is a blocking FFI call and cannot be interrupted in band, so cancelling kills the worker process. Your tab stays and the last auto-snapshot survives. In the original, Ctrl-C takes the whole program down with your surface.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Crash isolation",
    description:
      "The engine runs in a separate process. A segfault or an exit() on an unrecoverable error costs you a session, not the application.",
  },
  {
    icon: RectangleGroupIcon,
    title: "Session auto-restore",
    description:
      "The surface is snapshotted in the background after every mutating command, so your evolved state — not the original datafile — comes back after a restart.",
  },
  {
    icon: ArrowDownOnSquareStackIcon,
    title: "Library in, exports out",
    description:
      "20 curated example datafiles, all of which render, loadable in one click — plus upload of your own .fe files and export of the current surface as .fe or an exact-state .dmp.",
  },
];

export default function Features() {
  return (
    <section id="features">
      <div className="mx-auto max-w-6xl px-4 pt-24 sm:px-6">
        <p className="font-mono text-xs uppercase tracking-widest text-base-content/40">
          Features
        </p>
        <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tighter text-balance sm:text-5xl">
          Everything the desktop app adds.
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-base-content/60 text-pretty">
          The engine&apos;s command language is preserved verbatim — nothing was
          taken away. What follows is what sits on top of it.
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-6xl border-t border-base-content/10 sm:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="border-b border-base-content/10 px-4 py-10 sm:border-r sm:px-8 sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0"
            >
              <Icon className="h-5 w-5 text-base-content/70" />
              <h3 className="mt-4 font-medium tracking-tight">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-base-content/55">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
