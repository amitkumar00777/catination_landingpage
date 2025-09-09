// src/app/components/Testimonials.js
import { Star, Quote } from 'lucide-react'

const testimonials = [
  // 🌍 New Dubai client
  {
    name: "Ahmed Al Mansoori",
    title: "Luxury Property Consultant",
    company: "Dubai Elite Realty",
    content:
      "Catination CRM streamlined my client follow-ups and boosted engagement. In Dubai’s competitive market, the email campaigns gave me a real advantage.",
    rating: 5,
    location: "Dubai, UAE",
  },
  // 🇮🇳 Indian Client #1
  {
    name: "Ravi Sharma",
    title: "Real Estate Developer",
    company: "Sharma Builders",
    content:
      "The bulk email marketing tools helped me capture leads across multiple cities in India. I can now manage and track thousands of prospects effortlessly.",
    rating: 5,
    location: "Mumbai, India",
  },
  // 🇮🇳 Indian Client #2
  {
    name: "Ananya Iyer",
    title: "Real Estate Consultant",
    company: "Iyer Realty",
    content:
      "Catination CRM is a game changer for lead nurturing. Automated workflows and CRM integration mean I never miss a follow-up again.",
    rating: 5,
    location: "Bangalore, India",
  },
]

export default function Testimonials() {
  // SEO-friendly structured data (Review schema)
  const reviewsSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Catination CRM",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: testimonials.length,
    },
    review: testimonials.map((t) => ({
      "@type": "Review",
      author: { "@type": "Person", name: t.name },
      reviewBody: t.content,
      reviewRating: {
        "@type": "Rating",
        ratingValue: t.rating,
        bestRating: "5",
      },
      itemReviewed: {
        "@type": "SoftwareApplication",
        name: "Catination CRM",
        applicationCategory: "BusinessApplication",
      },
    })),
  }

  return (
    <section id="testimonials" className="py-20 px-6 lg:px-12 relative">
      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsSchema) }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 text-purple-400 px-4 py-2 rounded-full text-sm mb-4">
            <span>Testimonials</span>
          </div>
          <h2 className="text-3xl lg:text-4xl text-white mb-4">
            Trusted by Real Estate Professionals Worldwide
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            From the skyscrapers of Dubai to the bustling cities of India,
            Catination CRM empowers real estate leaders to capture leads, close
            deals, and scale their business with ease.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="relative bg-gradient-to-br from-purple-500/10 to-purple-600/5 rounded-xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300"
            >
              <div className="absolute top-4 right-4 text-purple-400/30">
                <Quote className="w-8 h-8" />
              </div>

              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              {/* ✅ Fixed unescaped quotes */}
              <p className="text-white/80 leading-relaxed mb-6">
                &quot;{testimonial.content}&quot;
              </p>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-medium">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <div className="text-white font-medium">
                    {testimonial.name}
                  </div>
                  <div className="text-white/60 text-sm">
                    {testimonial.title}
                  </div>
                  <div className="text-purple-400 text-sm">
                    {testimonial.company}
                  </div>
                  <div className="text-white/40 text-xs">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl -z-10"></div>
    </section>
  )
}
