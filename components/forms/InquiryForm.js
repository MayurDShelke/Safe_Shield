"use client";

import React, { useState } from "react";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import Button from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";

export default function InquiryForm({ prefilledService = "" }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission to abc@safeshield.com
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      e.target.reset();
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white p-8 sm:p-10 rounded-3xl shadow-2xl shadow-blue-900/10 ring-1 ring-gray-100 h-full flex flex-col justify-center"
    >
       <h3 className="font-outfit text-2xl font-bold text-gray-900 mb-2">Request Service Integration</h3>
       <p className="text-sm text-gray-500 mb-8">Fill out the details below and we'll reply within 24 hours.</p>
       
       <AnimatePresence mode="wait">
        {isSubmitted ? (
          <motion.div 
             key="success"
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             exit={{ opacity: 0, scale: 0.95 }}
             className="flex flex-col items-center justify-center py-10 text-center h-full"
          >
             <div className="h-16 w-16 mb-6 rounded-full bg-green-100 flex items-center justify-center ring-4 ring-green-50">
                <CheckCircle className="h-8 w-8 text-green-600" />
             </div>
             <h4 className="text-xl font-bold text-gray-900 mb-2">Request Sent Successfully!</h4>
             <p className="text-gray-600 text-sm max-w-[250px] mb-8">
                Thank you. We have received your inquiry and our team will get back to you shortly.
             </p>
             <Button onClick={() => setIsSubmitted(false)} variant="outline" className="w-full sm:w-auto rounded-full">
                Send Another Inquiry
             </Button>
          </motion.div>
        ) : (
          <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onSubmit={handleSubmit} className="space-y-5 flex-grow">
            <div className="space-y-5">
              
              <div>
                <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900 mb-1.5 pl-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  autoComplete="name"
                  className="block w-full rounded-2xl border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 bg-gray-50/50 transition-all duration-200 hover:bg-gray-50 focus:bg-white focus:shadow-md"
                  placeholder="Jane Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900 mb-1.5 pl-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  autoComplete="email"
                   className="block w-full rounded-2xl border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 bg-gray-50/50 transition-all duration-200 hover:bg-gray-50 focus:bg-white focus:shadow-md"
                   placeholder="jane@company.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900 mb-1.5 pl-1">
                  Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  required
                  autoComplete="organization"
                   className="block w-full rounded-2xl border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 bg-gray-50/50 transition-all duration-200 hover:bg-gray-50 focus:bg-white focus:shadow-md"
                   placeholder="Acme Corp"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-semibold leading-6 text-gray-900 mb-1.5 pl-1">
                  Service Required
                </label>
                <select
                  id="service"
                  name="service"
                  disabled={!!prefilledService}
                   className="block w-full rounded-2xl border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 bg-gray-50/50 transition-all duration-200 hover:bg-gray-50 focus:bg-white cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed disabled:bg-gray-100 focus:shadow-md appearance-none"
                  defaultValue={prefilledService || "Content Moderation"}
                >
                  <option value="Content Moderation">Content Moderation</option>
                  <option value="Data Validation">Data Validation</option>
                  <option value="Video KYC">Video KYC</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900 mb-1.5 pl-1">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                   className="block w-full rounded-2xl border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 bg-gray-50/50 transition-all duration-200 hover:bg-gray-50 focus:bg-white resize-none focus:shadow-md"
                  placeholder="Tell us about your requirements..."
                />
              </div>

            </div>
            <div className="pt-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full text-base h-12 shadow-lg shadow-blue-600/20 rounded-xl transition-all duration-300 hover:shadow-blue-600/40 hover:-translate-y-0.5 active:translate-y-0 group relative overflow-hidden"
              >
                <span className={`flex items-center justify-center transition-all duration-300 ${isSubmitting ? 'opacity-0 transform -translate-y-4' : 'opacity-100 transform translate-y-0'}`}>
                   Submit Inquiry
                   <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
                
                {isSubmitting && (
                   <span className="absolute inset-0 flex items-center justify-center">
                      <Loader2 className="h-5 w-5 animate-spin" />
                      <span className="ml-2 font-medium">Submitting...</span>
                   </span>
                )}
              </Button>
            </div>
          </motion.form>
       )}
    </AnimatePresence>
  </motion.div>
  );
}
