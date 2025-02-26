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
    description,
    metadataBase: new URL('https://tobiasstoklund.dk'),
    keywords: ['webudvikler', 'SaaS-udvikler', 'Tobias Stoklund', 'hjemmesideudvikling', 'webshop', 'WordPress', 'React', 'Tailwind CSS', 'SEO'],
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
          alt: title,
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
    },
    icons: {
      icon: '/favicon.ico',
    },
    alternates: {
      canonical: url,
    },
  };
}
