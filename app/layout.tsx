import "./globals.css";
import ScrollToTop from "./components/ScrollToTop";
import { Toaster } from 'sonner';
import { generateMetadata } from '@/app/components/SEO';

import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = generateMetadata({
  title: "Tobias Stoklund",
  description: "Professionel webudvikler og grundlægger af NationsNetwork. Specialiseret i at skabe moderne og effektive digitale løsninger for virksomheder.",
  url: "https://tobiasstoklund.dk",
  image: "https://tobiasstoklund.dk/images/profile/tobias.jpg"
});

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
