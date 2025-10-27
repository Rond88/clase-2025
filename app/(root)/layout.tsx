import Footer from "@/components/footer";
import Header from "@/components/shared/header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

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
    <div className="flex h-screen flex-col ">
      <Header />
        {children}
        <Footer />
    </div>
      
  );
}
