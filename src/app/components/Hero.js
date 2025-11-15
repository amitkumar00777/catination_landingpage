// src/app/components/Hero.js

import DashboardMockup from './DashboardMockup'
import { ArrowRight, CheckCircle, Play } from 'lucide-react'

export default function Hero() {
  return (
    <section
      className="px-6 py-8 lg:px-12 lg:py-12 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20"
      aria-labelledby="hero-title"
      role="region"
    >
      <div className="grid lg:grid-cols-2 gap-8 items-start max-w-7xl mx-auto">

        {/* LEFT SECTION — MAIN CONTENT */}
        <div className="space-y-8">
          
          {/* Tagline */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-purple-300 px-4 py-2 rounded-full text-sm border border-purple-500/30">
            <span>🚀 The Most Advanced Real Estate CRM in India</span>
          </div>

          {/* Main SEO Heading */}
          <h1
            id="hero-title"
            className="text-2xl lg:text-3xl xl:text-4xl text-white leading-tight font-bold"
          >
            Catination CRM — The Complete Digital Backbone for Modern Real Estate Companies
          </h1>

          {/* SEO Description */}
          <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
            Catination is a powerful Real Estate CRM designed for developers, builders,
            channel partners, property consultants, and large sales teams. Streamline your
            entire real estate lifecycle from{" "}
            <span className="text-purple-400">
              lead generation → pre-sales → sales → post-sales → payments → handover
            </span>{" "}
            with automation-driven workflows.
          </p>

          {/* Feature List (SEO optimized keywords included) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6">
            {[
              "Lead capture from 100+ platforms (Meta, Google, Portals)",
              "AI-powered pre-sales automation",
              "High-speed sales pipelines for faster closures",
              "Post-sales management & customer communication",
              "Automated demand letters & reminders",
              "WhatsApp & Email marketing automation",
              "Real estate project inventory management",
              "Developer & management dashboards",
              "Channel Partner (CP) portal",
              "Customer support portal",
              "Mobile app for on-field real estate teams",
              "Enterprise-grade reporting & analytics"
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-white/90 text-sm">{feature}</span>
              </div>
            ))}
          </div>

          {/* Value Proposition Box */}
          <div className="bg-gradient-to-r from-purple-600/10 to-blue-600/10 p-6 rounded-2xl border border-purple-500/20">
            <p className="text-white/80 text-lg">
              <span className="text-purple-400 font-semibold">Engineered for Real Estate:</span>{" "}
              Reduce lead leakage, improve response time, automate sales workflows, and deliver
              a premium customer experience from inquiry to possession.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4" role="group" aria-label="Primary Actions">
            <a
              href="https://app.catination.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-2xl shadow-purple-700/30 hover:shadow-purple-700/50 transition-all duration-300 transform hover:-translate-y-1"
              aria-label="Start free trial of Catination Real Estate CRM"
            >
              🚀 Start Free Trial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#contact"
              className="group flex items-center justify-center gap-3 border-2 border-purple-500 text-purple-400 hover:bg-purple-500/10 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:-translate-y-1"
              aria-label="Book a live demo of Catination CRM"
            >
              <Play className="w-5 h-5" />
              Book a Demo
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center gap-6 pt-6 text-sm text-white/60">
            <div>✅ Zero Setup Fees</div>
            <div>✅ 14-Day Free Trial</div>
            <div>✅ 24/7 Customer Support</div>
          </div>
        </div>

        {/* RIGHT SECTION — MOCKUP */}
        <div className="relative -mt-8 -mb-8 transform translate-y-[20px]">

          {/* Add accessible alt text using aria-hidden */}
          <DashboardMockup aria-hidden="true" />
        </div>

      </div>
    </section>
  )
}