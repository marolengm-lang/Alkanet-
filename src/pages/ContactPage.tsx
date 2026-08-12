import React, { useState } from 'react';
import { COMPANY_DETAILS, SERVICES_LIST } from '../data/companyData';
import { SeoHead } from '../components/SeoHead';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, CheckCircle2, Building2, Upload } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    serviceRequired: SERVICES_LIST[0].title,
    estimatedQuantity: '1,000 - 5,000 units',
    deadline: 'Within 1-2 weeks',
    message: '',
    fileName: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <>
      <SeoHead
        title="Contact ALKANET HOLDINGS | Pretoria & Johannesburg Hand Assembly"
        description="Contact ALKANET HOLDINGS (PTY) LTD for quotes on hand assembly, contract packaging, kitting, labelling, and outsourced labour in Gauteng. Phone 071 885 4474."
        canonicalUrl="https://www.alkanet.co.za/contact"
      />

      {/* Hero */}
      <section className="bg-[#1B5E20] text-white py-16 sm:py-20 border-b border-[#A5D6A7]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-4">
          <div className="inline-block px-3 py-1 rounded-full bg-[#E8F5E9]/20 text-[#A5D6A7] font-bold text-xs uppercase tracking-wider border border-[#A5D6A7]/30">
            Direct Communications
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-poppins tracking-tight">
            Contact ALKANET HOLDINGS (PTY) LTD
          </h1>
          <p className="text-sm sm:text-base text-[#E8F5E9]/90 max-w-3xl leading-relaxed">
            Our technical estimators and operations teams in Pretoria and Johannesburg are ready to answer your inquiries and provide fast turnaround quotes within 2 hours.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-16 bg-white dark:bg-[#1B5E20]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Contact Form */}
            <div className="lg:col-span-7 bg-slate-50 dark:bg-green-950/80 p-6 sm:p-10 rounded-3xl border border-slate-200 dark:border-green-800 shadow-sm space-y-6">
              <div>
                <h2 className="text-2xl font-bold font-poppins text-slate-900 dark:text-white">
                  Send Us a Direct Message or Quote Request
                </h2>
                <p className="text-xs text-slate-600 dark:text-[#E8F5E9]/90 mt-1">
                  Fill out your assembly parameters below. You can also attach product specification sheets or artwork.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 bg-[#E8F5E9] dark:bg-green-950 rounded-2xl border border-[#A5D6A7]/40 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-[#1B5E20] dark:text-[#A5D6A7] mx-auto" />
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Thank You, {formData.name}!
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-[#E8F5E9]">
                    Your request has been routed to our Gauteng sales desk. An estimator will review your specifications and contact you shortly at <strong>{formData.email}</strong> or <strong>{formData.phone}</strong>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2 bg-[#1B5E20] dark:bg-[#66BB6A] text-white text-xs font-bold rounded-lg cursor-pointer"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sipho Ndlovu"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-green-800 bg-white dark:bg-green-950 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#66BB6A]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 mb-1">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Verve Logistics"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-green-800 bg-white dark:bg-green-950 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#66BB6A]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 mb-1">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. sipho@vervelogistics.co.za"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-green-800 bg-white dark:bg-green-950 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#66BB6A]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 071 885 4474"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-green-800 bg-white dark:bg-green-950 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#66BB6A]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 mb-1">
                        Service Required
                      </label>
                      <select
                        value={formData.serviceRequired}
                        onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-green-800 bg-white dark:bg-green-950 text-xs text-slate-900 dark:text-white focus:outline-none"
                      >
                        {SERVICES_LIST.map((srv) => (
                          <option key={srv.id} value={srv.title}>{srv.title}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 mb-1">
                        Estimated Batch Quantity
                      </label>
                      <select
                        value={formData.estimatedQuantity}
                        onChange={(e) => setFormData({ ...formData, estimatedQuantity: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-green-800 bg-white dark:bg-green-950 text-xs text-slate-900 dark:text-white focus:outline-none"
                      >
                        <option value="500 - 1,000 units">500 - 1,000 units</option>
                        <option value="1,000 - 5,000 units">1,000 - 5,000 units</option>
                        <option value="5,000 - 25,000 units">5,000 - 25,000 units</option>
                        <option value="25,000 - 100,000+ units">25,000 - 100,000+ units</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 mb-1">
                      Project Message / Specifications *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your components, box folding sizes, or labour requirements..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-green-800 bg-white dark:bg-green-950 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#66BB6A]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-[#1B5E20] dark:bg-[#66BB6A] hover:bg-[#144718] dark:hover:bg-[#57a95b] text-white font-bold text-sm rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2 cursor-pointer border border-[#A5D6A7]/30"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Submitting...' : 'Submit Contact Inquiry'}</span>
                  </button>
                </form>
              )}
            </div>

            {/* Right Contact Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 bg-[#1B5E20] text-white rounded-3xl shadow-xl space-y-5 border border-[#A5D6A7]/30">
                <h3 className="text-xl font-bold font-poppins border-b border-[#A5D6A7]/30 pb-3">
                  Direct Contact Info
                </h3>

                <div className="space-y-4 text-xs">
                  <a
                    href={`tel:${COMPANY_DETAILS.phones[0].raw}`}
                    className="flex items-start gap-3 p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    <Phone className="w-5 h-5 text-[#A5D6A7] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-sm">{COMPANY_DETAILS.phones[0].display}</div>
                      <div className="text-[10px] text-[#E8F5E9]">Sales & Operations Desk (WhatsApp Available)</div>
                    </div>
                  </a>

                  <a
                    href={`tel:${COMPANY_DETAILS.phones[1].raw}`}
                    className="flex items-start gap-3 p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    <Phone className="w-5 h-5 text-[#A5D6A7] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-sm">{COMPANY_DETAILS.phones[1].display}</div>
                      <div className="text-[10px] text-[#E8F5E9]">Direct Account Manager</div>
                    </div>
                  </a>

                  <a
                    href={`mailto:${COMPANY_DETAILS.email}`}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    <Mail className="w-5 h-5 text-[#A5D6A7] shrink-0" />
                    <span className="font-bold">{COMPANY_DETAILS.email}</span>
                  </a>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-white/10">
                    <MapPin className="w-5 h-5 text-[#A5D6A7] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold">{COMPANY_DETAILS.address}</div>
                      <div className="text-[10px] text-[#E8F5E9]">Primary Hub: Pretoria / Johannesburg Corridor, Gauteng</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-white/10">
                    <Clock className="w-5 h-5 text-[#A5D6A7] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold">{COMPANY_DETAILS.businessHours.weekdays}</div>
                      <div>{COMPANY_DETAILS.businessHours.saturday}</div>
                    </div>
                  </div>
                </div>

                <a
                  href={`https://wa.me/${COMPANY_DETAILS.whatsapp}?text=Hello%20ALKANET%20HOLDINGS,%20I%20would%20like%20to%20inquire%20about%20your%20hand%20assembly%20and%20packaging%20services.`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 bg-[#66BB6A] hover:bg-[#57a95b] text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer block text-center border border-white/20"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Instant WhatsApp Inquiry (071 885 4474)</span>
                </a>
              </div>

              {/* Google Map Frame Placeholder */}
              <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-green-800 shadow-md bg-slate-100 dark:bg-green-950 p-4 space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-slate-800 dark:text-white">
                  <span>Gauteng Logistics Hub Coverage</span>
                  <span className="text-[#1B5E20] dark:text-[#A5D6A7]">Centurion / Pretoria / Johannesburg</span>
                </div>
                <div className="h-48 rounded-2xl bg-slate-200 dark:bg-green-900/60 flex items-center justify-center text-slate-500 dark:text-[#E8F5E9] text-xs text-center p-4">
                  <div>
                    <MapPin className="w-8 h-8 text-[#1B5E20] dark:text-[#A5D6A7] mx-auto mb-2 animate-bounce" />
                    <strong>Centurion Industrial Corridor, Pretoria / Johannesburg</strong>
                    <p className="text-[11px] mt-1 text-slate-500 dark:text-[#E8F5E9]/80">
                      Coordinates: -25.8603, 28.1894 • Serving all 9 Provinces Nationwide
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
