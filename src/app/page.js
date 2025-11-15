// src/app/page.js
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import LeadIntegrations from './components/LeadIntegrations';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatWidget from "./components/ChatWidget";


export const metadata = {
  title: "Catination – India & Dubai’s Best Real Estate CRM | Channel Partner CRM | Developer CRM | Catination CRM",
  description:
    "Catination CRM is India & Dubai’s most advanced Real Estate CRM. Automate 100+ lead sources, sales pipelines, channel partner commissions, pre-sales, bookings, inventory, WhatsApp CRM, email campaigns, payment tracking, post-sales & customer support portal.",
  keywords:
    "Catination, Catination CRM, CRM Catination, Real Estate CRM India, Real Estate CRM Dubai, Channel Partner CRM, Developer CRM, Builder CRM, Brokerage CRM, Real Estate Automation Software, Property CRM, Real Estate Lead Management CRM, WhatsApp CRM Real Estate, Project Inventory CRM, Sales Automation CRM",
  alternates: {
    canonical: "https://www.catination.com",
  },
  openGraph: {
    title: "Catination – Best Real Estate CRM India & Dubai | Channel Partner & Developer CRM",
    description:
      "Catination is the most complete real estate CRM for India & Dubai. Manage leads, automate sales, integrate portals, track inventories, manage channel partners, automate payments, and deliver premium customer experiences.",
    url: "https://www.catination.com",
    images: [
      {
        url: "https://www.catination.com/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Catination CRM Real Estate CRM Software",
      },
    ],
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <ChatWidget /> 
      <Hero />

      {/* ============================================================
         🔥 EXTREME SEO JSON-LD PACKAGE (BRAND + PRODUCT + FEATURES)
         ============================================================ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            /* ----------------------------------------------------
                BRAND IDENTITY SCHEMA (Fixes name correction issue)
            ---------------------------------------------------- */
            {
              "@context": "https://schema.org",
              "@type": "Brand",
              name: "Catination",
              legalName: "Catination",
              alternateName: ["Catination CRM", "CRM Catination", "Catination Real Estate CRM"],
              url: "https://www.catination.com",
              logo: "https://www.catination.com/logo.jpeg",
              description: "Catination is India & Dubai’s fastest-growing Real Estate CRM brand."
            },

            /* ----------------------------------------------------
                1️⃣ SOFTWARE APPLICATION SCHEMA (DETAILED)
            ---------------------------------------------------- */
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Catination CRM",
              operatingSystem: "Web, Android, iOS",
              applicationCategory: "BusinessApplication",
              applicationSubCategory: "Real Estate CRM Software",
              softwareVersion: "1.0",
              countriesSupported: ["IN", "AE"],
              description:
                "Catination CRM includes 100+ lead integrations, sales pipelines, channel partner portals, developer dashboards, WhatsApp CRM, email automation, booking forms, payment tracking, post-sales workflows, RERA documents and customer support modules.",
              featureList: [
                "Real Estate Lead Management",
                "100+ Portal Integrations (India + UAE)",
                "WhatsApp Automation",
                "Email Marketing Campaigns",
                "AI-Powered Follow-Up Automation",
                "Sales Pipeline & Hot Lead Tracking",
                "Channel Partner (CP) Portal",
                "CP Commission Auto-Calculation",
                "Developer Dashboard",
                "Builder Project Inventory Management",
                "Unit Availability & Dynamic Pricing",
                "Booking Forms & Allotment Letters",
                "Payment Reminders & Demand Letters",
                "Post-Sales CRM Automation",
                "Customer Support Ticketing",
                "Site Visit Management",
                "Call Center Integration",
                "Mobile App for Sales Team"
              ],
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD"
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                ratingCount: "261"
              },
              image: "https://www.catination.com/logo.jpeg",
              url: "https://www.catination.com",
              creator: {
                "@type": "Organization",
                name: "Catination",
                legalName: "Catination",
                url: "https://www.catination.com"
              }
            },

            /* ----------------------------------------------------
                2️⃣ PRODUCT SCHEMA WITH EXTREME DETAIL
            ---------------------------------------------------- */
            {
              "@context": "https://schema.org",
              "@type": "Product",
              name: "Catination",
              brand: "Catination",
              slogan: "The Complete Digital Backbone for Real Estate",
              category: "Real Estate CRM Software",
              description:
                "Catination is the ultimate CRM for real estate developers, brokers, builders and channel partners across India & Dubai.",
              image: "https://www.catination.com/logo.jpeg",
              review: [
                {
                  "@type": "Review",
                  author: { "@type": "Person", name: "Ravi Sharma" },
                  reviewBody:
                    "Catination helped us automate 500+ units across India with zero lead leakage.",
                  reviewRating: { "@type": "Rating", ratingValue: "5" }
                },
                {
                  "@type": "Review",
                  author: { "@type": "Person", name: "Ahmed Al Mansoori" },
                  reviewBody:
                    "The best CRM for Dubai market. WhatsApp automation and CP portal changed our business.",
                  reviewRating: { "@type": "Rating", ratingValue: "5" }
                }
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                ratingCount: "261"
              }
            },

            /* ----------------------------------------------------
                3️⃣ ORGANIZATION SCHEMA (NO ADDRESS EXPOSED)
            ---------------------------------------------------- */
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Catination",
              legalName: "Catination",
              alternateName: ["Catination CRM"],
              url: "https://www.catination.com",
              logo: "https://www.catination.com/logo.jpeg",
              areaServed: ["IN", "AE"],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer support",
                telephone: "+91-8178714102",
                availableLanguage: ["English", "Hindi"]
              },
              sameAs: [
                "https://www.facebook.com/catinationcrm",
                "https://instagram.com/catinationcrm",
                "https://twitter.com/catinationcrm",
                "https://linkedin.com/company/catinationcrm"
              ]
            },

            /* ----------------------------------------------------
                4️⃣ CHANNEL PARTNER PORTAL SCHEMA (NEW)
            ---------------------------------------------------- */
            {
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType: "Channel Partner CRM",
              provider: "Catination",
              areaServed: ["IN", "AE"],
              description:
                "Catination provides a dedicated Channel Partner (CP) portal with lead sharing, commission automation, payout reports, booking tracking, project access, brokerage visibility, payment release stages and automated CP communication.",
              termsOfService: "https://www.catination.com/terms"
            },

            /* ----------------------------------------------------
                5️⃣ DEVELOPER / BUILDER CRM SCHEMA (NEW)
            ---------------------------------------------------- */
            {
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType: "Developer & Builder CRM",
              provider: "Catination",
              description:
                "Catination CRM supports developers and builders with project inventory, tower/stack/unit management, project pricing, demand letters, payment plans, customer portal, booking forms, handover management, and documentation workflows."
            },

            /* ----------------------------------------------------
                6️⃣ FAQ SCHEMA (RICH RESULT BOOSTER)
            ---------------------------------------------------- */
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Why choose Catination CRM?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Catination offers India & Dubai’s most advanced real estate CRM with automation for pre-sales, sales, post-sales, channel partners, developer workflow, WhatsApp CRM, and 100+ integrations."
                  }
                },
                {
                  "@type": "Question",
                  name: "Does Catination support CP (Channel Partner) commission automation?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Yes, Catination includes automatic CP commission calculation, payout workflows, approval flows, dashboards and brokerage reports."
                  }
                },
                {
                  "@type": "Question",
                  name: "Does Catination have WhatsApp CRM?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Yes, Catination includes WhatsApp automation, Chat Templates, WhatsApp flows, drip campaigns, AI qualification and follow-up reminders."
                  }
                }
              ]
            },

            /* ----------------------------------------------------
                7️⃣ SITELINK SEARCHBOX
            ---------------------------------------------------- */
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              url: "https://www.catination.com",
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://www.catination.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }
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
