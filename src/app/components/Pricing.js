// src/app/components/Pricing.js
import { Check, Zap, Crown, Rocket, Users, Mail, Shield, Star } from 'lucide-react'

const features = [
  "Company Portal & Dashboard",
  "Advanced Lead Management",
  "Property & Inventory Management",
  "Team Management & Attendance",
  "100+ Lead Source Integrations",
  "Automatic Lead Assignment",
  "Mobile App Access (iOS & Android)",
  "Advanced Analytics Dashboard",
  "Email Marketing & Campaigns",
  "WhatsApp Automation",
  "Pre-sales Automation",
  "Sales Pipeline Management",
  "Post-sales Workflows",
  "Channel Partner Portal",
  "Customer Portal",
  "Automated Demand Letters",
  "Payment Tracking",
  "Document Management",
  "Custom Training Sessions",
  "24/7 Priority Support",
  "GDPR & Data Compliance",
  "API Access & Webhooks"
]

const plans = [
  {
    name: "Starter",
    icon: Zap,
    userCount: "Up to 20 Users",
    userFee: "$9 per user / month",
    companyFee: "$19 / month (Company Portal)",
    description: "Perfect for individual agents & small teams starting with automation",
    emailCredits: "Free 1,000 emails/month • Extra: $1 per 1,000",
    whatsappCredits: "Free 500 messages/month • Extra: $0.02 per message",
    buttonText: "Start Free Trial",
    popular: false,
    bestFor: "Small teams & individual agents"
  },
  {
    name: "Growth",
    icon: Crown,
    userCount: "20–100 Users",
    userFee: "$7 per user / month",
    companyFee: "$19 / month (Company Portal)",
    description: "Ideal for growing real estate businesses & brokerages",
    emailCredits: "Free 5,000 emails/month • Extra: $0.8 per 1,000",
    whatsappCredits: "Free 2,000 messages/month • Extra: $0.018 per message",
    buttonText: "Start Free Trial",
    popular: true,
    bestFor: "Growing brokerages & sales teams"
  },
  {
    name: "Enterprise",
    icon: Rocket,
    userCount: "100+ Users",
    userFee: "$6 per user / month",
    companyFee: "$19 / month (Company Portal)",
    description: "For large developers, enterprises & multi-city operations",
    emailCredits: "Free 10,000 emails/month • Extra: $0.6 per 1,000",
    whatsappCredits: "Free 5,000 messages/month • Extra: $0.015 per message",
    buttonText: "Contact Sales",
    popular: false,
    bestFor: "Large developers & enterprises"
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-6 lg:px-12 bg-gradient-to-br from-black via-purple-900/10 to-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-purple-400 px-4 py-2 rounded-full text-sm mb-4 border border-purple-500/30">
            <span>💰 TRANSPARENT PRICING</span>
          </div>
          <h2 className="text-4xl lg:text-5xl text-white mb-6 font-bold">
            Simple, User-Based Pricing
          </h2>
          <p className="text-white/70 text-xl max-w-3xl mx-auto leading-relaxed">
            All plans include the complete Catination CRM platform. Pay only for the number of users and messaging credits you need.
            <span className="block text-purple-400 font-semibold mt-2">No hidden fees • Cancel anytime • 14-day free trial</span>
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-6 mb-16">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl p-8 border-2 transition-all duration-500 hover:transform hover:-translate-y-3 ${
                plan.popular
                  ? 'bg-gradient-to-br from-purple-600/20 to-purple-700/10 border-purple-400/50 shadow-2xl shadow-purple-500/20'
                  : 'bg-gradient-to-br from-purple-500/10 to-purple-600/5 border-purple-500/20 hover:border-purple-400/40'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                    <Star className="w-4 h-4 fill-current" />
                    MOST POPULAR
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <plan.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl text-white mb-2 font-bold">{plan.name}</h3>
                <p className="text-white/60 mb-4">{plan.description}</p>
                <div className="bg-gradient-to-r from-purple-600/10 to-blue-600/10 p-4 rounded-xl mb-4">
                  <div className="text-white text-lg font-semibold">{plan.userCount}</div>
                  <div className="text-white font-bold text-xl">{plan.userFee}</div>
                  <div className="text-white/70 text-sm">{plan.companyFee}</div>
                </div>
                
                {/* Credits */}
                <div className="space-y-2 text-sm">
                  <div className="text-green-400 flex items-center gap-2 justify-center">
                    <Mail className="w-4 h-4" />
                    {plan.emailCredits}
                  </div>
                  <div className="text-green-400 flex items-center gap-2 justify-center">
                    <Users className="w-4 h-4" />
                    {plan.whatsappCredits}
                  </div>
                </div>
              </div>

              {/* Best For */}
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full">
                  <span className="text-white/60 text-xs">✓ Perfect for:</span>
                  <span className="text-white text-sm font-medium">{plan.bestFor}</span>
                </div>
              </div>

              {/* CTA Button */}
              <a
                href={plan.name === "Enterprise" ? "#contact" : "https://app.catination.com"}
                className={`w-full py-4 rounded-xl transition-all duration-300 inline-block text-center font-semibold text-lg ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white shadow-lg shadow-purple-500/30'
                    : 'bg-white/10 hover:bg-white/20 text-white border border-purple-500/30 hover:border-purple-400/50'
                }`}
              >
                {plan.buttonText}
              </a>
            </div>
          ))}
        </div>

        {/* All Features Included */}
        <div className="bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-2xl p-8 border border-purple-500/20">
          <div className="text-center mb-8">
            <h3 className="text-2xl text-white mb-4 font-bold">All Plans Include Every Feature</h3>
            <p className="text-white/70">No feature limitations. Scale your team, not your plan.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <div key={feature} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-white/90 text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Enterprise CTA */}
        <div className="text-center mt-12">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-purple-600/10 to-blue-600/10 px-8 py-6 rounded-2xl border border-purple-500/20">
            <div className="text-left">
              <div className="text-white text-xl font-bold mb-2">Need Custom Enterprise Solution?</div>
              <div className="text-white/70">Dedicated servers • Custom integrations • White-label options • SLAs</div>
            </div>
            <a
              href="#contact"
              className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 whitespace-nowrap"
            >
              Contact Enterprise Team
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}