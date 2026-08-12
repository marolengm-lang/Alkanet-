import React, { useState } from 'react';
import { X, Send, CheckCircle2, Upload, File, AlertCircle } from 'lucide-react';
import { SERVICES_LIST } from '../data/companyData';
import { QuoteFormData } from '../types';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  preselectedService = ''
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    serviceRequired: preselectedService || SERVICES_LIST[0].title,
    estimatedQuantity: '1,000 - 5,000 units',
    deadline: 'Within 1-2 weeks',
    location: 'Pretoria / Johannesburg / Gauteng',
    message: '',
    fileName: undefined
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.company.trim()) errs.company = 'Company name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Valid corporate email is required';
    if (!formData.phone.trim() || formData.phone.length < 8) errs.phone = 'Valid phone number is required';
    if (!formData.message.trim()) errs.message = 'Please describe your assembly or packaging project';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, fileName: e.target.files[0].name });
    }
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white dark:bg-[#1B5E20] rounded-2xl shadow-2xl border border-slate-200 dark:border-green-800 w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative text-slate-900 dark:text-white">
        {/* Close Button */}
        <button
          onClick={resetAndClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-green-950 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 bg-[#E8F5E9] dark:bg-green-950 rounded-full flex items-center justify-center mx-auto text-[#1B5E20] dark:text-[#A5D6A7] animate-bounce">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h2 className="text-2xl font-bold font-poppins text-slate-900 dark:text-white">
              Quote Request Submitted Successfully!
            </h2>
            <p className="text-sm text-slate-600 dark:text-[#E8F5E9] max-w-md mx-auto">
              Thank you, <strong className="text-slate-900 dark:text-white">{formData.name}</strong>. Our ALKANET technical estimators are reviewing your specifications for <strong className="text-[#1B5E20] dark:text-[#A5D6A7]">{formData.serviceRequired}</strong>.
            </p>
            <div className="p-4 bg-slate-50 dark:bg-green-950 rounded-xl text-xs text-slate-600 dark:text-[#E8F5E9] space-y-1 text-left max-w-md mx-auto border border-slate-200 dark:border-green-800">
              <div><strong>Company:</strong> {formData.company}</div>
              <div><strong>Quantity:</strong> {formData.estimatedQuantity}</div>
              <div><strong>Expected Turnaround:</strong> {formData.deadline}</div>
              <div><strong>Email Sent To:</strong> {formData.email}</div>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-300">
              Need immediate assistance? Call our sales desk directly at <a href="tel:27718854474" className="text-[#1B5E20] dark:text-[#A5D6A7] font-bold underline">071 885 4474</a>.
            </p>
            <button
              onClick={resetAndClose}
              className="px-6 py-3 bg-[#1B5E20] dark:bg-[#66BB6A] text-white font-bold rounded-lg hover:bg-[#144718] dark:hover:bg-[#57a95b] transition-colors cursor-pointer border border-[#A5D6A7]/30"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="inline-block px-3 py-1 rounded-full bg-[#E8F5E9] dark:bg-green-950 text-[#1B5E20] dark:text-[#A5D6A7] font-semibold text-xs mb-2 border border-[#A5D6A7]/40">
                Fast Response Guarantee (Within 2 Hours)
              </div>
              <h2 className="text-2xl font-extrabold font-poppins text-slate-900 dark:text-white">
                Request a Free Custom Quote
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-[#E8F5E9]">
                Get competitive pricing for hand assembly, contract packaging, kitting, or outsourced labour across South Africa.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Johan van der Merwe"
                    className={`w-full px-3.5 py-2.5 rounded-lg border ${
                      errors.name ? 'border-red-500' : 'border-slate-300 dark:border-green-800'
                    } bg-white dark:bg-green-950 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-[#66BB6A] focus:outline-none`}
                  />
                  {errors.name && <span className="text-[11px] text-red-500 mt-0.5 block">{errors.name}</span>}
                </div>

                {/* Company */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 mb-1">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Apex FMCG Logistics"
                    className={`w-full px-3.5 py-2.5 rounded-lg border ${
                      errors.company ? 'border-red-500' : 'border-slate-300 dark:border-green-800'
                    } bg-white dark:bg-green-950 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-[#66BB6A] focus:outline-none`}
                  />
                  {errors.company && <span className="text-[11px] text-red-500 mt-0.5 block">{errors.company}</span>}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 mb-1">
                    Corporate Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. johan@apexfmcg.co.za"
                    className={`w-full px-3.5 py-2.5 rounded-lg border ${
                      errors.email ? 'border-red-500' : 'border-slate-300 dark:border-green-800'
                    } bg-white dark:bg-green-950 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-[#66BB6A] focus:outline-none`}
                  />
                  {errors.email && <span className="text-[11px] text-red-500 mt-0.5 block">{errors.email}</span>}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 082 123 4567"
                    className={`w-full px-3.5 py-2.5 rounded-lg border ${
                      errors.phone ? 'border-red-500' : 'border-slate-300 dark:border-green-800'
                    } bg-white dark:bg-green-950 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-[#66BB6A] focus:outline-none`}
                  />
                  {errors.phone && <span className="text-[11px] text-red-500 mt-0.5 block">{errors.phone}</span>}
                </div>
              </div>

              {/* Service Required & Estimated Quantity */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 mb-1">
                    Service Required *
                  </label>
                  <select
                    value={formData.serviceRequired}
                    onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-green-800 bg-white dark:bg-green-950 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-[#66BB6A] focus:outline-none"
                  >
                    {SERVICES_LIST.map((srv) => (
                      <option key={srv.id} value={srv.title}>
                        {srv.title}
                      </option>
                    ))}
                    <option value="Custom Assembly Project">Custom Assembly Project</option>
                    <option value="Multiple Combined Services">Multiple Combined Services</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 mb-1">
                    Estimated Quantity
                  </label>
                  <select
                    value={formData.estimatedQuantity}
                    onChange={(e) => setFormData({ ...formData, estimatedQuantity: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-green-800 bg-white dark:bg-green-950 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-[#66BB6A] focus:outline-none"
                  >
                    <option value="500 - 1,000 units">500 - 1,000 units (Small Pilot Batch)</option>
                    <option value="1,000 - 5,000 units">1,000 - 5,000 units (Standard Run)</option>
                    <option value="5,000 - 25,000 units">5,000 - 25,000 units (High Volume)</option>
                    <option value="25,000 - 100,000+ units">25,000 - 100,000+ units (Enterprise)</option>
                    <option value="Ongoing Monthly Contract">Ongoing Monthly Contract</option>
                  </select>
                </div>
              </div>

              {/* Deadline & Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 mb-1">
                    Target Completion / Deadline
                  </label>
                  <select
                    value={formData.deadline}
                    onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-green-800 bg-white dark:bg-green-950 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-[#66BB6A] focus:outline-none"
                  >
                    <option value="URGENT (24-48 Hours)">URGENT (Within 24-48 Hours)</option>
                    <option value="Within 1-2 weeks">Within 1-2 weeks</option>
                    <option value="Within 1 month">Within 1 month</option>
                    <option value="Planning / Tender Stage">Planning / Tender Stage</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 mb-1">
                    Service Location
                  </label>
                  <select
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-green-800 bg-white dark:bg-green-950 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-[#66BB6A] focus:outline-none"
                  >
                    <option value="ALKANET Gauteng Hub (Off-site)">ALKANET Gauteng Hub (Centurion/Pretoria)</option>
                    <option value="On-site at Client Facility (Pretoria)">On-site at Client Facility (Pretoria)</option>
                    <option value="On-site at Client Facility (Johannesburg)">On-site at Client Facility (Johannesburg)</option>
                    <option value="Nationwide South Africa">Nationwide South Africa</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 mb-1">
                  Project Details / Specifications *
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your product components, packaging requirements, dimensions, or labour needs..."
                  className={`w-full px-3.5 py-2.5 rounded-lg border ${
                    errors.message ? 'border-red-500' : 'border-slate-300 dark:border-green-800'
                  } bg-white dark:bg-green-950 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-[#66BB6A] focus:outline-none`}
                />
                {errors.message && <span className="text-[11px] text-red-500 mt-0.5 block">{errors.message}</span>}
              </div>

              {/* File Upload Attachment */}
              <div className="border border-dashed border-slate-300 dark:border-green-700 rounded-lg p-3 text-center bg-slate-50 dark:bg-green-950/60">
                <label className="cursor-pointer flex flex-col items-center justify-center gap-1">
                  <Upload className="w-5 h-5 text-[#1B5E20] dark:text-[#A5D6A7]" />
                  <span className="text-xs font-semibold text-slate-700 dark:text-[#E8F5E9]">
                    {formData.fileName ? (
                      <span className="text-emerald-600 dark:text-[#A5D6A7] flex items-center gap-1">
                        <File className="w-3.5 h-3.5" /> Attached: {formData.fileName}
                      </span>
                    ) : (
                      'Attach Product Spec, Artwork or Bill of Materials (Optional - PDF, PNG, ZIP)'
                    )}
                  </span>
                  <input type="file" onChange={handleFileChange} className="hidden" />
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-xl bg-[#1B5E20] dark:bg-[#66BB6A] hover:bg-[#144718] dark:hover:bg-[#57a95b] text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 border border-[#A5D6A7]/30"
              >
                {isSubmitting ? (
                  <span>Processing Estimate...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Free Quote Request</span>
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
