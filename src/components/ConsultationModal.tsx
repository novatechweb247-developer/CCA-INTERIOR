import React, { useState } from 'react';
import { X, Send, MessageSquare, CheckCircle } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data/content';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: SERVICES[0].title,
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#171817]/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#F7F4EE] text-[#171817] w-full max-w-lg rounded-lg shadow-2xl overflow-hidden border border-[#D8D0C4]">
        {/* Modal Header */}
        <div className="bg-[#171817] text-[#F7F4EE] px-6 py-5 flex items-center justify-between">
          <div>
            <span className="text-[10px] tracking-[0.2em] text-[#B99A65] uppercase font-medium">
              CCA Interior
            </span>
            <h3 className="text-xl font-serif-editorial font-semibold">Request a Consultation</h3>
          </div>
          <button
            onClick={onClose}
            className="text-[#D8D0C4] hover:text-white p-1 rounded transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-8">
          {submitted ? (
            <div className="text-center py-8 space-y-6">
              <div className="w-16 h-16 bg-[#B99A65]/10 text-[#B99A65] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h4 className="text-2xl font-serif-editorial font-semibold">Enquiry Received</h4>
                <p className="text-sm text-[#8A8176]">
                  Thank you for reaching out to CCA Interior. You can also connect directly via WhatsApp for instant response.
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
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="flex-1 bg-[#171817] text-white py-3 px-4 rounded text-xs uppercase tracking-wider font-medium hover:bg-[#B99A65] transition-colors"
                >
                  Close
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
                  className="w-full bg-white border border-[#D8D0C4] rounded px-4 py-3 text-sm focus:outline-none focus:border-[#B99A65]"
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
                    className="w-full bg-white border border-[#D8D0C4] rounded px-4 py-3 text-sm focus:outline-none focus:border-[#B99A65]"
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
                    className="w-full bg-white border border-[#D8D0C4] rounded px-4 py-3 text-sm focus:outline-none focus:border-[#B99A65]"
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
                  className="w-full bg-white border border-[#D8D0C4] rounded px-4 py-3 text-sm focus:outline-none focus:border-[#B99A65]"
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
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your rooms, preferences, or window dimensions..."
                  className="w-full bg-white border border-[#D8D0C4] rounded px-4 py-3 text-sm focus:outline-none focus:border-[#B99A65]"
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
                  <span>Chat on WhatsApp</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
