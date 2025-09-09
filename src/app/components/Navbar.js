"use client";

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0a0a0a] border-b border-purple-500/20">
      <div className="flex items-center justify-between px-6 py-4 lg:px-10 max-w-9xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Image
              src="/catination-logo.png"
              alt="Catination Logo"
              width={170}
              height={90}
              className="object-contain"
              priority
            />
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-white/80 hover:text-white transition-colors">
            Features
          </a>
          <a href="#pricing" className="text-white/80 hover:text-white transition-colors">
            Pricing
          </a>
          <a href="#testimonials" className="text-white/80 hover:text-white transition-colors">
            Testimonials
          </a>
          <a href="#contact" className="text-white/80 hover:text-white transition-colors">
            Contact
          </a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="border border-purple-500 text-purple-400 hover:bg-purple-500/10 px-4 py-2 rounded-lg transition-colors"
          >
            Book Demo
          </a>
          <a
            href="https://app.catination.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-4 py-2 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>

        <button className="md:hidden text-white p-2" onClick={toggleMenu}>
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-t border-purple-500/20">
          <div className="px-6 py-4 flex flex-col space-y-4">
            <a href="#features" className="text-white/80 hover:text-white transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              Features
            </a>
            <a href="#pricing" className="text-white/80 hover:text-white transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              Pricing
            </a>
            <a href="#testimonials" className="text-white/80 hover:text-white transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              Testimonials
            </a>
            <a href="#contact" className="text-white/80 hover:text-white transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              Contact
            </a>
            <div className="flex flex-col space-y-3 pt-4 border-t border-purple-500/20">
              <a
                href="#contact"
                className="border border-purple-500 text-purple-400 hover:bg-purple-500/10 px-4 py-2 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Demo
              </a>
              <a
                href="https://app.catination.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
