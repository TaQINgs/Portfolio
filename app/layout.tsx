import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Isak.dev — UI Designer & No-Code Developer",
    template: "%s | Isak.dev",
  },
  description:
    "Alexander Isak — UI Designer & No-Code Developer helping startups grow with smart design. Based in Cupertino, CA.",
  keywords: ["UI Designer", "No-Code Developer", "Portfolio", "Web Design"],
  authors: [{ name: "Alexander Isak" }],
  openGraph: {
    title: "Isak.dev — UI Designer & No-Code Developer",
    description:
      "Alexander Isak — UI Designer & No-Code Developer helping startups grow with smart design.",
    type: "website",
    locale: "en_US",
  },
  themeColor: "#eeeee8",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    /*
     * suppressHydrationWarning prevents React from complaining that the
     * server-rendered HTML has no `dark` class while the client might add
     * it via the anti-flash script below before hydration.
     */
    <html lang="en" suppressHydrationWarning>
      <head>
        {/*
         * Anti-flash script: runs synchronously before the first paint.
         * Reads the saved preference from localStorage (or falls back to
         * the OS preference) and immediately adds the `dark` class so the
         * page never flashes the wrong theme.
         */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(!t)t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';if(t==='dark')document.documentElement.classList.add('dark')}catch(e){}})();`,
          }}
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body className="bg-background text-on-background min-h-screen overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
