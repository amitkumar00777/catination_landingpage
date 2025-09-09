// src/app/components/Pricing.js
import { Check, Zap, Crown, Rocket } from 'lucide-react'

const features = [
  "Company Portal",
  "Dashboard & Lead Management",
  "Property Management",
  "Team Management & Attendance",
  "Lead Sources Integrations",
  "Automatic Lead Assignment",
  "Mobile App Access",
  "Analytics Dashboard",
  "Email Marketing & Campaigns",
  "Custom Training",
  "24/7 Priority Support"
]

const plans = [
  {
    name: "Starter",
    icon: Zap,
    userCount: "Up to 20 Users",
    userFee: "₹799 per user / month",
    companyFee: "₹1599 / month (Company Portal)",
    description: "Best for individual agents & small teams",
    emailCredits: "Free 1,000 emails/month • Extra: ₹60 per 1,000",
    buttonText: "Contact Us",
    popular: false
  },
  {
    name: "Growth",
    icon: Crown,
    userCount: "20–100 Users",
    userFee: "₹599 per user / month",
    companyFee: "₹1599 / month (Company Portal)",
    description: "Perfect for growing real estate businesses",
    emailCredits: "Free 5,000 emails/month • Extra: ₹60 per 1,000",
    buttonText: "Contact Us",
    popular: true
  },
  {
    name: "Enterprise",
    icon: Rocket,
    userCount: "100+ Users",
    userFee: "₹499 per user / month",
    companyFee: "₹1599 / month (Company Portal)",
    description: "For large brokerages & enterprises",
    emailCredits: "Free 10,000 emails/month • Extra: ₹60 per 1,000",
    buttonText: "Contact Us",
    popular: false
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 text-purple-400 px-4 py-2 rounded-full text-sm mb-4">
            <span>Pricing</span>
          </div>
          <h2 className="text-3xl lg:text-4xl text-white mb-4">
            Transparent, User-Based Pricing
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            All plans include the same powerful CRM & Email Marketing features. 
            Pricing depends only on the number of users and email credits.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 border transition-all duration-300 hover:transform hover:-translate-y-2 ${
                plan.popular
                  ? 'bg-gradient-to-br from-purple-600/20 to-purple-700/10 border-purple-400/50 shadow-2xl shadow-purple-500/20'
                  : 'bg-gradient-to-br from-purple-500/10 to-purple-600/5 border-purple-500/20 hover:border-purple-400/40'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 py-1 rounded-full text-sm">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <plan.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white text-2xl mb-2">{plan.name}</h3>
                <p className="text-white/60 text-sm mb-4">{plan.description}</p>
                <div className="flex flex-col items-center gap-1">
                  <span className="text-white text-lg">{plan.userCount}</span>
                  <span className="text-white font-semibold">{plan.userFee}</span>
                  <span className="text-white/70 text-sm">{plan.companyFee}</span>
                  <span className="text-red-400 text-sm mt-2">{plan.emailCredits}</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
             {/* CTA Button */}
<a
  href="#contact"
  className={`w-full py-3 rounded-lg transition-all duration-300 inline-block text-center ${
    plan.popular
      ? 'bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white'
      : 'bg-white/10 hover:bg-white/20 text-white border border-purple-500/30 hover:border-purple-400/50'
  }`}
>
  {plan.buttonText}
</a>

            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12">
          <p className="text-white/60">
            All features included in every plan • User pricing scales with your team • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  )
}
