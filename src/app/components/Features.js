// src/app/components/LeadIntegrations.js
"use client";

import {
  Building2,
  Layers,
  FileSearch,
  Globe,
  Smartphone,
  Scan,
  Link as LinkIcon,
  RadioTower,
  Network,
  Cable,
  Zap,
  Users,
  QrCode,
  Landmark,
  SmartphoneCharging
} from "lucide-react";

import { motion } from "framer-motion";

const leadIntegrations = [
  // 🔥 Real Estate Portals (India)
  {
    icon: Building2,
    title: "99acres Lead Integration",
    category: "India Portals",
    description: "Capture and sync all buyer & tenant inquiries from 99acres in real-time with automatic tagging & assignment."
  },
  {
    icon: Layers,
    title: "MagicBricks Lead Integration",
    category: "India Portals", 
    description: "Fetch high-intent property interest leads from MagicBricks with full buyer data and timeline insights."
  },
  {
    icon: FileSearch,
    title: "Housing.com Lead Integration",
    category: "India Portals",
    description: "Receive 100% verified Housing.com leads instantly with complete lead mapping & status tracking."
  },
  {
    icon: Network,
    title: "SquareYards Lead Sync",
    category: "India Portals",
    description: "Automatically import SquareYards project leads with advanced project tagging & follow-up automation."
  },
  {
    icon: Cable,
    title: "NoBroker Lead Integration",
    category: "India Portals",
    description: "Capture direct-owner inquiries & rental leads from NoBroker instantly into your CRM dashboard."
  },
  {
    icon: Globe,
    title: "CommonFloor Lead Integration",
    category: "India Portals",
    description: "Fetch detailed CommonFloor property leads with complete enquiry metadata & origin tracking."
  },
  {
    icon: Landmark,
    title: "PropTiger APIs Integration",
    category: "India Portals",
    description: "Direct API integration with PropTiger for real-time lead syncing and project management."
  },

  // 🔥 Real Estate Portals (Dubai)
  {
    icon: Building2,
    title: "Bayut Lead Integration", 
    category: "Dubai Portals",
    description: "Capture premium property leads from Bayut with complete buyer preferences and budget details."
  },
  {
    icon: Layers,
    title: "PropertyFinder Integration",
    category: "Dubai Portals",
    description: "Sync high-value Dubai property leads from PropertyFinder with automated follow-up workflows."
  },
  {
    icon: FileSearch, 
    title: "Dubizzle Lead Capture",
    category: "Dubai Portals",
    description: "Automatically capture and qualify leads from Dubizzle with smart filtering and assignment."
  },
  {
    icon: Globe,
    title: "JustProperty UAE Integration",
    category: "Dubai Portals", 
    description: "Connect with JustProperty for comprehensive UAE market lead management and tracking."
  },

  // 🔥 Ad Platforms
  {
    icon: Smartphone,
    title: "Facebook Ads Lead Capture",
    category: "Ad Platforms",
    description: "Sync Facebook Lead Ads instantly with campaign tracking & auto-follow-up workflows."
  },
  {
    icon: Smartphone,
    title: "Instagram Ads Lead Capture", 
    category: "Ad Platforms",
    description: "Collect Instagram Ad leads in real-time with complete analytics & conversion tracking."
  },
  {
    icon: RadioTower,
    title: "Google Ads Lead Integration",
    category: "Ad Platforms",
    description: "Sync Google Ads form leads with keyword-level tracking & ROI analytics."
  },
  {
    icon: RadioTower,
    title: "YouTube Ads Lead Integration",
    category: "Ad Platforms",
    description: "Capture YouTube form leads with automatic project tagging & centralized lead distribution."
  },
  {
    icon: Zap,
    title: "WhatsApp CTA Ads Integration",
    category: "Ad Platforms", 
    description: "Convert WhatsApp ad clicks into qualified leads with instant CRM integration."
  },

  // 🔥 Website & Form Integrations
  {
    icon: Globe,
    title: "Website Lead Forms Integration",
    category: "Website & Forms",
    description: "Connect your website forms, landing pages & project pages for instant CRM lead syncing."
  },
  {
    icon: LinkIcon,
    title: "WordPress Integration",
    category: "Website & Forms",
    description: "Seamless WordPress plugin for capturing and managing property enquiry forms."
  },
  {
    icon: LinkIcon,
    title: "Custom API Integration",
    category: "Website & Forms",
    description: "Flexible API endpoints for custom website and application integrations."
  },
  {
    icon: Network,
    title: "Webhooks Integration",
    category: "Website & Forms", 
    description: "Real-time webhook support for instant lead notifications and data sync."
  },
  {
    icon: LinkIcon,
    title: "Google Forms & Typeform",
    category: "Website & Forms",
    description: "Auto-sync all Google Form, Typeform & JotForm submissions directly into your CRM pipeline."
  },
  {
    icon: Globe,
    title: "React/Next.js Forms",
    category: "Website & Forms",
    description: "Pre-built components for React and Next.js applications with instant lead capture."
  },

  // 🔥 Offline & Sales Gallery
  {
    icon: Scan,
    title: "QR Code Lead Capture",
    category: "Offline & Gallery",
    description: "Generate property QR codes for brochures, site visits, expos & events—auto-sync all scans into CRM."
  },
  {
    icon: Users,
    title: "Walk-in Registration",
    category: "Offline & Gallery", 
    description: "Digital walk-in forms with instant lead capture and agent assignment for sales galleries."
  },
  {
    icon: Building2,
    title: "Property Expo Booths",
    category: "Offline & Gallery",
    description: "Specialized expo lead capture with offline sync and instant follow-up automation."
  },
  {
    icon: SmartphoneCharging,
    title: "Tablets/Kiosk Entry",
    category: "Offline & Gallery",
    description: "Dedicated kiosk mode for property sites and sales offices with instant CRM updates."
  },
  {
    icon: QrCode,
    title: "Physical Forms Digitization",
    category: "Offline & Gallery",
    description: "Convert physical registration forms into digital leads with OCR and manual entry options."
  }
];

const categories = [
  { name: "India Portals", color: "from-green-500/20 to-green-600/10", border: "border-green-500/20" },
  { name: "Dubai Portals", color: "from-blue-500/20 to-blue-600/10", border: "border-blue-500/20" },
  { name: "Ad Platforms", color: "from-purple-500/20 to-purple-600/10", border: "border-purple-500/20" },
  { name: "Website & Forms", color: "from-orange-500/20 to-orange-600/10", border: "border-orange-500/20" },
  { name: "Offline & Gallery", color: "from-red-500/20 to-red-600/10", border: "border-red-500/20" }
];

export default function LeadIntegrations() {
  return (
    <section
      id="lead-integrations"
      className="relative py-24 px-6 lg:px-12 overflow-hidden bg-black text-white"
    >
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-black to-blue-900/10"
        animate={{ opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-purple-400 px-4 py-2 rounded-full text-sm mb-4 border border-purple-500/30">
            <span>🔥 100+ LEAD INTEGRATIONS</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Every Lead Source Connected Automatically
          </h2>

          <p className="text-white/70 text-xl max-w-3xl mx-auto leading-relaxed">
            From real estate portals to social ads, website forms to offline events — 
            Catination CRM automatically captures, syncs & assigns leads from every channel in real-time.
          </p>

          {/* Master Integration Count */}
          <div className="mt-8 inline-flex items-center gap-4 bg-gradient-to-r from-purple-600/10 to-blue-600/10 px-6 py-4 rounded-2xl border border-purple-500/20">
            <div className="text-3xl font-bold text-purple-400">100+</div>
            <div className="text-left">
              <div className="text-white font-semibold">Integrated Platforms</div>
              <div className="text-white/60 text-sm">Zero leakage • Auto assignment • Instant follow-up</div>
            </div>
          </div>
        </motion.div>

        {/* Categorized Integration Cards */}
        <div className="space-y-12">
          {categories.map((category) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className={`mb-6 p-6 rounded-2xl bg-gradient-to-r ${category.color} border ${category.border}`}>
                <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                <p className="text-white/70">
                  {category.name === "India Portals" && "All major Indian real estate portals with real-time lead sync"}
                  {category.name === "Dubai Portals" && "Complete coverage of Dubai and UAE property platforms"}
                  {category.name === "Ad Platforms" && "Digital advertising platforms with conversion tracking"}
                  {category.name === "Website & Forms" && "Website, landing page and form builder integrations"}
                  {category.name === "Offline & Gallery" && "Offline lead capture solutions for physical touchpoints"}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {leadIntegrations
                  .filter(integration => integration.category === category.name)
                  .map((integration, index) => (
                    <motion.div
                      key={integration.title}
                      className={`bg-gradient-to-br ${category.color} p-6 rounded-xl border ${category.border} hover:border-white/40 transition-all group`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1
                      }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-white/10 to-white/5 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <integration.icon className="w-6 h-6 text-white" />
                      </div>

                      <h3 className="text-xl mb-3 font-semibold text-white">{integration.title}</h3>
                      <p className="text-white/70 leading-relaxed">{integration.description}</p>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Integration Flow */}
        <motion.div
          className="mt-16 p-8 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-2xl border border-purple-500/20 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">Seamless Lead Flow Automation</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-white/70 text-lg">
            <span className="bg-purple-500/20 px-4 py-2 rounded-lg">Every Lead</span>
            <span className="text-purple-400">→</span>
            <span className="bg-blue-500/20 px-4 py-2 rounded-lg">Auto Captured</span>
            <span className="text-purple-400">→</span>
            <span className="bg-green-500/20 px-4 py-2 rounded-lg">Auto Assigned</span>
            <span className="text-purple-400">→</span>
            <span className="bg-orange-500/20 px-4 py-2 rounded-lg">Auto Followed-up</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}