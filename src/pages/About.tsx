import React from 'react';
import { Sparkles, CheckCircle2, ArrowRight, ShieldCheck, HeartHandshake, Compass } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface AboutProps {
  onOpenConsultation: () => void;
}

export default function About({ onOpenConsultation }: AboutProps) {
  return (
    <div className="pt-20 w-full">
      {/* Page Header */}
      <section className="bg-[#171817] text-[#F7F4EE] py-20 md:py-28 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#B99A65_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-[#B99A65] font-semibold">
            About CCA Interior
          </span>
          <h1 className="text-4xl md:text-6xl font-serif-editorial">
            A THOUGHTFUL APPROACH TO INTERIORS
          </h1>
          <p className="text-[#D8D0C4] text-base md:text-lg max-w-2xl mx-auto font-light">
            Bringing considered decoration, custom window treatments, and refined furnishing to homes and offices in Jos, Plateau State.
          </p>
        </div>
      </section>

      {/* Main Narrative & Editorial Grid */}
      <section className="py-24 bg-[#F7F4EE]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#B99A65] font-semibold">
                Company Introduction
              </span>
              <h2 className="text-3xl md:text-4xl font-serif-editorial text-[#171817] leading-tight">
                Shaping Spaces with Purpose, Warmth, and Precision
              </h2>
              <p className="text-[#8A8176] text-base leading-relaxed font-light">
                CCA Interior (Interiors & Blinds World) is dedicated to transforming residential and commercial environments through exceptional interior decoration and bespoke window finishing. Based at 7/9 Lugard Road in Jos, we believe that every room has a distinct personality waiting to be unlocked.
              </p>
              <p className="text-[#8A8176] text-base leading-relaxed font-light">
                Our approach centers on listening closely to our clients, understanding their aesthetic desires, and providing professional guidance on curtains, blinds, colors, and spatial harmony.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1000"
                alt="CCA Interior showroom style"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Philosophy Pillars */}
      <section className="py-24 bg-white border-t border-[#D8D0C4]/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-[#B99A65] font-semibold">
              Our Principles
            </span>
            <h2 className="text-3xl md:text-4xl font-serif-editorial text-[#171817]">
              Design Approach & Quality Standards
            </h2>
            <p className="text-sm text-[#8A8176]">
              Built on integrity, attentive listening, and uncompromised aesthetic standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#F7F4EE] p-8 rounded-lg border border-[#D8D0C4]/60 space-y-4">
              <div className="w-12 h-12 rounded bg-[#171817] text-[#B99A65] flex items-center justify-center">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif-editorial text-[#171817]">Design Approach</h3>
              <p className="text-sm text-[#8A8176] leading-relaxed">
                We combine architectural awareness with interior warmth. Every color choice, fabric texture, and lighting placement is orchestrated to produce balanced, serene spaces.
              </p>
            </div>

            <div className="bg-[#F7F4EE] p-8 rounded-lg border border-[#D8D0C4]/60 space-y-4">
              <div className="w-12 h-12 rounded bg-[#171817] text-[#B99A65] flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif-editorial text-[#171817]">Attention to Detail</h3>
              <p className="text-sm text-[#8A8176] leading-relaxed">
                From precise curtain pleating and blind calibration to furniture placement and accessory styling, we obsess over the details that elevate a good room into an extraordinary one.
              </p>
            </div>

            <div className="bg-[#F7F4EE] p-8 rounded-lg border border-[#D8D0C4]/60 space-y-4">
              <div className="w-12 h-12 rounded bg-[#171817] text-[#B99A65] flex items-center justify-center">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif-editorial text-[#171817]">Customer Consultation</h3>
              <p className="text-sm text-[#8A8176] leading-relaxed">
                We champion collaborative consultations. Whether you visit us on Lugard Road in Jos or invite us to your site, your vision remains at the heart of our creative process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-20 bg-[#171817] text-[#F7F4EE] text-center">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <span className="text-xs uppercase tracking-[0.3em] text-[#B99A65] font-semibold">
            Partner With Us
          </span>
          <h2 className="text-3xl md:text-4xl font-serif-editorial">
            Ready to Transform Your Space?
          </h2>
          <p className="text-[#D8D0C4] text-sm max-w-xl mx-auto">
            Contact CCA Interior today to discuss your decoration and furnishing requirements with our team in Jos.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenConsultation}
              className="bg-[#B99A65] text-white px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-medium rounded hover:bg-[#a08554] transition-colors cursor-pointer"
            >
              Request a Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
