import type { Metadata } from "next";
import "./globals.css";
import ScrollToTop from "./components/ScrollToTop";
import { Toaster } from 'sonner';

import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tobias Stoklund - Webudvikler",
  description: "Professionel webudvikler og grundlægger af NationsNetwork. Specialiseret i at skabe moderne og effektive digitale løsninger for virksomheder.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da">
      <body className={poppins.className}>
        {children}
        <ScrollToTop />
        <Toaster richColors />
      </body>
    </html>
  );
}
