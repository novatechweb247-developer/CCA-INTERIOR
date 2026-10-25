import React, { useState } from 'react';
import { Phone, MapPin, Clock, MessageSquare, Send, CheckCircle, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data/content';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: SERVICES[0].title,
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `Hello CCA Interior, my name is ${formData.fullName}. I am interested in ${formData.service}. ${formData.message}`
    );
    window.open(`${BUSINESS_INFO.whatsappUrl}?text=${text}`, '_blank');
  };

  return (
    <div className="pt-20 w-full">
      {/* Page Header */}
      <section className="bg-[#171817] text-[#F7F4EE] py-20 md:py-28 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#B99A65_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-[#B99A65] font-semibold">
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-6xl font-serif-editorial">
            CONTACT CCA INTERIOR
          </h1>
          <p className="text-[#D8D0C4] text-base md:text-lg max-w-2xl mx-auto font-light">
            Visit our studio in Jos, Plateau State, or reach out directly for expert interior decoration and blind solutions.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-24 bg-[#F7F4EE]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: Contact Info & Quick Actions */}
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-[0.25em] text-[#B99A65] font-semibold">
                  Studio & Information
                </span>
                <h2 className="text-3xl md:text-4xl font-serif-editorial text-[#171817]">
                  {BUSINESS_INFO.name}
                </h2>
                <p className="text-[#8A8176] text-sm leading-relaxed">
                  We welcome inquiries for residential and commercial interior decoration, custom curtains, motorized blinds, and furnishings in Jos and surrounding regions.
                </p>
              </div>

              <div className="space-y-6 pt-2">
                <div className="flex items-start space-x-4 bg-white p-6 rounded-lg border border-[#D8D0C4]/60 shadow-sm">
                  <div className="w-12 h-12 rounded bg-[#171817] text-[#B99A65] flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-semibold text-[#171817]">Office & Showroom Address</h3>
                    <p className="text-sm text-[#8A8176]">{BUSINESS_INFO.address}</p>
                    <a
                      href={BUSINESS_INFO.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 text-xs text-[#B99A65] hover:underline pt-1 font-medium"
                    >
                      <span>Get Directions on Google Maps</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-white p-6 rounded-lg border border-[#D8D0C4]/60 shadow-sm">
                  <div className="w-12 h-12 rounded bg-[#171817] text-[#B99A65] flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-semibold text-[#171817]">Phone & WhatsApp</h3>
                    <p className="text-sm text-[#8A8176]">{BUSINESS_INFO.phoneFormatted}</p>
                    <div className="pt-2 flex gap-3">
                      <a
                        href={BUSINESS_INFO.telUrl}
                        className="inline-flex items-center space-x-1 text-xs bg-[#171817] text-white px-3 py-1.5 rounded hover:bg-[#B99A65] transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>Call Now</span>
                      </a>
                      <a
                        href={BUSINESS_INFO.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1 text-xs bg-[#25D366] text-white px-3 py-1.5 rounded hover:opacity-90 transition-opacity"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-white p-6 rounded-lg border border-[#D8D0C4]/60 shadow-sm">
                  <div className="w-12 h-12 rounded bg-[#171817] text-[#B99A65] flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-semibold text-[#171817]">Business Hours</h3>
                    <p className="text-sm text-[#8A8176]">{BUSINESS_INFO.hours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Consultation & Enquiry Form */}
            <div className="bg-white p-8 md:p-10 rounded-lg shadow-md border border-[#D8D0C4]">
              <div className="space-y-2 mb-6">
                <span className="text-xs uppercase tracking-[0.2em] text-[#B99A65] font-semibold">
                  Enquiry Form
                </span>
                <h3 className="text-2xl font-serif-editorial text-[#171817]">
                  Request a Consultation
                </h3>
                <p className="text-xs text-[#8A8176]">
                  Fill out the form below or connect instantly via WhatsApp.
                </p>
              </div>

              {submitted ? (
                <div className="text-center py-12 space-y-6">
                  <div className="w-16 h-16 bg-[#B99A65]/10 text-[#B99A65] rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-2xl font-serif-editorial font-semibold text-[#171817]">Enquiry Received</h4>
                    <p className="text-sm text-[#8A8176]">
                      Thank you for contacting CCA Interior. Our team in Jos will review your request and get back to you promptly.
                    </p>
                  </div>
                  <div className="pt-4 flex flex-col sm:flex-row gap-3">
                    <button
                      type="button"
                      onClick={handleWhatsAppRedirect}
                      className="flex-1 bg-[#25D366] text-white py-3 px-4 rounded text-xs uppercase tracking-wider font-medium flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Open in WhatsApp</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="flex-1 bg-[#171817] text-white py-3 px-4 rounded text-xs uppercase tracking-wider font-medium hover:bg-[#B99A65] transition-colors"
                    >
                      Send Another
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#8A8176] font-medium mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Enter your full name"
                      className="w-full bg-[#F7F4EE] border border-[#D8D0C4] rounded px-4 py-3 text-sm focus:outline-none focus:border-[#B99A65]"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#8A8176] font-medium mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="0803..."
                        className="w-full bg-[#F7F4EE] border border-[#D8D0C4] rounded px-4 py-3 text-sm focus:outline-none focus:border-[#B99A65]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#8A8176] font-medium mb-1">
                        Email (Optional)
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                        className="w-full bg-[#F7F4EE] border border-[#D8D0C4] rounded px-4 py-3 text-sm focus:outline-none focus:border-[#B99A65]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#8A8176] font-medium mb-1">
                      Service of Interest *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-[#F7F4EE] border border-[#D8D0C4] rounded px-4 py-3 text-sm focus:outline-none focus:border-[#B99A65]"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="General Interior Consultation">General Interior Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#8A8176] font-medium mb-1">
                      Tell us about your space *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your rooms, windows, or decoration preferences..."
                      className="w-full bg-[#F7F4EE] border border-[#D8D0C4] rounded px-4 py-3 text-sm focus:outline-none focus:border-[#B99A65]"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="flex-1 bg-[#171817] text-white py-3 px-4 rounded text-xs uppercase tracking-wider font-medium flex items-center justify-center space-x-2 hover:bg-[#B99A65] transition-colors cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Request</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleWhatsAppRedirect}
                      className="flex-1 bg-[#25D366] text-white py-3 px-4 rounded text-xs uppercase tracking-wider font-medium flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>WhatsApp Us</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
