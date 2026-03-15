"use client";

import React from "react";
import { motion } from "framer-motion";
import { ClipboardList, LayoutTemplate, Bot, Activity, LineChart } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionWrapper from "@/components/ui/SectionWrapper";

const steps = [
  { id: "01", name: "Analysis", icon: ClipboardList, description: "We analyze platform needs." },
  { id: "02", name: "Policy", icon: LayoutTemplate, description: "Custom guidelines drafted." },
  { id: "03", name: "Setup", icon: Bot, description: "AI & Human teams assigned." },
  { id: "04", name: "Monitor", icon: Activity, description: "24/7 continuous scanning." },
  { id: "05", name: "Insights", icon: LineChart, description: "Reporting and analytics." },
];

export default function HowItWorksSection() {
  return (
    <SectionWrapper id="how-it-works" bg="white" spacing="major" className="bg-gray-50/50 border-t border-gray-100">
      <Container>
        <div className="mx-auto max-w-3xl text-center mb-20 lg:mb-28">
           <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold text-blue-600 ring-1 ring-inset ring-blue-600/20 mb-6 bg-white shadow-sm">
             Simple Integration
           </div>
          <h2 className="font-outfit text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Streamlined Deployment
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            A frictionless, five-step onboarding process designed to get your platform actively protected in days, not months.
          </p>
        </div>

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          
          {/* Connecting Line Desktop */}
          <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-[2px] bg-gray-200" aria-hidden="true">
             <motion.div 
               initial={{ width: 0 }}
               whileInView={{ width: "100%" }}
               transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
               viewport={{ once: true, margin: "-100px" }}
               className="h-full bg-blue-600 origin-left"
             />
          </div>
          
          {/* Connecting Line Mobile/Tablet */}
          <div className="lg:hidden absolute top-[5%] bottom-[5%] left-[44px] w-[2px] bg-gray-200" aria-hidden="true">
            <motion.div 
               initial={{ height: 0 }}
               whileInView={{ height: "100%" }}
               transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
               viewport={{ once: true }}
               className="w-full bg-blue-600 origin-top"
             />
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-6 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8, scale: 1.02 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                   y: { type: "spring", stiffness: 300, damping: 20 },
                   opacity: { duration: 0.5, delay: index * 0.15 },
                   scale: { duration: 0.2 }
                }}
                className="relative flex lg:flex-col items-center lg:text-center group bg-white lg:bg-transparent p-4 lg:p-0 rounded-2xl lg:rounded-none shadow-sm lg:shadow-none ring-1 lg:ring-0 ring-gray-100 hover:shadow-md lg:hover:shadow-none transition-all cursor-default"
              >
                
                {/* Icon Circle */}
                <div className="shrink-0 relative flex h-24 w-24 items-center justify-center rounded-full bg-white ring-8 ring-gray-50 border border-gray-100 shadow-sm transition-all duration-300 group-hover:border-blue-500 group-hover:shadow-blue-500/20 group-hover:shadow-xl mr-6 lg:mr-0 z-10">
                  <step.icon className="h-8 w-8 text-blue-600 transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
                  
                  {/* Step Number Badge */}
                  <div className="absolute top-0 right-0 lg:-top-2 lg:-right-2 h-7 w-7 rounded-full bg-gray-900 flex items-center justify-center z-20 shadow-sm border-2 border-white transition-colors duration-300 group-hover:bg-blue-600">
                    <span className="text-[10px] font-bold text-white tracking-wider">{step.id}</span>
                  </div>
                </div>
                
                <div className="lg:mt-8 flex-col flex justify-center h-full">
                   <h3 className="font-outfit text-xl font-bold leading-7 text-gray-900 tracking-tight transition-colors duration-300 group-hover:text-blue-600">
                     {step.name}
                   </h3>
                   <p className="mt-2 text-sm leading-6 text-gray-500 max-w-[200px] lg:mx-auto">
                     {step.description}
                   </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
