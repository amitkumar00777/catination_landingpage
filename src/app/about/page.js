export const metadata = {
  title: "About Us | Catination CRM - Real Estate CRM in Dubai & India",
  description:
    "Discover Catination CRM, the leading real estate CRM platform in Dubai and India. Learn how we help real estate professionals grow with smart automation and effective customer management.",
  keywords: [
    "Catination CRM",
    "Real Estate CRM Dubai",
    "Real Estate CRM India",
    "Property CRM",
    "CRM for Realtors",
    "Best CRM for Real Estate",
    "Real Estate Software Dubai",
    "Real Estate Automation",
  ],
  alternates: {
    canonical: "https://www.catination.com/about",
  },
};

export default function AboutPage() {
  return (
    <main className="bg-black text-white">
      {/* ✅ Structured Data (AboutPage + Organization with correct phone) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About Catination CRM",
            url: "https://www.catination.com/about",
            description:
              "Learn about Catination CRM, the leading Real Estate CRM in Dubai & India. We help real estate professionals manage leads, automate sales & build stronger client relationships.",
            mainEntity: {
              "@type": "Organization",
              name: "Catination CRM",
              url: "https://www.catination.com",
              logo: "https://www.catination.com/logo.jpeg",
              sameAs: [
                "https://twitter.com/catinationcrm",
                "https://www.linkedin.com/company/catinationcrm/",
                "https://www.facebook.com/catinationcrm/",
                "https://www.instagram.com/catinationcrm/",
              ],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+91-8178714102",
                  contactType: "customer service",
                  areaServed: ["AE", "IN"],
                  availableLanguage: ["English", "Hindi"],
                },
              ],
            },
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-purple-900/40 to-black py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="text-purple-400">Catination CRM</span>
          </h1>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Catination CRM is the most powerful customer relationship management
            platform designed specifically for{" "}
            <strong>real estate professionals</strong> in <strong>Dubai</strong>{" "}
            and <strong>India</strong> to grow their business efficiently.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid md:grid-cols-1 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
          <p className="text-white/70 leading-relaxed mb-4">
            At Catination, we believe real estate success starts with building
            strong client relationships. Our CRM simplifies workflows, manages
            leads, automates follow-ups, and maximizes sales opportunities for
            agents, brokers, and property developers.
          </p>
          <p className="text-white/70 leading-relaxed">
            With a presence in <strong>Dubai</strong> and <strong>India</strong>,
            we understand the unique challenges of both markets and provide
            localized solutions tailored for growth.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-purple-900/10 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-3">Our Mission</h3>
            <p className="text-white/70 leading-relaxed">
              To empower real estate professionals with intelligent CRM tools
              that save time, increase productivity, and build lasting client
              trust.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-3">Our Vision</h3>
            <p className="text-white/70 leading-relaxed">
              To become the #1 real estate CRM in emerging markets by delivering
              technology that makes property sales smarter, faster, and more
              profitable.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Why Choose Catination CRM?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-purple-900/10 p-6 rounded-2xl shadow-md">
            <h4 className="text-xl font-medium mb-3">Real Estate Focused</h4>
            <p className="text-white/70">
              Unlike generic CRMs, Catination is built specifically for real
              estate professionals, ensuring every feature enhances your sales
              process.
            </p>
          </div>
          <div className="bg-purple-900/10 p-6 rounded-2xl shadow-md">
            <h4 className="text-xl font-medium mb-3">Easy to Use</h4>
            <p className="text-white/70">
              A simple, intuitive interface helps you manage leads, track deals,
              and follow up effortlessly — without any technical headaches.
            </p>
          </div>
          <div className="bg-purple-900/10 p-6 rounded-2xl shadow-md">
            <h4 className="text-xl font-medium mb-3">Global Presence</h4>
            <p className="text-white/70">
              With operations in <strong>Dubai</strong> and <strong>India</strong>,
              we provide localized support and deep market knowledge.
            </p>
          </div>
        </div>
      </section>

      {/* Presence Section */}
      <section className="bg-gradient-to-r from-purple-800/30 to-black py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h3 className="text-2xl font-semibold mb-4">Our Global Presence</h3>
          <p className="text-white/70">
            Serving real estate professionals in <strong>Dubai, UAE</strong> 🇦🇪
            and <strong>India</strong> 🇮🇳 — with more regions coming soon.
          </p>
        </div>
      </section>
    </main>
  );
}
