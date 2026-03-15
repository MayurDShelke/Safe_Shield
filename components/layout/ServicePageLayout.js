"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import InquiryForm from "@/components/forms/InquiryForm";

export default function ServicePageLayout({
  title,
  subtitle,
  overview,
  features,
  workflow,
  serviceType,
  heroGradient = "from-blue-50 to-indigo-50"
}) {
  return (
    <div className="pt-24">
      {/* 1. HERO SECTION */}
      <SectionWrapper spacing="none" className={`relative py-20 lg:py-32 bg-gradient-to-b ${heroGradient} border-b border-gray-100 overflow-hidden`}>
         <Container className="relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
               <h1 className="font-outfit text-4xl sm:text-6xl font-bold tracking-tight text-gray-900 mb-6">
                 {title}
               </h1>
               <p className="text-xl leading-8 text-gray-600 mb-10">
                 {subtitle}
               </p>
               <div className="flex justify-center flex-wrap gap-4">
                  <a href="#inquiry-form">
                     <Button size="lg" className="shadow-lg">Request Consultation</Button>
                  </a>
               </div>
            </motion.div>
         </Container>
      </SectionWrapper>

      {/* 2. OVERVIEW SECTION */}
      <SectionWrapper bg="white" spacing="major">
         <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               <div>
                  <h2 className="text-3xl font-outfit font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                     Comprehensive Protection
                  </h2>
                  <div className="prose prose-lg text-gray-600">
                     <p>{overview}</p>
                  </div>
                  <div className="mt-8">
                     <a href="#inquiry-form" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                        Learn more about our methodology <ArrowRight className="ml-2 w-4 h-4" />
                     </a>
                  </div>
               </div>
               <div className="rounded-3xl bg-gray-50 border border-gray-100 p-8 sm:p-12 relative overflow-hidden">
                  <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 opacity-10 pointer-events-none">
                     <svg width="404" height="384" fill="none" viewBox="0 0 404 384"><defs><pattern id="d3eb07ae-5182-43e6-857d-35c643af9034" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><rect x="0" y="0" width="4" height="4" fill="currentColor"></rect></pattern></defs><rect width="404" height="384" fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"></rect></svg>
                  </div>
                  <blockquote className="relative text-xl font-medium leading-8 text-gray-900">
                     <p>
                        "ContentShield's {serviceType.toLowerCase()} infrastructure scaled effortlessly with our user base, completely eliminating harmful incidents within the first week of deployment."
                     </p>
                  </blockquote>
                  <div className="mt-6 flex items-center gap-x-4">
                     <div className="h-10 w-10 rounded-full bg-gray-200" />
                     <div>
                        <div className="font-semibold text-gray-900">Sarah Jenkins</div>
                        <div className="text-sm text-gray-500">VP of Trust & Safety</div>
                     </div>
                  </div>
               </div>
            </div>
         </Container>
      </SectionWrapper>

      {/* 3. KEY FEATURES SECTION */}
      <SectionWrapper bg="gray" spacing="major" className="border-y border-gray-100">
         <Container>
            <div className="mb-16 text-center max-w-2xl mx-auto">
               <h2 className="font-outfit text-4xl font-bold tracking-tight text-gray-900">
                 Core Capabilities
               </h2>
               <p className="mt-4 text-lg text-gray-600">
                 Everything included when you integrate our {serviceType} solutions.
               </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
               {features.map((feature, idx) => (
                  <motion.div 
                     key={idx}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex gap-6"
                  >
                     <div className="shrink-0 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50">
                        <feature.icon className="h-7 w-7 text-blue-600" />
                     </div>
                     <div>
                        <h3 className="font-outfit text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                     </div>
                  </motion.div>
               ))}
            </div>

            <div className="mt-16 text-center">
               <a href="#inquiry-form">
                  <Button variant="secondary" size="lg">Get Started with these features</Button>
               </a>
            </div>
         </Container>
      </SectionWrapper>

      {/* 4. HOW IT WORKS */}
      <SectionWrapper bg="white" spacing="major">
         <Container>
            <div className="mb-16 max-w-2xl">
               <h2 className="font-outfit text-4xl font-bold tracking-tight text-gray-900">
                 Implementation Workflow
               </h2>
               <p className="mt-4 text-lg text-gray-600">
                 Our proven {workflow.length}-step process to architecting your custom {serviceType.toLowerCase()} pipeline.
               </p>
            </div>

            <div className="space-y-8">
               {workflow.map((step, idx) => (
                  <motion.div 
                     key={idx}
                     initial={{ opacity: 0, x: -20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     className="flex items-start gap-6 relative"
                  >
                     {/* Vertical Line */}
                     {idx !== workflow.length - 1 && (
                        <div className="absolute left-6 top-14 bottom-[-32px] w-0.5 bg-gray-100" />
                     )}
                     
                     <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white font-bold shadow-md ring-4 ring-white">
                        {idx + 1}
                     </div>
                     <div className="pt-2 pb-6">
                        <h3 className="font-outfit text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                        <p className="text-gray-600 max-w-2xl">{step.desc}</p>
                     </div>
                  </motion.div>
               ))}
            </div>
         </Container>
      </SectionWrapper>

      {/* 5. INQUIRY FORM */}
      <InquiryForm prefilledService={serviceType} />
      
    </div>
  );
}
