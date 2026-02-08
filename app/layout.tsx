import { Manrope, Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Header from "@/components/Header/Header";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";

import "./globals.css";

const manropeSans = Manrope({
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
  subsets: ["latin"],
});

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manropeSans.variable} ${inter.variable}`}>
        <TanStackProvider>
          <Header />
          {children}
          <Toaster position="top-right" />
        </TanStackProvider>
      </body>
    </html>
  );
}
