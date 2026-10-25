import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onOpenConsultation: () => void;
}

export default function Header({ currentPage, onNavigate, onOpenConsultation }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isHome = currentPage === 'home';
  const headerBackground = isScrolled || !isHome
    ? 'bg-[#F7F4EE]/95 backdrop-blur-md shadow-sm text-[#171817] border-b border-[#D8D0C4]/40'
    : 'bg-gradient-to-b from-[#171817]/70 to-transparent text-white';

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${headerBackground}`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex flex-col text-left group cursor-pointer focus:outline-none"
          >
            <span className="text-xl md:text-2xl font-serif-editorial tracking-wider font-semibold">
              CCA INTERIOR
            </span>
            <span className={`text-[10px] tracking-[0.25s] uppercase font-medium ${isScrolled || !isHome ? 'text-[#B99A65]' : 'text-[#D8D0C4]'}`}>
              Interiors & Blinds World
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const active = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-sm uppercase tracking-wider transition-colors relative py-1 cursor-pointer font-medium ${
                    active
                      ? 'text-[#B99A65]'
                      : isScrolled || !isHome
                      ? 'text-[#171817] hover:text-[#B99A65]'
                      : 'text-[#F7F4EE] hover:text-[#B99A65]'
                  }`}
                >
                  {link.name}
                  {active && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#B99A65] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop Contact CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={BUSINESS_INFO.telUrl}
              className={`flex items-center space-x-2 text-xs uppercase tracking-wider font-medium px-4 py-2.5 rounded border transition-all ${
                isScrolled || !isHome
                  ? 'border-[#171817] text-[#171817] hover:bg-[#171817] hover:text-[#F7F4EE]'
                  : 'border-white/40 text-white hover:bg-white hover:text-[#171817]'
              }`}
            >
              <Phone className="w-3.5 h-3.5 text-[#B99A65]" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
            <button
              onClick={onOpenConsultation}
              className="bg-[#B99A65] text-white px-5 py-2.5 text-xs uppercase tracking-wider font-medium rounded hover:bg-[#a08554] transition-colors cursor-pointer shadow-sm"
            >
              Consultation
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded focus:outline-none transition-colors ${
              isScrolled || !isHome ? 'text-[#171817]' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between relative">
              <span
                className={`w-full h-0.5 bg-current transition-transform duration-300 ${
                  mobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''
                }`}
              />
              <span
                className={`w-full h-0.5 bg-current transition-opacity duration-300 ${
                  mobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`w-full h-0.5 bg-current transition-transform duration-300 ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Overlay Menu */}
      <div
        className={`fixed inset-0 z-30 bg-[#171817] text-[#F7F4EE] flex flex-col justify-between px-8 py-24 transition-all duration-500 md:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col space-y-6 mt-4">
          <span className="text-xs uppercase tracking-[0.3em] text-[#B99A65]">
            Navigation
          </span>
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`text-2xl font-serif-editorial text-left tracking-wide transition-colors flex items-center justify-between ${
                currentPage === link.id ? 'text-[#B99A65]' : 'text-white hover:text-[#B99A65]'
              }`}
            >
              <span>{link.name}</span>
              {currentPage === link.id && <ArrowRight className="w-5 h-5 text-[#B99A65]" />}
            </button>
          ))}
        </div>

        <div className="space-y-4 pt-6 border-t border-white/10">
          <div className="flex flex-col space-y-1">
            <span className="text-xs text-[#8A8176] uppercase tracking-wider">Direct Enquiries</span>
            <a href={BUSINESS_INFO.telUrl} className="text-lg font-medium text-white hover:text-[#B99A65]">
              {BUSINESS_INFO.phone}
            </a>
          </div>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenConsultation();
            }}
            className="w-full bg-[#B99A65] text-white py-3 text-sm uppercase tracking-wider font-medium rounded hover:bg-[#a08554] transition-colors"
          >
            Request a Consultation
          </button>
        </div>
      </div>
    </>
  );
}
