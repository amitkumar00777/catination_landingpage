import './globals.css';

export const metadata = {
  title: 'Catination CRM - Best Real Estate CRM Software in Dubai & India',
  description:
    'Catination CRM is the #1 Real Estate CRM in Dubai & India. Powerful property management software to capture leads, automate sales, bulk email campaigns & WhatsApp integration for real estate agents, brokers & developers.',
  keywords:
    'Real Estate CRM Dubai, Real Estate CRM India, Best Real Estate CRM Software, Property CRM Dubai, Property CRM India, Property Management CRM, Real Estate Software Dubai, Real Estate Software India, Lead Management CRM, Bulk Email CRM, WhatsApp CRM, CRM for Real Estate Agents, Real Estate Broker CRM, Real Estate Developer CRM, Real Estate Lead Management Software',
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: 'https://www.catination.com',
  },
  openGraph: {
    title: 'Catination CRM - Best Real Estate CRM Software in Dubai & India',
    description:
      'Catination CRM helps real estate agents, brokers & developers in Dubai & India manage leads, automate sales, send bulk emails & integrate WhatsApp to grow business.',
    url: 'https://www.catination.com',
    siteName: 'Catination CRM',
    images: [
      {
        url: 'https://www.catination.com/catination-logo.png',
        width: 1200,
        height: 630,
        alt: 'Catination CRM - Real Estate CRM Software',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Catination CRM - Best Real Estate CRM Software in Dubai & India',
    description:
      'Catination CRM is the best real estate CRM software for Dubai & India. Capture leads, manage sales, automate bulk emails & WhatsApp for real estate growth.',
    images: ['https://www.catination.com/catination-logo.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'Catination CRM',
              applicationCategory: 'BusinessApplication',
              applicationSubCategory: 'Real Estate CRM Software',
              operatingSystem: 'Web',
              softwareVersion: '1.0',
              creator: {
                '@type': 'Organization',
                name: 'Catination',
                url: 'https://www.catination.com',
                logo: 'https://www.catination.com/catination-logo.png',
              },
              url: 'https://www.catination.com',
              image: 'https://www.catination.com/catination-logo.png',
              description:
                'Catination CRM is the best Real Estate CRM in Dubai & India. Lead capture, property management, sales automation, bulk email campaigns, WhatsApp CRM & real estate marketing software for agents, brokers & developers.',
              offers: {
                '@type': 'Offer',
                price: '0', // Change if not free trial
                priceCurrency: 'USD',
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                ratingCount: '120',
              },
            }),
          }}
        />
      </head>
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
