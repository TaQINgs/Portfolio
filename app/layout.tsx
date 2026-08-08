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
  themeColor: "#121414",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
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
