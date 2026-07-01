export default function Footer() {
  return (
    <footer className="footer footer-center bg-base-300 text-base-content/60 py-10 px-4">
      <div className="space-y-3 text-sm text-center">
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
          <a
            href="https://github.com/sersergious/surface-evolver"
            target="_blank"
            rel="noopener noreferrer"
            className="link link-hover font-medium text-base-content/70"
          >
            GitHub
          </a>
          <span className="text-base-content/30">·</span>
          <a
            href="https://github.com/sersergious/surface-evolver/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="link link-hover"
          >
            Releases
          </a>
          <span className="text-base-content/30">·</span>
          <a
            href="https://github.com/sersergious/surface-evolver/blob/main/LICENSE"
            target="_blank"
            rel="noopener noreferrer"
            className="link link-hover"
          >
            Apache 2.0
          </a>
        </div>
        <p>
          The C engine is Ken Brakke&apos;s{" "}
          <a
            href="https://facstaff.susqu.edu/brakke/evolver/evolver.html"
            target="_blank"
            rel="noopener noreferrer"
            className="link link-hover"
          >
            Surface Evolver
          </a>
          . This app is an independent hobby project — no company, no roadmap.
        </p>
        <p className="text-base-content/30 text-xs">
          Built with{" "}
          <a href="https://blackboard.sh/electrobun/" target="_blank" rel="noopener noreferrer" className="link link-hover">
            Electrobun
          </a>
          {" · "}
          <a href="https://threejs.org" target="_blank" rel="noopener noreferrer" className="link link-hover">
            Three.js
          </a>
          {" · "}
          <a href="https://daisyui.com" target="_blank" rel="noopener noreferrer" className="link link-hover">
            daisyUI
          </a>
        </p>
      </div>
    </footer>
  );
}
