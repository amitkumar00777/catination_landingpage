import './globals.css';

export const metadata = {
  title: 'Catination CRM | Best Real Estate CRM in Dubai & India',
  description:
    'Catination CRM is the #1 real estate CRM for Dubai and India—automate lead capture, send bulk emails, integrate WhatsApp, and grow your business effortlessly.',
  keywords:
    'Real Estate CRM Dubai, Real Estate CRM India, Property CRM, Bulk Email CRM, Lead Capture, WhatsApp CRM',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Catination CRM | Best Real Estate CRM in Dubai & India',
    description:
      'Catination CRM is the #1 real estate CRM for Dubai and India—automate lead capture, send bulk emails, integrate WhatsApp, and grow your business effortlessly.',
    url: 'https://www.catination.com',
    siteName: 'Catination CRM',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Catination CRM - Real Estate CRM',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Catination CRM | Best Real Estate CRM in Dubai & India',
    description:
      'Catination CRM is the #1 real estate CRM for Dubai and India—automate lead capture, send bulk emails, integrate WhatsApp, and grow your business effortlessly.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
