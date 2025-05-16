import { Metadata } from 'next/types';

interface SEOProps {
  title: string;
  description: string;
  url: string;
  image: string;
}

export function generateMetadata({ title, description, url, image }: SEOProps): Metadata {
  return {
    title,
    description: description + ' | Få skræddersyet webudvikling, design og digitale løsninger af freelance specialist Tobias Stoklund.',
    metadataBase: new URL('https://tobiasstoklund.dk'),
    keywords: [
      'webudvikler', 'freelance udvikler', 'webdesign', 'Next.js ekspert', 'digital konsulent', 'SaaS-udvikler', 'Tobias Stoklund', 'hjemmesideudvikling', 'webshop', 'WordPress', 'React', 'Tailwind CSS', 'SEO', 'UI/UX', 'frontend', 'backend', 'digital strategi', 'moderne websites', 'responsive design', 'webbureau', 'portfolio', 'projekter', 'kontakt', 'Kolding', 'Danmark'
    ],
    authors: [{ name: 'Tobias Stoklund' }],
    creator: 'Tobias Stoklund',
    robots: 'index, follow',
    openGraph: {
      title,
      description,
      url,
      siteName: 'Tobias Stoklund - Webudvikler',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title + ' - Portfolio og freelance webudvikling',
        },
      ],
      locale: 'da_DK',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@tobystoklund',
      site: '@tobystoklund',
    },
    icons: {
      icon: '/favicon.ico',
    },
    alternates: {
      canonical: url,
    },
  };
}
