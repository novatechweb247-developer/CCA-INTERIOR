import React from 'react';
import { Phone, MapPin, Clock, MessageSquare, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface FooterProps {
  onNavigate: (page: string) => void;
  onOpenConsultation: () => void;
}

export default function Footer({ onNavigate, onOpenConsultation }: FooterProps) {
  return (
    <footer className="bg-[#171817] text-[#F7F4EE] pt-20 pb-12 border-t border-[#8A8176]/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/10">
          {/* Brand Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-serif-editorial tracking-wider font-semibold">
                {BUSINESS_INFO.name}
              </h2>
              <p className="text-xs uppercase tracking-[0.25em] text-[#B99A65] mt-1">
                {BUSINESS_INFO.tagline}
              </p>
            </div>
            <p className="text-sm text-[#D8D0C4] leading-relaxed">
              Thoughtful interior decoration, exquisite curtains, bespoke blinds, and refined furnishings in Jos, Plateau State, Nigeria.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#B99A65] hover:border-[#B99A65] transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4 text-[#F7F4EE]" />
              </a>
              <a
                href={BUSINESS_INFO.telUrl}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#B99A65] hover:border-[#B99A65] transition-colors"
                aria-label="Phone Call"
              >
                <Phone className="w-4 h-4 text-[#F7F4EE]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-sm uppercase tracking-[0.2em] text-[#B99A65] font-medium">
              Navigation
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', id: 'home' },
                { name: 'About Us', id: 'about' },
                { name: 'Services', id: 'services' },
                { name: 'Gallery', id: 'gallery' },
                { name: 'Contact & Location', id: 'contact' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      onNavigate(item.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-sm text-[#D8D0C4] hover:text-[#B99A65] transition-colors flex items-center group cursor-pointer"
                  >
                    <ArrowRight className="w-3.5 h-3.5 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#B99A65]" />
                    <span>{item.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-sm uppercase tracking-[0.2em] text-[#B99A65] font-medium">
              Expertise
            </h3>
            <ul className="space-y-3 text-sm text-[#D8D0C4]">
              <li className="hover:text-white transition-colors">Interior Decoration</li>
              <li className="hover:text-white transition-colors">Custom Curtains & Blinds</li>
              <li className="hover:text-white transition-colors">Window Treatments</li>
              <li className="hover:text-white transition-colors">Furniture & Furnishing</li>
              <li className="hover:text-white transition-colors">Space Styling & Makeovers</li>
            </ul>
          </div>

          {/* Location & Contact */}
          <div className="space-y-6">
            <h3 className="text-sm uppercase tracking-[0.2em] text-[#B99A65] font-medium">
              Visit & Connect
            </h3>
            <div className="space-y-4 text-sm text-[#D8D0C4]">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#B99A65] shrink-0 mt-1" />
                <span>{BUSINESS_INFO.address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#B99A65] shrink-0" />
                <a href={BUSINESS_INFO.telUrl} className="hover:text-white transition-colors">
                  {BUSINESS_INFO.phone}
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-[#B99A65] shrink-0 mt-1" />
                <span>{BUSINESS_INFO.hours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#8A8176]">
          <p>© {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button
              onClick={onOpenConsultation}
              className="hover:text-[#B99A65] transition-colors cursor-pointer"
            >
              Request Consultation
            </button>
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#B99A65] transition-colors"
            >
              WhatsApp Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
