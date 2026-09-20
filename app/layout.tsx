import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://surface-evolver.vercel.app"),
  title: "Surface Evolver — the desktop app",
  description:
    "A native desktop app for macOS, Linux and Windows wrapping Ken Brakke's Surface Evolver C engine: datafile editor, the complete command language, and a live WebGL viewer in one window.",
  openGraph: {
    title: "Surface Evolver — the desktop app",
    description:
      "Minimize the energy of constrained surfaces without the terminal: datafile editor, full command language, live WebGL viewer. macOS, Linux, Windows.",
    url: "https://surface-evolver.vercel.app",
    siteName: "Surface Evolver",
    images: ["/app-screenshot-light.png"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('se-theme');if(t)document.documentElement.setAttribute('data-theme',t)})()`,
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
