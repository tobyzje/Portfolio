import "./globals.css";
import ScrollToTop from "./components/ScrollToTop";
import { Toaster } from 'sonner';
import { generateMetadata } from '@/app/components/SEO';
import Head from 'next/head';

import { Poppins } from "next/font/google";
import CookieBanner from './components/CookieBanner';

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = generateMetadata({
  title: "Tobias Stoklund",
  description: "Professionel webudvikler og freelance specialist. Specialiseret i at skabe moderne og effektive digitale løsninger for virksomheder.",
  url: "https://tobiasstoklund.dk",
  image: "https://tobiasstoklund.dk/images/profile/tobias.jpg"
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Cookie consent state

  return (
    <html lang="da">
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Tobias Stoklund",
          "url": "https://tobiasstoklund.dk",
          "image": "https://tobiasstoklund.dk/images/profile/tobias.jpg",
          "jobTitle": "Freelance Webudvikler & Digital Konsulent",
          "sameAs": [
            "https://linkedin.com/in/tobias-stoklund-632033319/",
            "https://github.com/tobyzje",
            "https://instagram.com/tobystoklund"
          ],
          "worksFor": {
            "@type": "Organization",
            "name": "Tobias Stoklund Freelance"
          }
        }`} } />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
          "@context": "https://schema.org",
          "@type": "WebSite",
          "url": "https://tobiasstoklund.dk",
          "name": "Tobias Stoklund Portfolio & Freelance Webudvikling",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://tobiasstoklund.dk/?s={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }`} } />
      </Head>
      <body className={poppins.className}>
        {children}
        <ScrollToTop />
        <Toaster richColors />
        <CookieBanner />
      </body>
    </html>
  );
}
