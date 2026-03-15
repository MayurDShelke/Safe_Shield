"use client";

import React from "react";
import { Building2, Mail, Globe, Clock, ShieldCheck, Users } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionWrapper from "@/components/ui/SectionWrapper";
import InquiryForm from "@/components/forms/InquiryForm";

export default function ContactSection() {
  return (
    <SectionWrapper id="contact" bg="gray" spacing="major" className="relative overflow-hidden border-t border-gray-100">
      
      {/* Background patterns */}
      <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-50 ring-1 ring-gray-900/5 lg:w-1/2">
         <div className="absolute -top-80 left-[calc(50%-20rem)] transform-gpu blur-3xl sm:-top-80 sm:left-[calc(50%-30rem)]" aria-hidden="true">
            <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
         </div>
      </div>

      <Container>
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-16 lg:gap-y-0">
            
            {/* Left Column - Company Info */}
            <div className="flex flex-col">
               <h2 className="font-outfit text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                 Let's Secure Your Digital Platform
               </h2>
               <p className="text-lg leading-8 text-gray-600 mb-10">
                 Get in touch with our team to architect a robust, AI-driven content moderation solution tailored to your ecosystem.
               </p>

               <dl className="space-y-6 text-base leading-7 text-gray-600">
                  <div className="flex gap-x-4 items-center">
                     <dt className="flex-none">
                        <span className="sr-only">Location</span>
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600 ring-1 ring-blue-100">
                           <Building2 className="h-5 w-5" aria-hidden="true" />
                        </div>
                     </dt>
                     <dd>
                        <span className="font-semibold text-gray-900 block">Location</span>
                        Mumbai, India
                     </dd>
                  </div>
                  <div className="flex gap-x-4 items-center">
                     <dt className="flex-none">
                        <span className="sr-only">Email</span>
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-50 text-purple-600 ring-1 ring-purple-100">
                           <Mail className="h-5 w-5" aria-hidden="true" />
                        </div>
                     </dt>
                     <dd>
                         <span className="font-semibold text-gray-900 block">Email</span>
                         <a className="hover:text-blue-600 transition-colors" href="mailto:abc@safeshield.com">abc@safeshield.com</a>
                     </dd>
                  </div>
                  <div className="flex gap-x-4 items-center">
                     <dt className="flex-none">
                        <span className="sr-only">Website</span>
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-50 text-green-600 ring-1 ring-green-100">
                           <Globe className="h-5 w-5" aria-hidden="true" />
                        </div>
                     </dt>
                     <dd>
                         <span className="font-semibold text-gray-900 block">Website</span>
                         <a className="hover:text-blue-600 transition-colors" href="https://safeshield.com" target="_blank" rel="noopener noreferrer">safeshield.com</a>
                     </dd>
                  </div>
               </dl>
            </div>

            {/* Center Column - Support Information */}
            <div className="flex flex-col lg:px-8 lg:border-l border-gray-200 lg:border-r">
               <h3 className="font-outfit text-2xl font-bold tracking-tight text-gray-900 mb-6 lg:mt-0 mt-8">
                 Ready to Get Started?
               </h3>
               <p className="text-base leading-7 text-gray-600 mb-10">
                 Submit your requirements using our inquiry form, and dedicated specialists will prepare a custom proposal.
               </p>
               
               <div className="space-y-8">
                 <div className="bg-white rounded-xl p-6 shadow-sm ring-1 ring-gray-100">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="flex-none rounded-full bg-blue-100 p-2 text-blue-600">
                        <Clock className="h-5 w-5" />
                      </div>
                      <h4 className="font-semibold text-gray-900">Response Time</h4>
                    </div>
                    <p className="text-gray-600 text-sm pl-11">Within 24 hours</p>
                 </div>

                 <div className="bg-white rounded-xl p-6 shadow-sm ring-1 ring-gray-100">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="flex-none rounded-full bg-indigo-100 p-2 text-indigo-600">
                        <ShieldCheck className="h-5 w-5" />
                      </div>
                      <h4 className="font-semibold text-gray-900">Moderation Coverage</h4>
                    </div>
                    <p className="text-gray-600 text-sm pl-11">24/7 continuous monitoring</p>
                 </div>

                 <div className="bg-white rounded-xl p-6 shadow-sm ring-1 ring-gray-100">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="flex-none rounded-full bg-teal-100 p-2 text-teal-600">
                        <Users className="h-5 w-5" />
                      </div>
                      <h4 className="font-semibold text-gray-900">Dedicated Support</h4>
                    </div>
                    <p className="text-gray-600 text-sm pl-11">Global moderation teams</p>
                 </div>
               </div>
            </div>

            {/* Right Form Card */}
            <div className="relative z-10 w-full h-full lg:col-span-1 mt-8 lg:mt-0">
               <InquiryForm />
            </div>
         </div>
      </Container>
    </SectionWrapper>
  );
}
