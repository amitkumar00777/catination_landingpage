// src/app/components/Hero.js
import DashboardMockup from './DashboardMockup'
import { ArrowRight, CheckCircle } from 'lucide-react'

export default function Hero() {
  return (
    <div className="px-6 py-8 lg:px-12 lg:py-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl text-white leading-tight">
              Supercharge Your Real Estate Business with a Powerful CRM Solution
            </h1>
            <p className="text-lg text-white/70 leading-relaxed max-w-lg">
              We provide the tools and support you need to streamline your business processes and achieve unprecedented growth.
            </p>
          </div>
          <a
  href="https://app.catination.com"
  target="_blank"
  rel="noopener noreferrer"
  className="group flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-6 py-3 rounded-lg text-base font-medium shadow-lg hover:shadow-purple-700/40 transition-all duration-300"
>
  Start Your Free Trial
  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
</a>

        </div>
        <div className="relative">
          <DashboardMockup />
        </div>
      </div>
    </div>
  )
}