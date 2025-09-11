import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

export const metadata = {
  title: 'Catination CRM - Best Real Estate CRM Software in Dubai & India',
  description:
    'Catination CRM is the #1 Real Estate CRM software in Dubai & India. Capture leads, manage sales, automate bulk email campaigns & WhatsApp integration for real estate agents, brokers & developers.',
  alternates: {
    canonical: 'https://www.catination.com',
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />

      {/* ✅ Structured Data for Breadcrumbs + Sitelinks */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Catination CRM - Best Real Estate CRM Software',
            url: 'https://www.catination.com',
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
                  name: 'Pricing',
                  item: 'https://www.catination.com/#pricing',
                },
                {
                  '@type': 'ListItem',
                  position: 4,
                  name: 'Contact',
                  item: 'https://www.catination.com/#contact',
                },
              ],
            },
          }),
        }}
      />

      {/* ✅ Features Section */}
      <section id="features" aria-labelledby="features-heading">
        <h2 id="features-heading" className="text-3xl font-bold mb-6 text-center">
          Key Features
        </h2>
        <Features />
      </section>

      {/* ✅ Testimonials Section */}
      <section id="testimonials" aria-labelledby="testimonials-heading">
        <h2 id="testimonials-heading" className="text-3xl font-bold mb-6 text-center">
          Customer Reviews
        </h2>
        <Testimonials />
      </section>

      {/* ✅ Pricing Section */}
      <section id="pricing" aria-labelledby="pricing-heading">
        <h2 id="pricing-heading" className="text-3xl font-bold mb-6 text-center">
          Pricing Plans
        </h2>
        <Pricing />
      </section>

      {/* ✅ Contact Section */}
      <section id="contact" aria-labelledby="contact-heading">
        <h2 id="contact-heading" className="text-3xl font-bold mb-6 text-center">
          Contact Us
        </h2>
        <Contact />
      </section>

      <Footer />
    </main>
  );
}
