import {
  FolderOpenIcon,
  PencilSquareIcon,
  CubeTransparentIcon,
} from "@heroicons/react/24/outline";

const panes = [
  {
    icon: FolderOpenIcon,
    label: "File Pane",
    iconClass: "text-secondary",
    pillClass: "bg-secondary/10",
    dotClass: "bg-secondary",
    heading: "Your surfaces, organized",
    points: [
      "Browse the built-in library of 25+ .fe example files",
      "Upload your own datafiles — they sit alongside the bundled ones",
      "Open several files as tabs and switch between them",
      "Auto-restores your evolved surface on startup",
    ],
  },
  {
    icon: PencilSquareIcon,
    label: "Editor & CLI",
    iconClass: "text-primary",
    pillClass: "bg-primary/10",
    dotClass: "bg-primary",
    heading: "Edit the datafile, drive the engine",
    points: [
      "Syntax-highlighted .fe editor with Save & Reload",
      "CLI with the complete Surface Evolver command language — g, r, hessian, macros, quantity definitions",
      "Run-menu shortcuts: iterate ⌘G, refine ⌘R, equiangulate ⌘U, vertex average ⌘E",
      "Export the current surface as .fe or an exact-state .dmp",
    ],
  },
  {
    icon: CubeTransparentIcon,
    label: "Viewer Pane",
    iconClass: "text-accent",
    pillClass: "bg-accent/10",
    dotClass: "bg-accent",
    heading: "See it evolve in real time",
    points: [
      "WebGL mesh rendered with Three.js as it evolves",
      "Solid, wireframe, and X-ray modes with native SE per-element colors",
      "Click a vertex to inspect coordinates, constraints, and flags",
      "Panels for named quantities, energy breakdown, and physics settings",
    ],
  },
];

export default function AppInterface() {
  return (
    <section className="bg-base-100 py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-3xl font-bold text-base-content">
            Three panes. One workflow.
          </h2>
          <p className="text-base-content/60 max-w-xl mx-auto">
            Load a surface on the left, evolve it in the middle, watch it
            transform on the right.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {panes.map(({ icon: Icon, label, iconClass, pillClass, dotClass, heading, points }) => (
            <div key={label} className="flex flex-col gap-4">
              <div className={`inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full ${pillClass}`}>
                <Icon className={`h-4 w-4 ${iconClass}`} />
                <span className={`text-xs font-semibold ${iconClass}`}>{label}</span>
              </div>
              <h3 className="font-semibold text-base-content">{heading}</h3>
              <ul className="space-y-2">
                {points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-base-content/60">
                    <span className={`mt-1.5 shrink-0 h-1.5 w-1.5 rounded-full ${dotClass}`} />
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
