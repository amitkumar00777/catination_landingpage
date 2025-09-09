import Image from "next/image"
import { Twitter, Linkedin, Facebook, Instagram } from "lucide-react"

const footerLinks = {
  Company: [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/#contact' },
  ],
  Resources: [
    { name: 'Help Center', href: '/help' },
    { name: 'Blog', href: '/blog' },
  ],
  'Our Presence': [
    { name: 'India', href: '/#india' },
    { name: 'Dubai', href: '/#dubai' },
  ],
  Legal: [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
}

const socialLinks = [
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/catinationcrm' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/company/catinationcrm/' },
  { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/catinationcrm/' },
  { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/catinationcrm/' },
]

export default function Footer() {
  return (
    <footer className="border-t border-purple-500/20 bg-[#0a0a0a]/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/catination-logo.png"
                alt="Catination Logo"
                width={170}
                height={90}
                className="object-contain"
                priority
              />
            </div>
            <p className="text-white/70 max-w-sm">
              The most powerful CRM platform designed specifically for real estate professionals to grow their business.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-10 h-10 bg-purple-500/10 hover:bg-purple-500/20 rounded-lg flex items-center justify-center text-white/70 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h3 className="text-white font-medium">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-purple-500/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">
            © 2024 Catination. All rights reserved.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-6 text-sm text-white/70">
            <span>Presence in <strong>Dubai</strong> & <strong>India</strong></span>
          </div>
        </div>
      </div>
    </footer>
  )
}
