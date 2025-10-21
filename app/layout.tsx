import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const interfont = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Proyecto Next 2025",
  description: "Proyecto de clase con Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interfont.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
