import { AppleIcon, LinuxIcon, WindowsIcon } from "./icons";
import { CHANGELOG, DOWNLOADS, LATEST, RELEASES, REPO } from "@/lib/release";

const platforms = [
  {
    name: "macOS",
    icon: AppleIcon,
    href: DOWNLOADS.macos,
    file: "SurfaceEvolver-macos-arm64.dmg",
    specs: ["Apple Silicon (arm64)", "WKWebView rendering", "Built on macOS 14"],
    note: "Ad-hoc signed, not notarized — first launch needs right-click → Open.",
  },
  {
    name: "Linux",
    icon: LinuxIcon,
    href: DOWNLOADS.linux,
    file: "SurfaceEvolver-linux-x64.deb",
    specs: ["x86-64", "WebKitGTK rendering", "Debian / Ubuntu package"],
    note: "Needs libwebkit2gtk-4.1 from your distribution's repositories.",
  },
  {
    name: "Windows",
    icon: WindowsIcon,
    href: DOWNLOADS.windows,
    file: "SurfaceEvolver-windows-x64-setup.exe",
    specs: ["x86-64", "WebView2 rendering", "NSIS installer"],
    note: "Unsigned — SmartScreen will warn on first run.",
  },
];

export default function Download() {
  return (
    <section id="download" className="border-b border-base-content/10">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-base-content/40">
              Download
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tighter sm:text-5xl">
              Install it and open a surface.
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-base-content/60 text-pretty">
              Free, open source, Apache 2.0. No account, no compiler, no X11 —
              the engine ships inside the installer.
            </p>
          </div>
          <div className="flex items-center gap-3 font-mono text-xs text-base-content/40">
            <span className="rounded-full border border-base-content/15 px-3 py-1">
              {LATEST}
            </span>
            <a
              href={CHANGELOG}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-base-content"
            >
              Changelog
            </a>
            <a
              href={RELEASES}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-base-content"
            >
              All releases
            </a>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-base-content/10 bg-base-content/10 md:grid-cols-3">
          {platforms.map(({ name, icon: Icon, href, file, specs, note }) => (
            <div key={name} className="flex flex-col bg-base-100 p-8">
              <Icon className="h-6 w-6" />
              <h3 className="mt-5 text-xl font-medium tracking-tight">{name}</h3>
              <ul className="mt-4 space-y-1.5 text-sm text-base-content/55">
                {specs.map((spec) => (
                  <li key={spec}>{spec}</li>
                ))}
              </ul>
              <a href={href} className="btn btn-primary mt-8 w-full">
                Download
              </a>
              <p className="mt-3 font-mono text-[11px] break-all text-base-content/30">
                {file}
              </p>
              <p className="mt-4 text-xs leading-relaxed text-base-content/45">
                {note}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-base-content/45">
          Prefer to build it yourself? The{" "}
          <a
            href={REPO}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base-content underline underline-offset-4 decoration-base-content/30 hover:decoration-base-content"
          >
            repository
          </a>{" "}
          has the CMake + Cargo + Bun steps. It is a hobby project, not
          production-grade — if you plan to rely on it for research, test the
          functionality you need first.
        </p>
      </div>
    </section>
  );
}
