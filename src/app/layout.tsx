import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

import { Footer } from "@/components/Footer";
import { PopupWidget } from "@/components/PopupWidget";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Andamios - J&V",
  description: "Arriendos de andamios y servicios de construcción en Chile",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.className} fade-in`}>
        <ThemeProvider attribute="class">
          <div className="mt-24">{children}</div>
          <Footer />
          <PopupWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
