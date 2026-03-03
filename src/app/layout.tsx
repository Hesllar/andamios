import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

import { Footer, PopupWidget, BackgroundScene } from "@/components/layout";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jaramillo Andamios Pro",
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
      <body className={`${montserrat.className} fade-in`}>
        <ThemeProvider attribute="class">
          <BackgroundScene />
          <div className="mt-24">{children}</div>
          <Footer />
          <PopupWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
