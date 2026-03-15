"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";

export default function IndustryPageLayout({
  title,
  subtitle,
  challenges,
  solutions,
  contentTypes,
  workflow,
  industryName,
  heroGradient = "from-blue-50 to-indigo-50"
}) {
  return (
    <div className="pt-24">
      {/* 1. HERO SECTION */}
      <SectionWrapper spacing="none" className={`relative py-20 lg:py-32 bg-gradient-to-b ${heroGradient} border-b border-gray-100 overflow-hidden`}>
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
         <Container className="relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
               <h1 className="font-outfit text-4xl sm:text-6xl font-bold tracking-tight text-gray-900 mb-6">
                 {title}
               </h1>
               <p className="text-xl leading-8 text-gray-600 mb-10 max-w-2xl mx-auto">
                 {subtitle}
               </p>
               <div className="flex justify-center flex-wrap gap-4">
                  <a href="/#contact">
                     <Button size="lg" className="shadow-lg">Request Consultation</Button>
                  </a>
               </div>
            </motion.div>
         </Container>
      </SectionWrapper>

      {/* 2. INDUSTRY CHALLENGES */}
      <SectionWrapper bg="white" spacing="major">
         <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               <div>
                  <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold text-rose-600 ring-1 ring-inset ring-rose-600/20 mb-6 bg-rose-50/50">
                    The Challenge
                  </div>
                  <h2 className="text-3xl font-outfit font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                     Scaling safety in {industryName.toLowerCase()}
                  </h2>
                  <div className="prose prose-lg text-gray-600 mb-8">
                     <p>Maintaining positive community experiences is difficult when dealing with massive volumes of user-generated content. Without proper moderation, platforms face serious risks:</p>
                  </div>
                  <ul className="space-y-4">
                     {challenges.map((challenge, i) => (
                        <li key={i} className="flex items-start">
                           <div className="shrink-0 h-6 w-6 rounded-full bg-rose-100 flex items-center justify-center mt-0.5 mr-3">
                              <span className="w-2 h-2 rounded-full bg-rose-600"></span>
                           </div>
                           <span className="text-gray-700">{challenge}</span>
                        </li>
                     ))}
                  </ul>
               </div>
               
               {/* 3. HOW CONTENTSHIELD HELPS */}
               <div className="bg-gray-50 rounded-3xl p-8 sm:p-10 border border-gray-100 relative overflow-hidden">
                  <div className="absolute right-0 top-0 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-50 -translate-y-10 translate-x-10 pointer-events-none"></div>
                  <h3 className="font-outfit text-2xl font-bold text-gray-900 mb-6">How ContentShield Helps</h3>
                  <div className="space-y-6 relative z-10">
                     {solutions.map((solution, i) => (
                        <motion.div 
                           key={i}
                           initial={{ opacity: 0, x: 20 }}
                           whileInView={{ opacity: 1, x: 0 }}
                           viewport={{ once: true }}
                           transition={{ delay: i * 0.1 }}
                           className="bg-white p-5 rounded-2xl shadow-sm ring-1 ring-gray-900/5 flex items-start gap-4 hover:shadow-md transition-shadow"
                        >
                           <div className="shrink-0 bg-blue-50 p-2 rounded-lg text-blue-600">
                              <solution.icon className="h-6 w-6" />
                           </div>
                           <div>
                              <h4 className="font-semibold text-gray-900">{solution.title}</h4>
                              <p className="text-sm text-gray-600 mt-1">{solution.desc}</p>
                           </div>
                        </motion.div>
                     ))}
                  </div>
               </div>
            </div>
         </Container>
      </SectionWrapper>

      {/* 4. MODERATION TYPES */}
      <SectionWrapper bg="gray" spacing="major" className="border-y border-gray-100">
         <Container>
            <div className="text-center max-w-2xl mx-auto mb-16">
               <h2 className="font-outfit text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                 Omnichannel {industryName} Protection
               </h2>
               <p className="mt-4 text-lg text-gray-600">
                 We deploy hybrid moderation across all content vectors your users generate.
               </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
               {contentTypes.map((type, idx) => (
                  <motion.div 
                     key={idx}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: idx * 0.05 }}
                     className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center group hover:border-blue-300 transition-colors"
                  >
                     <div className="h-12 w-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 text-blue-600 group-hover:scale-110 transition-transform">
                        <type.icon className="h-6 w-6" />
                     </div>
                     <h3 className="font-semibold text-gray-900">{type.name}</h3>
                  </motion.div>
               ))}
            </div>
         </Container>
      </SectionWrapper>

      {/* 5. WORKFLOW PROCESS */}
      <SectionWrapper bg="white" spacing="major">
         <Container>
            <div className="mb-16 text-center max-w-3xl mx-auto">
               <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold text-blue-600 ring-1 ring-inset ring-blue-600/20 mb-6 bg-blue-50">
                 Implementation
               </div>
               <h2 className="font-outfit text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                 Rapid integration process
               </h2>
            </div>

            <div className="relative">
               {/* Mobile line */}
               <div className="md:hidden absolute left-6 top-8 bottom-8 w-0.5 bg-gray-200"></div>
               {/* Desktop line */}
               <div className="hidden md:block absolute top-[45px] left-[10%] right-[10%] h-0.5 bg-gray-200"></div>

               <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-6 relative z-10">
                  {workflow.map((step, idx) => (
                     <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="relative flex md:flex-col items-start md:items-center md:text-center group"
                     >
                        <div className="shrink-0 flex h-14 w-14 items-center justify-center rounded-full bg-white font-bold text-blue-600 ring-4 ring-gray-100 shadow-sm border-2 border-white group-hover:border-blue-600 transition-colors mr-6 md:mr-0 z-10">
                           {idx + 1}
                        </div>
                        <div className="md:mt-6">
                           <h3 className="font-outfit text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                           <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                        </div>
                     </motion.div>
                  ))}
               </div>
            </div>
         </Container>
      </SectionWrapper>

      {/* 6. LARGE CTA SECTION */}
      <SectionWrapper spacing="major" className="bg-gray-900 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[400px] bg-blue-600/30 blur-[120px] rounded-full pointer-events-none"></div>
         
         <Container className="relative z-10 text-center">
            <h2 className="font-outfit text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6">
              Protect Your {industryName} Today
            </h2>
            <p className="text-xl leading-8 text-gray-300 mb-10 max-w-2xl mx-auto">
              Join leading brands in utilizing our hybrid moderation infrastructure. Let's discuss your specific volume and latency requirements.
            </p>
            <a href="/#contact">
               <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 px-8 text-lg h-14">
                  Book Consultation <ArrowRight className="ml-2 h-5 w-5" />
               </Button>
            </a>
         </Container>
      </SectionWrapper>
    </div>
  );
}
