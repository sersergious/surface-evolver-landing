// There are no versioned releases: every push to main that passes CI replaces
// a single rolling release tagged `latest`. Assets resolve through that tag, so
// these links always point at the newest tested build without editing this file.
export const REPO = "https://github.com/sersergious/surface-evolver";

const asset = (name: string) => `${REPO}/releases/download/latest/${name}`;

export const DOWNLOADS = {
  macos: asset("SurfaceEvolver-macos-arm64.dmg"),
  linux: asset("SurfaceEvolver-linux-x64.deb"),
  windows: asset("SurfaceEvolver-windows-x64-setup.exe"),
} as const;

export const RELEASES = `${REPO}/releases/tag/latest`;
export const ISSUES = `${REPO}/issues`;
export const CHANGELOG = `${REPO}/blob/main/CHANGELOG.md`;
export const LICENSE = `${REPO}/blob/main/LICENSE`;
export const ARCHITECTURE = `${REPO}/blob/main/ARCHITECTURE.md`;
export const BRAKKE = "https://facstaff.susqu.edu/brakke/evolver/evolver.html";
