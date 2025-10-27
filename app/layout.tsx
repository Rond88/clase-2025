import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/globals.css";
import { APP_NAME, APP_DESCRIPTION, SERVER_URL } from "@/lib/constantes";

const interfont = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
  metadataBase: new URL(SERVER_URL),
};

export default function MainRootLayout({
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
