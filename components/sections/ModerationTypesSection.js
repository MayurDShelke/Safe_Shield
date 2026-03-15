"use client";

import React from "react";
import { motion } from "framer-motion";
import { Video, Image as ImageIcon, Radio, MessageSquare, Megaphone, MonitorPlay } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionWrapper from "@/components/ui/SectionWrapper";

const contentTypes = [
  { name: "Videos", icon: Video },
  { name: "Images", icon: ImageIcon },
  { name: "Live Streams", icon: Radio },
  { name: "Comments", icon: MessageSquare },
  { name: "Advertisements", icon: Megaphone },
  { name: "OTT Content", icon: MonitorPlay },
];

export default function ModerationTypesSection() {
  return (
    <SectionWrapper id="content-types" bg="white" spacing="major" className="border-t border-gray-100/50 relative overflow-hidden">
      
      {/* Decorative Blur blob */}
      <div className="absolute right-0 bottom-0 translate-x-1/3 translate-y-1/3 blur-3xl opacity-20 pointer-events-none">
        <div className="w-96 h-96 bg-blue-400 rounded-full"></div>
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="max-w-xl">
             <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold text-blue-600 ring-1 ring-inset ring-blue-600/20 mb-6 bg-blue-50/50">
               Omnichannel Protection
             </div>
            <h2 className="font-outfit text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl leading-tight">
              Any Format, <br className="hidden sm:block"/> <span className="text-gray-400">Anywhere</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              No matter what form your user-generated content takes, our hybrid moderation system adapts precisely to handle it. From complex video analysis to fast-paced comment streams, we ensure robust classification and enforcement.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {contentTypes.map((type, index) => (
              <motion.div
                key={type.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="group flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 cursor-default"
              >
                <div className="h-12 w-12 rounded-xl bg-gray-50 flex items-center justify-center mb-4 group-hover:bg-blue-50 transition-colors duration-300">
                   <type.icon className="h-6 w-6 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <span className="font-outfit font-semibold text-gray-900 text-sm tracking-tight text-center">
                  {type.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
