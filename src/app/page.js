import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <section aria-labelledby="features-heading">
        <h2 id="features-heading" className="sr-only">Key Features</h2>
        <Features />
      </section>
      <section aria-labelledby="testimonials-heading">
        <h2 id="testimonials-heading" className="sr-only">Customer Reviews</h2>
        <Testimonials />
      </section>
      <section aria-labelledby="pricing-heading">
        <h2 id="pricing-heading" className="sr-only">Pricing Plans</h2>
        <Pricing />
      </section>
      <section aria-labelledby="contact-heading">
        <h2 id="contact-heading" className="sr-only">Contact Us</h2>
        <Contact />
      </section>
      <Footer />
    </main>
  );
}
