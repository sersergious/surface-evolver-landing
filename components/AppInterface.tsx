const panes = [
  {
    step: "01",
    label: "File pane",
    heading: "Load a surface",
    points: [
      "20 bundled .fe examples — cube, sphere, catenoid, crystal, phelanc — all of which render",
      "Upload your own datafiles; they sit alongside the bundled ones",
      "Open files as tabs; switching reloads the engine into a clean state",
      "Toggle the explorer with ⌘B",
    ],
  },
  {
    step: "02",
    label: "Editor & CLI",
    heading: "Drive the engine",
    points: [
      "Syntax-highlighted .fe editor with Save & Reload — no restart",
      "The complete Surface Evolver command language, verbatim",
      "Run menu: iterate ⌘G (×100 ⇧⌘G), refine ⌘R, equiangulate ⌘U, vertex average ⌘E",
      "Stop cancels a running command by killing the worker; the tab and the snapshot survive",
    ],
  },
  {
    step: "03",
    label: "Viewer pane",
    heading: "Watch it evolve",
    points: [
      "Three.js mesh with solid, wireframe and X-ray modes",
      "Native SE per-element colors, all-edge overlay, auto-fit camera",
      "Click a vertex for id, coordinates, constraints and flags",
      "Energy, area and element counts update live in the titlebar",
    ],
  },
];

export default function AppInterface() {
  return (
    <section id="workflow" className="border-b border-base-content/10 bg-base-200">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <p className="font-mono text-xs uppercase tracking-widest text-base-content/40">
          Workflow
        </p>
        <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tighter text-balance sm:text-5xl">
          Three panes. One window.
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-base-content/60 text-pretty">
          Load on the left, evolve in the middle, watch on the right — no
          terminal, no X11, no second program.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-base-content/10 bg-base-content/10 md:grid-cols-3">
          {panes.map(({ step, label, heading, points }) => (
            <div key={label} className="bg-base-100 p-8">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs text-base-content/30">
                  {step}
                </span>
                <span className="font-mono text-xs uppercase tracking-widest text-base-content/40">
                  {label}
                </span>
              </div>
              <h3 className="mt-4 text-xl font-medium tracking-tight">
                {heading}
              </h3>
              <ul className="mt-5 space-y-3">
                {points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-sm leading-relaxed text-base-content/55"
                  >
                    <span
                      aria-hidden
                      className="mt-2 h-px w-3 shrink-0 bg-base-content/25"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
