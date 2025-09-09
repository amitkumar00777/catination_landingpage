"use client";

import { useState } from "react"
import { ArrowRight, CheckCircle } from "lucide-react"


export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    mobileNumber: "",
    email: "",
    message: "",
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
      const res = await fetch("https://api.catination.com:8484/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setSuccess(true)
        setFormData({ name: "", mobileNumber: "", email: "", message: "" })
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
    <section id="contact" className="py-20 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="relative bg-gradient-to-br from-purple-600/30 to-purple-700/20 rounded-3xl p-8 sm:p-12 lg:p-16 border border-purple-400/30 overflow-hidden shadow-2xl shadow-purple-900/30">
          {/* Background Decorations */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl -translate-x-20 -translate-y-20"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl translate-x-20 translate-y-20"></div>

          <div className="relative z-10 space-y-10">
            {/* Heading */}
            <div className="space-y-4 text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Get in Touch
              </h2>
              <p className="text-white/70 text-lg sm:text-xl max-w-2xl mx-auto">
                Have questions or want to learn more? Fill out the form below and our team will get back to you.
              </p>
            </div>

            {/* Contact Form */}
            <form
              onSubmit={handleSubmit}
              className="space-y-6 max-w-2xl mx-auto text-left"
            >
              <div>
                <label className="block text-white/80 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="block text-white/80 mb-2">Mobile Number</label>
                <input
                  type="tel"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  placeholder="Your Mobile Number"
                />
              </div>

              <div>
                <label className="block text-white/80 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  placeholder="Your Email"
                />
              </div>

              <div>
                <label className="block text-white/80 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  placeholder="Your Message"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="group flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 rounded-xl text-lg font-medium shadow-lg hover:shadow-purple-700/40 transition-all duration-300 disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              {success === true && (
                <p className="text-green-400 flex items-center gap-2 mt-4">
                  <CheckCircle className="w-5 h-5" /> Message sent successfully!
                </p>
              )}
              {success === false && (
                <p className="text-red-400 mt-4">Something went wrong. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}