"use client";

import React from "react";
import { motion } from "framer-motion";
import { Bot, Globe2, Zap, BarChart3, CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionWrapper from "@/components/ui/SectionWrapper";

const features = [
  { 
    name: "Hybrid AI + Human", 
    icon: Bot, 
    description: "Benefit from the raw speed of our ML models seamlessly combined with the highly nuanced cultural understanding of our global human experts." 
  },
  { 
    name: "Multilingual Moderation", 
    icon: Globe2, 
    description: "Multilingual moderation support across global platforms." 
  },
  { 
    name: "Millisecond Monitoring", 
    icon: Zap, 
    description: "Sub-second response times optimized specifically for blocking toxic text in live streams, fast-paced chats, and dynamic content filtering." 
  },
  { 
    name: "Instant Scalability", 
    icon: BarChart3, 
    description: "Scale your moderation capacity up or down instantly via API based on sudden viral traffic spikes, ensuring you never pay for idle time." 
  },
];

export default function WhyChooseSection() {
  return (
    <SectionWrapper id="why-choose-us" bg="white" spacing="major" className="relative border-t border-gray-100 pb-32">
       
      {/* Abstract background shape */}
      <div className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-gray-50 shadow-xl shadow-blue-600/10 ring-1 ring-blue-50 sm:-mr-80 lg:-mr-96" aria-hidden="true" />

      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl mb-16 lg:mb-24">
           <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold text-blue-600 ring-1 ring-inset ring-blue-600/20 mb-6 bg-white">
             The ContentShield Advantage
           </div>
          <h2 className="font-outfit text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl leading-tight">
            Why industry leaders <br className="hidden sm:block"/>choose our platform
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We provide an unparalleled combination of proprietary technology and vetted human expertise to keep your community thriving without sacrificing product speed.
          </p>
        </div>

        <div className="mx-auto max-w-full lg:max-w-none">
          <dl className="grid grid-cols-1 gap-x-12 gap-y-16 lg:grid-cols-2">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="group flex flex-col bg-white p-8 rounded-3xl ring-1 ring-gray-200 shadow-sm hover:shadow-xl hover:ring-blue-300 transition-all duration-300"
              >
                <dt className="flex items-center gap-x-4 text-base font-semibold leading-7 text-gray-900 mb-6">
                  <div className="flex h-14 w-14 flex-none items-center justify-center rounded-2xl bg-blue-50 group-hover:bg-blue-600 transition-colors duration-300">
                    <feature.icon className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <span className="font-outfit text-2xl font-bold tracking-tight">{feature.name}</span>
                </dt>
                <dd className="flex flex-auto flex-col text-base leading-8 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
                <div className="mt-6 flex items-center text-sm font-medium text-blue-600">
                    <CheckCircle2 size={16} className="mr-2" />
                    Included in all plans
                </div>
              </motion.div>
            ))}
          </dl>
        </div>
      </Container>
    </SectionWrapper>
  );
}
