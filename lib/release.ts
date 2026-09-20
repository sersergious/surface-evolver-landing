// Release assets resolve through /releases/latest/download/<name>, so the links
// keep working after every release without editing this file.
export const REPO = "https://github.com/sersergious/surface-evolver";
export const LATEST = "v0.2.1";

const asset = (name: string) => `${REPO}/releases/latest/download/${name}`;

export const DOWNLOADS = {
  macos: asset("SurfaceEvolver-macos-arm64.dmg"),
  linux: asset("SurfaceEvolver-linux-x64.deb"),
  windows: asset("SurfaceEvolver-windows-x64-setup.exe"),
} as const;

export const RELEASES = `${REPO}/releases`;
export const CHANGELOG = `${REPO}/blob/main/CHANGELOG.md`;
export const LICENSE = `${REPO}/blob/main/LICENSE`;
export const ARCHITECTURE = `${REPO}/blob/main/ARCHITECTURE.md`;
export const BRAKKE = "https://facstaff.susqu.edu/brakke/evolver/evolver.html";
