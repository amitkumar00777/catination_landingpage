// src/app/components/Testimonials.js
import { Star, Quote, Building, MapPin } from 'lucide-react'

const testimonials = [
  // 🌍 Dubai Clients
  {
    name: "Ahmed Al Mansoori",
    title: "Luxury Property Consultant",
    company: "Dubai Elite Realty",
    content: "Catination CRM eliminated our lead leakage completely. The automated follow-ups and WhatsApp integration helped us increase conversions by 40% in Dubai's competitive market.",
    rating: 5,
    location: "Dubai, UAE",
    type: "Broker"
  },
  {
    name: "Sarah Johnson",
    title: "Sales Director",
    company: "Emirates Properties",
    content: "The post-sales automation transformed our handover process. Automated demand letters and payment tracking reduced our administrative workload by 60%.",
    rating: 5,
    location: "Dubai, UAE", 
    type: "Developer"
  },

  // 🇮🇳 Indian Clients
  {
    name: "Ravi Sharma",
    title: "Real Estate Developer",
    company: "Sharma Builders",
    content: "Managing 500+ units across 3 cities became effortless with Catination. The inventory management and automated documentation saved us 20+ hours weekly.",
    rating: 5,
    location: "Mumbai, India",
    type: "Developer"
  },
  {
    name: "Ananya Iyer",
    title: "Real Estate Consultant",
    company: "Iyer Realty",
    content: "As a channel partner, the dedicated portal and commission tracking made partnership management transparent and efficient. Lead sharing is instant and accurate.",
    rating: 5,
    location: "Bangalore, India",
    type: "Channel Partner"
  },
  {
    name: "Priya Singh",
    title: "Brokerage Owner",
    company: "Metro Properties",
    content: "The 100+ lead integrations mean we never miss a lead. From MagicBricks to WhatsApp, every inquiry is captured and assigned automatically to the right agent.",
    rating: 5,
    location: "Delhi, India",
    type: "Broker"
  },
  {
    name: "Rajesh Kumar",
    title: "Sales Manager",
    company: "Skyline Developers",
    content: "Our pre-sales team's response time improved from hours to minutes. The SLA follow-up timers and automated reminders ensured we never miss a hot lead.",
    rating: 5,
    location: "Hyderabad, India",
    type: "Sales Team"
  }
]

export default function Testimonials() {
  // SEO-friendly structured data
  const reviewsSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Catination CRM",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: testimonials.length,
      bestRating: "5",
      worstRating: "1"
    },
    review: testimonials.map((t) => ({
      "@type": "Review",
      author: { 
        "@type": "Person", 
        name: t.name,
        jobTitle: t.title
      },
      publisher: {
        "@type": "Organization",
        name: t.company
      },
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
    <section id="testimonials" className="py-20 px-6 lg:px-12 relative bg-gradient-to-br from-black via-purple-900/10 to-black">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsSchema) }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-purple-400 px-4 py-2 rounded-full text-sm mb-4 border border-purple-500/30">
            <span>⭐ TRUSTED BY INDUSTRY LEADERS</span>
          </div>
          <h2 className="text-4xl lg:text-5xl text-white mb-6 font-bold">
            Loved by Real Estate Professionals Across India & Dubai
          </h2>
          <p className="text-white/70 text-xl max-w-3xl mx-auto leading-relaxed">
            From luxury developers in Dubai to growing brokerages in India, Catination CRM is transforming 
            how real estate businesses operate and grow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="relative bg-gradient-to-br from-purple-500/10 to-blue-500/5 rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 group"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-purple-400/20 group-hover:text-purple-400/30 transition-colors">
                <Quote className="w-8 h-8" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-current"
                  />
                ))}
                <span className="text-white/60 text-sm ml-2">{testimonial.rating}.0</span>
              </div>

              {/* Content */}
              <p className="text-white/80 leading-relaxed mb-6 text-lg">
                &quot;{testimonial.content}&quot;
              </p>

              {/* Author Info */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-semibold text-sm">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="text-white font-semibold truncate">{testimonial.name}</div>
                    <div className="w-1 h-1 bg-white/40 rounded-full"></div>
                    <div className="text-purple-400 text-sm capitalize">{testimonial.type}</div>
                  </div>
                  <div className="text-white/60 text-sm mb-2">{testimonial.title}</div>
                  <div className="text-purple-300 text-sm font-medium">{testimonial.company}</div>
                  
                  {/* Location */}
                  <div className="flex items-center gap-1 mt-2 text-white/50 text-xs">
                    <MapPin className="w-3 h-3" />
                    {testimonial.location}
                  </div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-blue-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/5 p-6 rounded-2xl border border-purple-500/20">
            <div className="text-3xl font-bold text-purple-400 mb-2">40%</div>
            <div className="text-white/70 text-sm">Higher Conversion Rate</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/5 p-6 rounded-2xl border border-purple-500/20">
            <div className="text-3xl font-bold text-purple-400 mb-2">60%</div>
            <div className="text-white/70 text-sm">Faster Response Time</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/5 p-6 rounded-2xl border border-purple-500/20">
            <div className="text-3xl font-bold text-purple-400 mb-2">100%</div>
            <div className="text-white/70 text-sm">Lead Capture Rate</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/5 p-6 rounded-2xl border border-purple-500/20">
            <div className="text-3xl font-bold text-purple-400 mb-2">0</div>
            <div className="text-white/70 text-sm">Lead Leakage</div>
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
    </section>
  )
}