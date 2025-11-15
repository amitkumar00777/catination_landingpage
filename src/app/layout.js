import "./globals.css";

export const metadata = {
  title:
    "Catination – Best Real Estate CRM Software in India & Dubai | Catination CRM",
  description:
    "Catination is the #1 Real Estate CRM software in India & Dubai. Automate lead capture, sales pipelines, WhatsApp CRM, post-sales workflows & real estate operations with 100+ integrations.",
  keywords:
    "Catination, Catination CRM, CRM Catination, Real Estate CRM, Real Estate CRM India, Real Estate CRM Dubai, Best Real Estate CRM Software, Property CRM India, Property CRM Dubai, Real Estate Lead Management, WhatsApp CRM, Real Estate Automation CRM, Developer CRM, Broker CRM, Builder CRM India, UAE Real Estate CRM",
  alternates: {
    canonical: "https://www.catination.com",
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title:
      "Catination – Best Real Estate CRM in India & Dubai | Lead Automation & WhatsApp CRM",
    description:
      "Catination helps real estate developers, builders, agents & brokers automate sales, leads, WhatsApp marketing, and post-sales operations across India and Dubai.",
    url: "https://www.catination.com",
    siteName: "Catination",
    images: [
      {
        url: "https://www.catination.com/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Catination – Real Estate CRM Software",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Catination – India's & Dubai's Best Real Estate CRM | Catination CRM",
    description:
      "Catination CRM is a powerful real estate CRM platform for agents, brokers & developers across India and Dubai. Automate leads, sales pipelines, WhatsApp CRM & post-sales operations.",
    images: ["https://www.catination.com/logo.jpeg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ----------------------------------------------------
           ✅ SOFTWARE APPLICATION SCHEMA (GLOBAL SaaS)
        ---------------------------------------------------- */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Catination",
              operatingSystem: "Web",
              applicationCategory: "BusinessApplication",
              applicationSubCategory: "Real Estate CRM Software",
              offers: {
                "@type": "Offer",
                price: "0.00",
                priceCurrency: "USD",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                ratingCount: "261",
              },
              url: "https://www.catination.com",
              image: "https://www.catination.com/logo.jpeg",
              countriesSupported: ["IN", "AE"],
              description:
                "Catination is a global real estate CRM platform for India & Dubai. Automates lead capture, sales workflows, WhatsApp communication, marketing campaigns and post-sales management.",
              creator: {
                "@type": "Organization",
                name: "Catination",
                legalName: "Catination",
                url: "https://www.catination.com",
                logo: "https://www.catination.com/logo.jpeg",
              },
            }),
          }}
        />

        {/* ----------------------------------------------------
           ✅ ORGANIZATION SCHEMA (LEGAL NAME = CATINATION)
        ---------------------------------------------------- */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Catination",
              legalName: "Catination",
              url: "https://www.catination.com",
              logo: "https://www.catination.com/logo.jpeg",
              description:
                "Catination is a real estate CRM brand serving India & Dubai with lead automation, sales pipelines, inventory tools and WhatsApp CRM.",
              sameAs: [
                "https://twitter.com/catinationcrm",
                "https://www.linkedin.com/company/catinationcrm/",
                "https://www.facebook.com/catinationcrm/",
                "https://www.instagram.com/catinationcrm/",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-8178714102",
                contactType: "customer support",
                availableLanguage: ["English", "Hindi"],
                areaServed: ["IN", "AE"],
              },
            }),
          }}
        />

        {/* ----------------------------------------------------
           ✅ WEBSITE WITH SITELINKS
        ---------------------------------------------------- */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Catination",
              url: "https://www.catination.com",
              inLanguage: "en",
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://www.catination.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

        {/* ----------------------------------------------------
           ✅ LOCAL BUSINESS (INDIA ONLY – NO DUBAI ADDRESS)
        ---------------------------------------------------- */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Catination – India Support",
              legalName: "Catination",
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
              },
              url: "https://www.catination.com",
              telephone: "+91-8178714102",
            }),
          }}
        />

        {/* ----------------------------------------------------
           ✅ PRODUCT SCHEMA FOR CRM (GLOBAL)
        ---------------------------------------------------- */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "Catination",
              brand: "Catination",
              category: "Real Estate CRM Software",
              image: "https://www.catination.com/logo.jpeg",
              description:
                "Catination is a global real estate CRM platform serving India and Dubai. Offers sales automation, lead tracking, WhatsApp CRM, and inventory management.",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                ratingCount: "261",
              },
            }),
          }}
        />

        {/* ----------------------------------------------------
           ✅ REVIEW SCHEMA (SEO Boost)
        ---------------------------------------------------- */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              itemListElement: [
                {
                  "@type": "Review",
                  reviewBody:
                    "Catination CRM completely transformed our real estate operations. Best CRM for India and Dubai teams.",
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                  },
                  author: { "@type": "Person", name: "Amit Verma" },
                },
                {
                  "@type": "Review",
                  reviewBody:
                    "Amazing automation features! Catination is a must-have CRM for builders and brokers.",
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                  },
                  author: { "@type": "Person", name: "Priya Sharma" },
                },
              ],
            }),
          }}
        />

        {/* ----------------------------------------------------
           ✅ FAQ SCHEMA (RANKS FAST)
        ---------------------------------------------------- */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What is Catination?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Catination is a real estate CRM platform designed for agents, developers, builders and brokers in India and Dubai.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Does Catination work in Dubai?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Yes, Catination works across Dubai & UAE with integrations for portals and real estate workflows. No physical address is shown.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Does Catination support WhatsApp automation?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Yes, Catination includes WhatsApp automation, campaigns, chatbot templates and instant notifications.",
                  },
                },
              ],
            }),
          }}
        />

        {/* ----------------------------------------------------
           ✅ BREADCRUMB SCHEMA
        ---------------------------------------------------- */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://www.catination.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Catination",
                  item: "https://www.catination.com",
                },
              ],
            }),
          }}
        />
      </head>

      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
