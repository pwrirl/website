import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SpaHeader from "@/components/spa/SpaHeader";
import SpaFooter from "@/components/spa/SpaFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PowerIRL",
  description: "With PowerIRL all you have to do is press Go Live!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SpaHeader />
        <main style={{ minHeight: "calc(100vh - 200px)" }}>
          {children}
        </main>
        <SpaFooter />
      </body>
    </html>
  );
}
