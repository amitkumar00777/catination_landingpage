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
  title: 'Catination CRM - Best Real Estate CRM Software in Dubai & India',
  description:
    'Catination CRM is the #1 Real Estate CRM software in Dubai & India. Capture leads, integrate 100+ real estate platforms, manage sales, automate follow-ups, email & WhatsApp marketing for real estate agents, brokers & developers.',
  alternates: {
    canonical: 'https://www.catination.com',
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />

      {/* ✅ Comprehensive Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Catination CRM - Best Real Estate CRM Software',
            url: 'https://www.catination.com',
            description: 'Complete real estate CRM platform with 100+ lead integrations, automation workflows, and AI-powered follow-ups for Dubai and India markets.',
            breadcrumb: {
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Home',
                  item: 'https://www.catination.com',
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'Features',
                  item: 'https://www.catination.com/#features',
                },
                {
                  '@type': 'ListItem',
                  position: 3,
                  name: 'Integrations',
                  item: 'https://www.catination.com/#lead-integrations',
                },
                {
                  '@type': 'ListItem',
                  position: 4,
                  name: 'Pricing',
                  item: 'https://www.catination.com/#pricing',
                },
                {
                  '@type': 'ListItem',
                  position: 5,
                  name: 'Contact',
                  item: 'https://www.catination.com/#contact',
                },
              ],
            },
            mainEntity: {
              '@type': 'SoftwareApplication',
              name: 'Catination CRM',
              applicationCategory: 'BusinessApplication',
              operatingSystem: 'Web, Android, iOS',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD'
              }
            }
          }),
        }}
      />

      {/* ============================ */}
      {/*      FEATURES SECTION        */}
      {/* ============================ */}
      <section id="features" aria-labelledby="features-heading">
        <Features />
      </section>

      {/* ============================ */}
      {/*   LEAD INTEGRATIONS SECTION  */}
      {/* ============================ */}
      <section id="lead-integrations" aria-labelledby="lead-integrations-heading">
        <LeadIntegrations />
      </section>

      {/* ============================ */}
      {/*     TESTIMONIALS SECTION     */}
      {/* ============================ */}
      <section id="testimonials" aria-labelledby="testimonials-heading">
        <Testimonials />
      </section>

      {/* ============================ */}
      {/*       PRICING SECTION        */}
      {/* ============================ */}
      <section id="pricing" aria-labelledby="pricing-heading">
        <Pricing />
      </section>

      {/* ============================ */}
      {/*       CONTACT SECTION        */}
      {/* ============================ */}
      <section id="contact" aria-labelledby="contact-heading">
        <Contact />
      </section>

      <Footer />
    </main>
  );
}