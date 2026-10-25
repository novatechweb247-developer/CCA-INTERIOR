import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles, CheckCircle2, MapPin, Phone, MessageSquare, Play, Pause } from 'lucide-react';
import { HERO_SLIDES, SERVICES, GALLERY_ITEMS, BUSINESS_INFO } from '../data/content';

interface HomeProps {
  onNavigate: (page: string) => void;
  onOpenConsultation: () => void;
}

export default function Home({ onNavigate, onOpenConsultation }: HomeProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Auto-advance hero slides every 5 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide, isPaused]);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNextSlide();
      } else {
        handlePrevSlide();
      }
    }
  };

  return (
    <div className="w-full">
      {/* 1. THREE-SLIDE PREMIUM HERO */}
      <section
        className="relative h-[85vh] md:h-[92vh] w-full overflow-hidden bg-[#171817]"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              {/* Background Image with subtle scale */}
              <div
                className={`absolute inset-0 bg-cover bg-center transition-transform duration-[6000ms] ${
                  isActive ? 'scale-105' : 'scale-100'
                }`}
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              {/* Gradient Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#171817]/90 via-[#171817]/60 to-transparent" />

              {/* Hero Content */}
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-7xl mx-auto px-6 w-full pt-16">
                  <div className="max-w-2xl space-y-6 animate-fade-in">
                    <span className="inline-block text-xs uppercase tracking-[0.3em] text-[#B99A65] font-semibold bg-[#171817]/60 px-3 py-1.5 rounded border border-[#B99A65]/30">
                      {slide.tag}
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif-editorial text-white tracking-tight leading-[1.1]">
                      {slide.title}
                    </h1>
                    <p className="text-base md:text-lg text-[#D8D0C4] font-light max-w-xl leading-relaxed">
                      {slide.description}
                    </p>
                    <div className="pt-4 flex flex-wrap gap-4">
                      <button
                        onClick={onOpenConsultation}
                        className="bg-[#B99A65] text-white px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-medium rounded hover:bg-[#a08554] transition-all shadow-lg cursor-pointer flex items-center space-x-2 group"
                      >
                        <span>{slide.ctaText}</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                      <button
                        onClick={() => onNavigate('services')}
                        className="border border-white/40 text-white px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-medium rounded hover:bg-white hover:text-[#171817] transition-all cursor-pointer"
                      >
                        Our Expertise
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Carousel Navigation Controls */}
        <div className="absolute bottom-8 right-8 z-20 hidden md:flex items-center space-x-3">
          <button
            onClick={handlePrevSlide}
            className="w-12 h-12 rounded-full border border-white/20 bg-black/40 text-white flex items-center justify-center hover:bg-[#B99A65] hover:border-[#B99A65] transition-colors cursor-pointer"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNextSlide}
            className="w-12 h-12 rounded-full border border-white/20 bg-black/40 text-white flex items-center justify-center hover:bg-[#B99A65] hover:border-[#B99A65] transition-colors cursor-pointer"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Slide Indicators with Progress Bar */}
        <div className="absolute bottom-8 left-6 md:left-12 z-20 flex items-center space-x-3">
          {HERO_SLIDES.map((slide, index) => {
            const isActive = index === currentSlide;
            return (
              <button
                key={slide.id}
                onClick={() => setCurrentSlide(index)}
                className="group p-1 flex items-center cursor-pointer focus:outline-none"
                aria-label={`Go to slide ${index + 1}`}
              >
                <div
                  className={`h-1.5 rounded-full overflow-hidden transition-all duration-300 relative ${
                    isActive ? 'w-14 bg-white/30' : 'w-3 bg-white/40 hover:bg-white'
                  }`}
                >
                  {isActive && !isPaused && (
                    <div
                      key={`progress-${currentSlide}`}
                      className="absolute inset-0 bg-[#B99A65] rounded-full animate-hero-progress"
                    />
                  )}
                  {isActive && isPaused && (
                    <div className="absolute inset-0 bg-[#B99A65] rounded-full" />
                  )}
                </div>
              </button>
            );
          })}
          {/* Subtle Play / Pause toggle */}
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="w-6 h-6 rounded-full bg-black/40 border border-white/20 text-white/80 hover:text-white flex items-center justify-center transition-colors ml-2 cursor-pointer"
            aria-label={isPaused ? 'Resume auto-scroll' : 'Pause auto-scroll'}
            title={isPaused ? 'Resume auto-scroll' : 'Pause auto-scroll'}
          >
            {isPaused ? <Play className="w-2.5 h-2.5 ml-0.5" /> : <Pause className="w-2.5 h-2.5" />}
          </button>
        </div>
      </section>

      {/* 2. BRAND INTRODUCTION */}
      <section className="py-24 bg-[#F7F4EE]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#B99A65] font-semibold">
                Where Design Meets Detail
              </span>
              <h2 className="text-3xl md:text-5xl font-serif-editorial text-[#171817] leading-tight">
                Crafting Environments That Reflect Your True Essence
              </h2>
              <p className="text-[#8A8176] text-base leading-relaxed font-light">
                Beautiful interiors are shaped by meticulous attention to detail. CCA Interior brings together thoughtful decoration, custom curtains, motorized blinds, and exquisite furnishing ideas to help customers create spaces that feel welcoming, refined, and deeply personal.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center space-x-3 text-xs uppercase tracking-[0.2em] font-semibold text-[#171817] hover:text-[#B99A65] transition-colors group cursor-pointer"
                >
                  <span>Discover CCA Interior</span>
                  <ArrowRight className="w-4 h-4 text-[#B99A65] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1000"
                  alt="CCA Interior living space"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[#D8D0C4]/40 rounded-lg -z-0 hidden md:block" />
              <div className="absolute -top-6 -right-6 w-32 h-32 border-2 border-[#B99A65]/40 rounded-lg -z-0 hidden md:block" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED SERVICE CATEGORIES */}
      <section className="py-24 bg-white border-t border-[#D8D0C4]/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.25em] text-[#B99A65] font-semibold">
                Our Expertise
              </span>
              <h2 className="text-3xl md:text-4xl font-serif-editorial text-[#171817]">
                Curated Interior & Blind Solutions
              </h2>
            </div>
            <button
              onClick={() => onNavigate('services')}
              className="mt-6 md:mt-0 inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-medium text-[#171817] hover:text-[#B99A65] transition-colors cursor-pointer"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((service) => (
              <div
                key={service.id}
                className="group bg-[#F7F4EE] rounded-lg overflow-hidden border border-[#D8D0C4]/60 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-[#171817]/80 backdrop-blur-sm text-white px-3 py-1 rounded text-[10px] uppercase tracking-wider">
                      {service.category}
                    </div>
                  </div>
                  <div className="p-8 space-y-4">
                    <h3 className="text-2xl font-serif-editorial text-[#171817] group-hover:text-[#B99A65] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#8A8176] leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>
                </div>
                <div className="px-8 pb-8 pt-0">
                  <button
                    onClick={() => onNavigate('services')}
                    className="inline-flex items-center space-x-2 text-xs uppercase tracking-wider font-semibold text-[#171817] group-hover:text-[#B99A65] transition-colors cursor-pointer"
                  >
                    <span>Explore Solution</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. EDITORIAL INTERIOR-DESIGN SHOWCASE */}
      <section className="py-24 bg-[#171817] text-[#F7F4EE]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative aspect-[4/5] rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1000"
                alt="Luxury curtains and window treatment"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#B99A65] font-semibold">
                Refined Craftsmanship
              </span>
              <h2 className="text-3xl md:text-5xl font-serif-editorial leading-tight">
                The Art of Finishing Touches & Window Treatments
              </h2>
              <p className="text-[#D8D0C4] text-base leading-relaxed font-light">
                Windows define how natural light enters and interacts with your architecture. At CCA Interior, we curate and install breathtaking custom curtains, sheer draperies, motorized blinds, and Roman shades that command attention while offering absolute comfort.
              </p>
              <ul className="space-y-3 pt-2 text-sm text-[#D8D0C4]">
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-[#B99A65] shrink-0" />
                  <span>Custom fabric selection & precise tailoring</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-[#B99A65] shrink-0" />
                  <span>Motorized & smart blind integration</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-[#B99A65] shrink-0" />
                  <span>Professional measuring & flawless installation in Jos</span>
                </li>
              </ul>
              <div className="pt-4">
                <button
                  onClick={onOpenConsultation}
                  className="bg-[#B99A65] text-white px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-medium rounded hover:bg-[#a08554] transition-colors cursor-pointer"
                >
                  Book Window Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE CCA INTERIOR */}
      <section className="py-24 bg-[#F7F4EE]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-[#B99A65] font-semibold">
              The CCA Distinction
            </span>
            <h2 className="text-3xl md:text-4xl font-serif-editorial text-[#171817]">
              Why Clients Trust Our Vision
            </h2>
            <p className="text-sm text-[#8A8176]">
              Dedicated to superior aesthetic standards, personalized consultations, and exceptional quality in every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Personalized Consultation",
                desc: "Every space is unique. We listen closely to your lifestyle, taste, and functional needs before crafting custom solutions."
              },
              {
                title: "Exquisite Materials",
                desc: "We source premium fabrics, durable hardware, and refined furnishings built for enduring elegance and comfort."
              },
              {
                title: "Jos Based & Accessible",
                desc: "Conveniently located at 7/9 Lugard Road, Jos, offering prompt local service, expert advice, and professional installations."
              }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-lg border border-[#D8D0C4]/60 shadow-sm space-y-4">
                <div className="w-10 h-10 rounded bg-[#B99A65]/10 text-[#B99A65] flex items-center justify-center font-serif-editorial text-lg font-bold">
                  0{i + 1}
                </div>
                <h3 className="text-xl font-serif-editorial text-[#171817]">{feature.title}</h3>
                <p className="text-sm text-[#8A8176] leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SELECTED GALLERY PREVIEW */}
      <section className="py-24 bg-white border-t border-[#D8D0C4]/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.25em] text-[#B99A65] font-semibold">
                Visual Portfolio
              </span>
              <h2 className="text-3xl md:text-4xl font-serif-editorial text-[#171817]">
                Selected Interiors & Blinds
              </h2>
            </div>
            <button
              onClick={() => onNavigate('gallery')}
              className="mt-6 md:mt-0 inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-medium text-[#171817] hover:text-[#B99A65] transition-colors cursor-pointer"
            >
              <span>Explore Full Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {GALLERY_ITEMS.slice(0, 4).map((item) => (
              <div
                key={item.id}
                onClick={() => onNavigate('gallery')}
                className="group relative aspect-[4/5] rounded-lg overflow-hidden shadow-sm cursor-pointer bg-[#171817]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171817]/90 via-[#171817]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white space-y-1">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#B99A65] font-semibold">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-serif-editorial">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CONSULTATION CTA */}
      <section className="py-24 bg-[#171817] text-[#F7F4EE] text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#B99A65_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-8">
          <span className="text-xs uppercase tracking-[0.3em] text-[#B99A65] font-semibold">
            Begin Your Project
          </span>
          <h2 className="text-3xl md:text-5xl font-serif-editorial leading-tight">
            LET'S MAKE YOUR SPACE FEEL DIFFERENT.
          </h2>
          <p className="text-[#D8D0C4] text-base md:text-lg max-w-2xl mx-auto font-light">
            Have a room, home, or office in mind? Contact CCA Interior to discuss your decoration, curtain, and furnishing needs in Jos.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto bg-[#B99A65] text-white px-8 py-4 text-xs uppercase tracking-[0.2em] font-medium rounded hover:bg-[#a08554] transition-colors cursor-pointer shadow-lg"
            >
              Discuss Your Space
            </button>
            <a
              href={BUSINESS_INFO.telUrl}
              className="w-full sm:w-auto border border-white/40 text-white px-8 py-4 text-xs uppercase tracking-[0.2em] font-medium rounded hover:bg-white hover:text-[#171817] transition-colors flex items-center justify-center space-x-2"
            >
              <Phone className="w-4 h-4 text-[#B99A65]" />
              <span>Call {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </section>

      {/* 8. CONTACT / LOCATION PREVIEW */}
      <section className="py-24 bg-[#F7F4EE]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#B99A65] font-semibold">
                Visit Our Studio
              </span>
              <h2 className="text-3xl md:text-4xl font-serif-editorial text-[#171817]">
                CCA INTERIOR Location
              </h2>
              <p className="text-[#8A8176] text-sm leading-relaxed">
                We invite you to reach out or visit our showroom location in Jos, Plateau State for expert guidance on interior decor, window treatments, and furnishings.
              </p>
              <div className="space-y-4 pt-2">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded bg-[#171817] text-[#B99A65] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#171817]">Address</h4>
                    <p className="text-sm text-[#8A8176]">{BUSINESS_INFO.address}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded bg-[#171817] text-[#B99A65] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#171817]">Direct Phone / WhatsApp</h4>
                    <p className="text-sm text-[#8A8176]">{BUSINESS_INFO.phoneFormatted}</p>
                  </div>
                </div>
              </div>
              <div className="pt-4 flex flex-wrap gap-4">
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] text-white px-6 py-3 text-xs uppercase tracking-wider font-medium rounded hover:opacity-95 transition-opacity flex items-center space-x-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Us</span>
                </a>
                <button
                  onClick={() => onNavigate('contact')}
                  className="bg-[#171817] text-white px-6 py-3 text-xs uppercase tracking-wider font-medium rounded hover:bg-[#B99A65] transition-colors cursor-pointer"
                >
                  Contact Page & Map
                </button>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md border border-[#D8D0C4]">
              <div className="aspect-[4/3] rounded overflow-hidden relative bg-[#D8D0C4]/30 flex flex-col items-center justify-center text-center p-6">
                <MapPin className="w-12 h-12 text-[#B99A65] mb-4 animate-bounce" />
                <h3 className="text-xl font-serif-editorial font-semibold text-[#171817]">
                  7/9 Lugard Road, Jos
                </h3>
                <p className="text-xs text-[#8A8176] mt-2 max-w-xs">
                  Plateau State, Nigeria. Conveniently accessible for private consultations and showroom visits.
                </p>
                <a
                  href={BUSINESS_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 bg-[#171817] text-white px-5 py-2.5 text-xs uppercase tracking-wider rounded hover:bg-[#B99A65] transition-colors"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
