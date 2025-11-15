// src/app/page.js
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import LeadIntegrations from './components/LeadIntegrations';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

export const metadata = {
  title: "Catination – Best Real Estate CRM Software in India & Dubai | Catination CRM",
  description:
    "Catination CRM is the leading Real Estate CRM for India & Dubai. Manage leads, automate sales, integrate 100+ real estate portals, run WhatsApp campaigns, track projects, and streamline post-sales for real estate agents, developers & builders.",
  keywords:
    "Catination, Catination CRM, CRM Catination, Real Estate CRM India, Real Estate CRM Dubai, Best Real Estate CRM, Real Estate Lead Management, Property CRM, WhatsApp CRM Real Estate, Sales Automation CRM, CRM for Developers, CRM for Brokers",
  alternates: {
    canonical: "https://www.catination.com",
  },
  openGraph: {
    title: "Catination – Best Real Estate CRM Software in India & Dubai",
    description:
      "Catination CRM is a next-gen real estate CRM for India & Dubai real estate companies. Includes lead automation, WhatsApp CRM, sales pipeline tracking, and project inventory management.",
    url: "https://www.catination.com",
    images: [
      {
        url: "https://www.catination.com/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Catination CRM – Real Estate CRM Software",
      },
    ],
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />

      {/* --------------------------------------------------------
          🔥 ULTRA-ENHANCED STRUCTURED DATA FOR SEO + BRAND SIGNALS
      --------------------------------------------------------- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            /* --------------------------------------------------
               0️⃣ BRAND SCHEMA  ⭐ REQUIRED TO FIX SPELLING ISSUE
               -------------------------------------------------- */
            {
              "@context": "https://schema.org",
              "@type": "Brand",
              name: "Catination",
              legalName: "Catination",
              alternateName: ["Catination CRM", "CRM Catination"],
              url: "https://www.catination.com",
              logo: "https://www.catination.com/logo.jpeg",
              description: "Catination is a Real Estate CRM platform used across India & Dubai."
            },

            /* ---------------------------------------------
               1️⃣ WEBPAGE SCHEMA (Primary)
            --------------------------------------------- */
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Catination – Best Real Estate CRM Software",
              url: "https://www.catination.com",
              description:
                "Catination CRM offers lead automation, WhatsApp CRM, pipeline management, project inventory & 100+ integrations for India & Dubai real estate.",
              inLanguage: "en",
              breadcrumb: {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: "https://www.catination.com" },
                  { "@type": "ListItem", position: 2, name: "Features", item: "https://www.catination.com/#features" },
                  { "@type": "ListItem", position: 3, name: "Integrations", item: "https://www.catination.com/#lead-integrations" },
                  { "@type": "ListItem", position: 4, name: "Pricing", item: "https://www.catination.com/#pricing" },
                  { "@type": "ListItem", position: 5, name: "Contact", item: "https://www.catination.com/#contact" },
                ],
              },
            },

            /* ---------------------------------------------
               2️⃣ SOFTWARE APPLICATION SCHEMA
            --------------------------------------------- */
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Catination CRM",
              operatingSystem: "Web, Android, iOS",
              applicationCategory: "BusinessApplication",
              applicationSubCategory: "Real Estate CRM Software",
              description:
                "Catination CRM is a powerful real estate CRM for developers, builders, agents & brokers in India & Dubai.",
              offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                ratingCount: "261",
              },
              url: "https://www.catination.com",
              image: "https://www.catination.com/logo.jpeg",
              creator: {
                "@type": "Organization",
                name: "Catination",
                legalName: "Catination",
                url: "https://www.catination.com",
              },
            },

            /* ---------------------------------------------
               3️⃣ PRODUCT SCHEMA
            --------------------------------------------- */
            {
              "@context": "https://schema.org",
              "@type": "Product",
              name: "Catination",
              brand: "Catination",
              category: "Real Estate CRM",
              description:
                "Catination is a global real estate CRM used across India & Dubai for lead management, WhatsApp CRM, automation & project inventory control.",
              image: "https://www.catination.com/logo.jpeg",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                ratingCount: "261",
              },
            },

            /* ---------------------------------------------
               4️⃣ ORGANIZATION SCHEMA
            --------------------------------------------- */
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Catination",
              legalName: "Catination",
              alternateName: ["Catination CRM"],
              url: "https://www.catination.com",
              logo: "https://www.catination.com/logo.jpeg",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer support",
                telephone: "+91-8178714102",
                availableLanguage: ["English", "Hindi"],
                areaServed: ["IN", "AE"],
              },
              sameAs: [
                "https://www.facebook.com/catinationcrm",
                "https://twitter.com/catinationcrm",
                "https://www.instagram.com/catinationcrm",
                "https://www.linkedin.com/company/catinationcrm/",
              ],
            },

            /* ---------------------------------------------
               5️⃣ FAQ SCHEMA
            --------------------------------------------- */
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What is Catination?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Catination is a brand offering a Real Estate CRM platform used across India and Dubai.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is Catination available in Dubai?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Yes, Catination works across Dubai & UAE with full lead automation and CRM integrations.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Does Catination support WhatsApp CRM?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Yes, Catination includes advanced WhatsApp automation, campaigns and chat templates.",
                  },
                },
              ],
            },

            /* ---------------------------------------------
               6️⃣ SITELINK SEARCHBOX
            --------------------------------------------- */
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              url: "https://www.catination.com",
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://www.catination.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            },
          ]),
        }}
      />

      {/* ============================ */}
      <section id="features">
        <Features />
      </section>

      <section id="lead-integrations">
        <LeadIntegrations />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="pricing">
        <Pricing />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </main>
  );
}
