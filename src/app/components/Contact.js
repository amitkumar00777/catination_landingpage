// src/app/components/Contact.js
"use client";

import { useState } from "react"
import { ArrowRight, CheckCircle, Mail, Phone, MapPin, Clock } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    mobileNumber: "",
    email: "",
    companyName: "",
    message: "",
    interestedIn: "Demo"
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(null)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setSuccess(null)

    try {
      const res = await fetch("https://api.catination.com/service/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setSuccess(true)
        setFormData({ name: "", mobileNumber: "", email: "", companyName: "", message: "", interestedIn: "Demo" })
      } else {
        setSuccess(false)
      }
    } catch (error) {
      console.error(error)
      setSuccess(false)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-6 lg:px-12 bg-gradient-to-br from-black via-purple-900/10 to-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-purple-400 px-4 py-2 rounded-full text-sm mb-4 border border-purple-500/30">
            <span>📞 GET STARTED TODAY</span>
          </div>
          <h2 className="text-4xl lg:text-5xl text-white mb-6 font-bold">
            Ready to Transform Your Real Estate Business?
          </h2>
          <p className="text-white/70 text-xl max-w-3xl mx-auto leading-relaxed">
            Join 500+ real estate companies in India and Dubai who trust Catination CRM to automate their operations and drive growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/5 rounded-2xl p-8 border border-purple-500/20">
              <h3 className="text-2xl text-white mb-6 font-bold">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Call Us</div>
                    <div className="text-white/70">India: +91-8178714102</div>
                    {/* <div className="text-white/70">Dubai: +971-XXX-XXXX</div> */}
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Email Us</div>
                    {/* <div className="text-white/70">sales@catination.com</div> */}
                    <div className="text-white/70">support@catination.com</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Support Hours</div>
                    <div className="text-white/70">24/7 Customer Support</div>
                    <div className="text-white/70">Demo: Mon-Sat, 9AM-7PM</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Our Presence</div>
                    <div className="text-white/70">Dubai, UAE</div>
                    <div className="text-white/70">Major Cities across India</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 p-4 rounded-xl border border-purple-500/20 text-center">
                <div className="text-2xl font-bold text-purple-400">500+</div>
                <div className="text-white/70 text-sm">Happy Clients</div>
              </div>
              <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 p-4 rounded-xl border border-blue-500/20 text-center">
                <div className="text-2xl font-bold text-blue-400">100+</div>
                <div className="text-white/70 text-sm">Integrations</div>
              </div>
              <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 p-4 rounded-xl border border-green-500/20 text-center">
                <div className="text-2xl font-bold text-green-400">24/7</div>
                <div className="text-white/70 text-sm">Support</div>
              </div>
              <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/5 p-4 rounded-xl border border-orange-500/20 text-center">
                <div className="text-2xl font-bold text-orange-400">14-Day</div>
                <div className="text-white/70 text-sm">Free Trial</div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-purple-600/10 to-blue-600/10 rounded-2xl p-8 border border-purple-500/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white/80 mb-2 font-semibold">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label className="block text-white/80 mb-2 font-semibold">Mobile Number *</label>
                  <input
                    type="tel"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all"
                    placeholder="Your Mobile Number"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white/80 mb-2 font-semibold">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-white/80 mb-2 font-semibold">Company Name</label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all"
                    placeholder="Your Company"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white/80 mb-2 font-semibold">I&apos;m Interested In *</label>
                <select
                  name="interestedIn"
                  value={formData.interestedIn}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all"
                >
                  <option value="Demo">Book a Demo</option>
                  <option value="Trial">Free Trial</option>
                  <option value="Pricing">Pricing Information</option>
                  <option value="Enterprise">Enterprise Solution</option>
                  <option value="Partnership">Channel Partnership</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-white/80 mb-2 font-semibold">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="group w-full flex items-center justify-center gap-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-purple-700/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Send Message"}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              {success === true && (
                <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 p-4 rounded-xl border border-green-500/20">
                  <p className="text-green-400 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" /> 
                    Message sent successfully! We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              )}
              {success === false && (
                <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 p-4 rounded-xl border border-red-500/20">
                  <p className="text-red-400">Something went wrong. Please try again or contact us directly.</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}