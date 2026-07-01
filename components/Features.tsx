import {
  BookOpenIcon,
  BoltIcon,
  ArrowPathIcon,
  CommandLineIcon,
  CubeTransparentIcon,
  WindowIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    icon: CubeTransparentIcon,
    title: "Live 3D Viewer",
    description:
      "WebGL mesh visualization powered by Three.js. Three render modes — solid, wireframe, and X-ray — with per-element colors, interactive vertex picking, and orbit controls.",
  },
  {
    icon: CommandLineIcon,
    title: "Full Command Language",
    description:
      "Every Surface Evolver command works in the built-in CLI — iteration, hessian analysis, macros, quantity and constraint definitions. If the original engine supports it, you can run it.",
  },
  {
    icon: BookOpenIcon,
    title: "Built-in Datafile Library",
    description:
      "25+ bundled .fe example files — cube, sphere, octahedron, catenoid, Kelvin-Phelan, knotty, and more — ready to load from the file pane.",
  },
  {
    icon: BoltIcon,
    title: "Evolve & Refine",
    description:
      "Iterate gradient descent, refine, equiangulate, vertex-average, and pop — from the Run menu or keyboard. Energy, area, and mesh counts update live in the titlebar.",
  },
  {
    icon: ArrowPathIcon,
    title: "Session Persistence",
    description:
      "Surfaces are auto-snapshotted between sessions. Reopen the app and your evolved surface comes back — no manual save required.",
  },
  {
    icon: WindowIcon,
    title: "Truly Native",
    description:
      "A real desktop window with a native menu bar and keyboard shortcuts — no browser, no server. The C engine is driven directly over FFI, and exports land in your Downloads folder.",
  },
];

export default function Features() {
  return (
    <section className="bg-base-200 py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-3xl font-bold text-base-content">
            Everything in one window
          </h2>
          <p className="text-base-content/60 max-w-xl mx-auto">
            From loading a surface to evolving, refining, and inspecting it —
            the full workflow without leaving the app.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, description }) => (
            <div key={title} className="card bg-base-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="card-body gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-base-content mb-1">{title}</h3>
                  <p className="text-sm text-base-content/60 leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
