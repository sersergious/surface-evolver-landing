"use client";

import { useEffect, useState } from "react";
import { DOWNLOADS } from "@/lib/release";

type Platform = keyof typeof DOWNLOADS;

const LABEL: Record<Platform, string> = {
  macos: "Download for macOS",
  linux: "Download for Linux",
  windows: "Download for Windows",
};

// ponytail: userAgent sniffing, not userAgentData — the label is cosmetic and
// every platform stays one click away in the download section below.
function detect(): Platform {
  const ua = navigator.userAgent;
  if (/Win/i.test(ua)) return "windows";
  if (/Linux|X11/i.test(ua) && !/Android/i.test(ua)) return "linux";
  return "macos";
}

export default function DownloadButton({
  className = "btn btn-primary",
}: {
  className?: string;
}) {
  const [platform, setPlatform] = useState<Platform>("macos");

  useEffect(() => setPlatform(detect()), []);

  return (
    <a href={DOWNLOADS[platform]} className={className}>
      {LABEL[platform]}
    </a>
  );
}
