import React, { useState } from 'react';
import { X, ZoomIn, MessageSquare } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem, BUSINESS_INFO } from '../data/content';

interface GalleryProps {
  onOpenConsultation: () => void;
}

export default function Gallery({ onOpenConsultation }: GalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Interiors', 'Curtains & Blinds', 'Furnishing', 'Exterior Spaces'];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <div className="pt-20 w-full">
      {/* Page Header */}
      <section className="bg-[#171817] text-[#F7F4EE] py-20 md:py-28 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#B99A65_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-[#B99A65] font-semibold">
            Visual Portfolio
          </span>
          <h1 className="text-4xl md:text-6xl font-serif-editorial">
            INTERIORS & BLINDS GALLERY
          </h1>
          <p className="text-[#D8D0C4] text-base md:text-lg max-w-2xl mx-auto font-light">
            Explore curated inspirations of sophisticated spaces, custom drapery, window treatments, and refined furnishings.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-[#F7F4EE]">
        <div className="max-w-7xl mx-auto px-6">
          {/* Category Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded text-xs uppercase tracking-wider font-medium transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#171817] text-white shadow-sm'
                    : 'bg-white text-[#8A8176] hover:text-[#171817] border border-[#D8D0C4]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveImage(item)}
                className="group relative bg-white rounded-lg overflow-hidden shadow-sm border border-[#D8D0C4]/60 cursor-pointer transition-all duration-300 hover:shadow-xl"
              >
                <div className="aspect-[4/3] overflow-hidden relative bg-[#D8D0C4]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-[#171817]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/90 text-[#171817] flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                      <ZoomIn className="w-5 h-5" />
                    </div>
                  </div>
                  <span className="absolute top-4 left-4 bg-[#171817]/80 backdrop-blur-sm text-white px-3 py-1 rounded text-[10px] uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="text-xl font-serif-editorial text-[#171817] group-hover:text-[#B99A65] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#8A8176] line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-[#171817]/90 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="bg-[#F7F4EE] max-w-4xl w-full rounded-lg overflow-hidden shadow-2xl relative border border-[#D8D0C4]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 z-10 bg-[#171817] text-white p-2 rounded-full hover:bg-[#B99A65] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="aspect-[4/3] md:aspect-auto bg-black relative">
                <img
                  src={activeImage.image}
                  alt={activeImage.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <span className="text-xs uppercase tracking-[0.2em] text-[#B99A65] font-semibold">
                    {activeImage.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-serif-editorial text-[#171817]">
                    {activeImage.title}
                  </h3>
                  <p className="text-sm text-[#8A8176] leading-relaxed">
                    {activeImage.description}
                  </p>
                  <p className="text-xs text-[#8A8176]/80 italic pt-2">
                    Illustrative project concept by CCA Interior, Jos.
                  </p>
                </div>

                <div className="space-y-3 pt-6 border-t border-[#D8D0C4]">
                  <button
                    onClick={() => {
                      setActiveImage(null);
                      onOpenConsultation();
                    }}
                    className="w-full bg-[#171817] text-white py-3 px-4 rounded text-xs uppercase tracking-wider font-medium hover:bg-[#B99A65] transition-colors cursor-pointer"
                  >
                    Enquire About Similar Style
                  </button>
                  <a
                    href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(`Hello CCA Interior, I like the gallery style: "${activeImage.title}" (${activeImage.category}).`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#25D366] text-white py-3 px-4 rounded text-xs uppercase tracking-wider font-medium flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Inquire via WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="py-20 bg-[#171817] text-[#F7F4EE] text-center">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <span className="text-xs uppercase tracking-[0.3em] text-[#B99A65] font-semibold">
            Custom Design
          </span>
          <h2 className="text-3xl md:text-4xl font-serif-editorial">
            Inspired by What You See?
          </h2>
          <p className="text-[#D8D0C4] text-sm max-w-xl mx-auto font-light">
            Contact CCA Interior on Lugard Road, Jos, to discuss how we can adapt these exquisite styles to your own space.
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
