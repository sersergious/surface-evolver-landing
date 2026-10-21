// Real engine output for cube.fe, captured from the app's worker (g 100 shows
// its last line). eigenprobe 0 counts Hessian eigenvalues below/at/above 0:
// none negative, so the evolved surface is stable.
const session = [
  { prompt: "cube.fe", cmd: "r", out: "Vertices: 50  Edges: 144  Facets: 96  Bodies: 1  Facetedges: 288" },
  { prompt: "cube.fe", cmd: "g 100", out: "  1. area:  4.90195578472321 energy:  4.90195578472321  scale: 0.358750" },
  { prompt: "cube.fe", cmd: "u", out: "Edges switched in equiangulation: 0" },
  { prompt: "cube.fe", cmd: "print body[1].volume", out: "1" },
  { prompt: "cube.fe", cmd: "eigenprobe 0", out: "Eigencounts:    0 <,  0 ==,  49 >" },
];

const constraints = [
  {
    title: "Soapfilm model only",
    body: "STRING and SIMPLEX datafiles are rejected at load with an explanation — neither model's cells can be drawn honestly by a triangulated-facet mesh. The engine still computes them; the command line still reaches them.",
  },
  {
    title: "Power features are CLI-only",
    body: "Hessian and eigenvalue stability analysis (hessian, eigenprobe, ritz), edgeswap, dissolve, jiggle, optimize, conj_grad, saddle. They work — there are just no buttons.",
  },
  {
    title: "No structured duplicates",
    body: "There are no physics or named-quantity panels: set gravity_constant 980, print body[1].volume and v already do the job. A second path is a second thing to keep correct.",
  },
  {
    title: "One live session at a time",
    body: "One engine per process, by design — that is what buys crash isolation and cancel-by-kill. Open files are tabs; switching reloads.",
  },
];

export default function Commands() {
  return (
    <section id="commands" className="border-b border-base-content/10">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <p className="font-mono text-xs uppercase tracking-widest text-base-content/40">
          Command language
        </p>
        <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tighter text-balance sm:text-5xl">
          Nothing was taken away.
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-base-content/60 text-pretty">
          Every command the original engine understands still works, typed into
          the same app that draws the result.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="overflow-hidden rounded-xl border border-base-content/10 bg-base-200">
            <div className="flex items-center gap-2 border-b border-base-content/10 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full border border-base-content/20" />
              <span className="h-2.5 w-2.5 rounded-full border border-base-content/20" />
              <span className="h-2.5 w-2.5 rounded-full border border-base-content/20" />
              <span className="ml-2 font-mono text-xs text-base-content/40">
                CLI pane
              </span>
            </div>
            <pre className="overflow-x-auto px-5 py-5 font-mono text-[13px] leading-7">
              <code>
                {session.map(({ prompt, cmd, out }) => (
                  <span key={cmd} className="block">
                    <span className="text-base-content/30">{prompt} &gt; </span>
                    <span className="text-base-content">{cmd}</span>
                    {"\n"}
                    <span className="text-base-content/50">{out}</span>
                    {"\n"}
                  </span>
                ))}
              </code>
            </pre>
          </div>

          <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-base-content/10 bg-base-content/10 sm:grid-cols-2 lg:grid-cols-1">
            {constraints.map(({ title, body }) => (
              <div key={title} className="bg-base-100 px-6 py-5">
                <dt className="font-medium tracking-tight">{title}</dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-base-content/55">
                  {body}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
