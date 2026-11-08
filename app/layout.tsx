import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme";
import { cookies } from "next/headers";
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
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://narawit.dev",
  ),
  title: {
    default: "Narawit Sroiudom | Full-Stack Developer",
    template: "%s | Narawit Sroiudom",
  },
  description:
    "Full-Stack Developer specializing in Next.js, React, Node.js, and PostgreSQL. Explore case studies, system architecture, and production web applications.",
  keywords: [
    "Narawit Sroiudom",
    "Full-Stack Developer",
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Web Developer Thailand",
    "Portfolio",
  ],
  authors: [{ name: "Narawit Sroiudom", url: "https://github.com/narawit101" }],
  creator: "Narawit Sroiudom",
  openGraph: {
    type: "website",
    locale: "th_TH",
    alternateLocale: "en_US",
    siteName: "Narawit Sroiudom Portfolio",
    title: "Narawit Sroiudom | Full-Stack Developer",
    description:
      "Full-Stack Developer specializing in Next.js, React, Node.js, and PostgreSQL. Explore case studies, system architecture, and production web applications.",
    images: [
      {
        url: "/profile.jpg",
        width: 1179,
        height: 1334,
        alt: "Narawit Sroiudom - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Narawit Sroiudom | Full-Stack Developer",
    description:
      "Full-Stack Developer specializing in Next.js, React, Node.js, and PostgreSQL.",
    images: ["/profile.jpg"],
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const savedTheme = cookieStore.get("portfolio-theme")?.value;
  const theme =
    savedTheme === "light" || savedTheme === "dark" ? savedTheme : "dark";

  return (
    <html
      lang="th"
      className={`${geistSans.variable} ${geistMono.variable}`}
      data-theme={theme}
      style={{ colorScheme: theme }}
      suppressHydrationWarning
    >
      <body className="antialiased">
        <ThemeProvider initialTheme={theme}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
