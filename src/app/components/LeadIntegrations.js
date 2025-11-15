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
  Cable
} from "lucide-react";

import { motion } from "framer-motion";

const leadIntegrations = [
  {
    icon: Building2,
    title: "99acres Lead Integration",
    description:
      "Capture and sync all buyer & tenant inquiries from 99acres in real-time directly into your CRM with automatic tagging & assignment."
  },
  {
    icon: Layers,
    title: "MagicBricks Lead Integration",
    description:
      "Fetch high-intent property interest leads from MagicBricks with full buyer data, preferences & timeline insights."
  },
  {
    icon: FileSearch,
    title: "Housing.com Lead Integration",
    description:
      "Receive 100% verified Housing.com leads instantly inside the CRM with complete lead mapping & status tracking."
  },
  {
    icon: Network,
    title: "SquareYards Lead Sync",
    description:
      "Automatically import SquareYards project leads with advanced project tagging & follow-up automation."
  },
  {
    icon: Cable,
    title: "NoBroker Lead Integration",
    description:
      "Capture direct-owner inquiries & rental leads from NoBroker instantly into your CRM dashboard."
  },
  {
    icon: Globe,
    title: "CommonFloor Lead Integration",
    description:
      "Fetch detailed CommonFloor property leads with complete enquiry metadata & origin tracking."
  },
  {
    icon: Smartphone,
    title: "Facebook Ads Lead Capture",
    description:
      "Sync Facebook Lead Ads instantly with campaign tracking & auto-follow-up workflows."
  },
  {
    icon: Smartphone,
    title: "Instagram Ads Lead Capture",
    description:
      "Collect Instagram Ad leads in real-time with complete analytics & conversion tracking."
  },
  {
    icon: RadioTower,
    title: "Google Ads Lead Integration",
    description:
      "Sync Google Ads form leads with keyword-level tracking & ROI analytics."
  },
  {
    icon: RadioTower,
    title: "YouTube Ads Lead Integration",
    description:
      "Capture YouTube form leads with automatic project tagging & centralized lead distribution."
  },
  {
    icon: Globe,
    title: "Website Lead Forms Integration",
    description:
      "Connect your website forms, landing pages & project pages for instant CRM lead syncing."
  },
  {
    icon: Scan,
    title: "QR Code Lead Capture",
    description:
      "Generate property QR codes for brochures, site visits, expos & events—auto-sync all scans into CRM."
  },
  {
    icon: Smartphone,
    title: "WhatsApp Lead Capture",
    description:
      "Capture WhatsApp button clicks, form submissions & chat enquiries directly inside CRM."
  },
  {
    icon: LinkIcon,
    title: "Google Forms & Typeform Integration",
    description:
      "Auto-sync all Google Form, Typeform & JotForm submissions directly into your CRM pipeline."
  },
  {
    icon: Globe,
    title: "100+ Real Estate Platforms Lead Integration",
    description:
      "Catination CRM integrates with 100+ portals, ad networks, offline sources & APIs so every lead is captured in one place."
  }
];

export default function LeadIntegrations() {
  return (
    <section
      id="lead-integrations"
      className="relative py-24 px-6 lg:px-12 overflow-hidden bg-black text-white"
    >
      {/* Animated floating background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-700/10 to-blue-900/10 blur-3xl"
        animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto relative">
        {/* Heading Animation */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-300 px-4 py-2 rounded-full text-sm mb-4">
            <span>Lead Integrations</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            100+ Automated Lead Integrations
          </h2>

          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Automatically capture, sync & assign leads from every major real estate portal,
            advertising platform, website form and offline channel — all in real time.
          </p>
        </motion.div>

        {/* Animated Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leadIntegrations.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 p-6 rounded-xl border border-blue-500/20 hover:border-blue-400/40 transition-all group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08
              }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-xl mb-3 font-semibold">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
