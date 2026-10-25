import React from 'react';
import { CheckCircle2, ArrowRight, MessageSquare, Phone } from 'lucide-react';
import { SERVICES, BUSINESS_INFO } from '../data/content';

interface ServicesProps {
  onOpenConsultation: () => void;
}

export default function Services({ onOpenConsultation }: ServicesProps) {
  return (
    <div className="pt-20 w-full">
      {/* Page Header */}
      <section className="bg-[#171817] text-[#F7F4EE] py-20 md:py-28 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#B99A65_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-[#B99A65] font-semibold">
            CCA Interior Expertise
          </span>
          <h1 className="text-4xl md:text-6xl font-serif-editorial">
            OUR PROFESSIONAL SERVICES
          </h1>
          <p className="text-[#D8D0C4] text-base md:text-lg max-w-2xl mx-auto font-light">
            Comprehensive interior decoration, bespoke window treatments, and refined furnishings tailored to your space.
          </p>
        </div>
      </section>

      {/* Services List Grid */}
      <section className="py-24 bg-[#F7F4EE]">
        <div className="max-w-7xl mx-auto px-6 space-y-20">
          {SERVICES.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center bg-white p-8 md:p-12 rounded-lg border border-[#D8D0C4]/60 shadow-sm`}
              >
                {/* Image Container */}
                <div className={`relative aspect-[4/3] rounded-lg overflow-hidden shadow-md ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#171817]/80 backdrop-blur-sm text-white px-3 py-1 rounded text-[10px] uppercase tracking-wider">
                    {service.category}
                  </div>
                </div>

                {/* Content Container */}
                <div className={`space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <span className="text-xs uppercase tracking-[0.25em] text-[#B99A65] font-semibold">
                    Service 0{index + 1}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-serif-editorial text-[#171817]">
                    {service.title}
                  </h2>
                  <p className="text-[#8A8176] text-base leading-relaxed font-light">
                    {service.fullDesc}
                  </p>
                  
                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs uppercase tracking-wider text-[#171817] font-semibold">
                      Key Highlights:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.highlights.map((item, i) => (
                        <div key={i} className="flex items-center space-x-2 text-sm text-[#8A8176]">
                          <CheckCircle2 className="w-4 h-4 text-[#B99A65] shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 flex flex-wrap gap-4">
                    <button
                      onClick={onOpenConsultation}
                      className="bg-[#171817] text-white px-6 py-3 text-xs uppercase tracking-wider font-medium rounded hover:bg-[#B99A65] transition-colors cursor-pointer flex items-center space-x-2"
                    >
                      <span>Enquire About {service.title}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <a
                      href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(`Hello CCA Interior, I would like to enquire about your ${service.title} service.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#25D366] text-white px-6 py-3 text-xs uppercase tracking-wider font-medium rounded hover:opacity-90 transition-opacity flex items-center space-x-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>WhatsApp Enquiry</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Consultation Banner */}
      <section className="py-20 bg-[#171817] text-[#F7F4EE] text-center">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <span className="text-xs uppercase tracking-[0.3em] text-[#B99A65] font-semibold">
            Custom Requirements
          </span>
          <h2 className="text-3xl md:text-4xl font-serif-editorial">
            Have a Unique Space or Special Project?
          </h2>
          <p className="text-[#D8D0C4] text-sm max-w-xl mx-auto font-light">
            We work closely with homeowners, architects, and corporate clients in Jos to deliver custom furnishing and curtain solutions.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="bg-[#B99A65] text-white px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-medium rounded hover:bg-[#a08554] transition-colors cursor-pointer"
            >
              Book a Consultation
            </button>
            <a
              href={BUSINESS_INFO.telUrl}
              className="border border-white/40 text-white px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-medium rounded hover:bg-white hover:text-[#171817] transition-colors flex items-center space-x-2"
            >
              <Phone className="w-4 h-4 text-[#B99A65]" />
              <span>Call {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
