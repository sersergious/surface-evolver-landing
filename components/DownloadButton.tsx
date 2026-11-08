"use client";

import { useEffect, useState } from "react";
import { DOWNLOADS } from "@/lib/release";

// macOS and Linux only. Anyone else (Windows included) gets the download
// section, which says so, rather than a file their system can't run.
type Platform = keyof typeof DOWNLOADS | "other";

const LABEL: Record<Platform, string> = {
  macos: "Download for macOS",
  linux: "Download for Linux",
  other: "Downloads: macOS and Linux",
};

// ponytail: userAgent sniffing, not userAgentData — the label is cosmetic and
// every platform stays one click away in the download section below.
function detect(): Platform {
  const ua = navigator.userAgent;
  if (/Mac/i.test(ua) && !/iPhone|iPad/i.test(ua)) return "macos";
  if (/Linux|X11/i.test(ua) && !/Android/i.test(ua)) return "linux";
  return "other";
}

export default function DownloadButton({
  className = "btn btn-primary",
}: {
  className?: string;
}) {
  const [platform, setPlatform] = useState<Platform>("macos");

  useEffect(() => setPlatform(detect()), []);

  return (
    <a href={platform === "other" ? "#download" : DOWNLOADS[platform]} className={className}>
      {LABEL[platform]}
    </a>
  );
}
