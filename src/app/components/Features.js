// src/app/components/Features.js
import { 
  Users, 
  TrendingUp, 
  Calendar, 
  Shield, 
  Bell, 
  BarChart3, 
  Mail,
  UserCog,
  Target
} from 'lucide-react'

const features = [
  {
    icon: Users,
    title: "Client Management",
    description: "Organize and track all your clients, leads, and prospects in one centralized location with detailed profiles and interaction history."
  },
  {
    icon: UserCog,
    title: "Employee Management",
    description: "Manage your team members, assign roles and permissions, track performance, and streamline internal communications."
  },
  {
    icon: Target,
    title: "Lead Management",
    description: "Capture, track, and nurture leads through customizable pipelines with automated assignments and follow-ups."
  },
  {
    icon: TrendingUp,
    title: "Performance Analytics",
    description: "Get detailed insights into your sales performance, conversion rates, and revenue trends with real-time analytics dashboard."
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "Automated appointment scheduling with calendar integration, reminders, and follow-up sequences to never miss a lead."
  },
  {
    icon: Shield,
    title: "Data Security",
    description: "Enterprise-grade security with encrypted data storage, secure access controls, and compliance with industry standards."
  },
  {
    icon: Bell,
    title: "Automated Workflows",
    description: "Set up automated email sequences, task reminders, and follow-up processes to nurture leads without manual effort."
  },
  {
    icon: BarChart3,
    title: "Advanced Reporting",
    description: "Generate comprehensive reports on sales performance, client satisfaction, and business growth metrics."
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Send bulk campaigns, capture leads via forms, and automate email nurturing sequences to convert prospects into clients."
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 px-6 lg:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 text-purple-400 px-4 py-2 rounded-full text-sm mb-4">
            <span>Features</span>
          </div>
          <h2 className="text-3xl lg:text-4xl text-white mb-4">
            Everything You Need to Grow Your Real Estate Business
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Our comprehensive CRM platform provides all the tools and features you need to manage leads, close deals, and scale your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative bg-gradient-to-br from-purple-500/10 to-purple-600/5 rounded-xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white text-xl mb-3">{feature.title}</h3>
                <p className="text-white/70 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background decoration */} 
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10"></div>
    </section>
  )
}