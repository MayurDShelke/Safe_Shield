"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, MonitorPlay, Gamepad2, Mic2, Megaphone, ShoppingBag, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Link from "next/link";

const industries = [
  { name: "Social Media Platforms", slug: "/industries/social-media", icon: Users, description: "Protect growing communities from hate speech, harassment, and NSFW content instantly." },
  { name: "OTT Platforms", slug: "/industries/ott-platforms", icon: MonitorPlay, description: "Ensure video descriptions, comments, and massive uploads comply with strict regional laws." },
  { name: "Gaming Platforms", slug: "/industries/gaming-platforms", icon: Gamepad2, description: "Moderate fast-paced in-game chats and community forums to maintain safe environments." },
  { name: "Influencers", slug: "/industries/influencers", icon: Mic2, description: "Filter toxic comments and highly coordinated spam campaigns to protect brand image." },
  { name: "Advertising Agencies", slug: "/industries/advertising-agencies", icon: Megaphone, description: "Validate visual ad creatives for brand safety and intricate policy compliance." },
  { name: "E-Commerce", slug: "/industries/ecommerce", icon: ShoppingBag, description: "Review million-scale product listings, reviews, and seller profiles to halt fraud." },
];

export default function IndustriesSection() {
  return (
    <SectionWrapper id="industries" bg="white" spacing="major" className="relative overflow-hidden bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-50 via-white to-white">
      <Container>
        <div className="mx-auto max-w-2xl lg:text-center mb-16 lg:mb-24">
           <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold text-gray-600 ring-1 ring-inset ring-gray-600/20 mb-6 bg-gray-50">
             Versatile Solutions
           </div>
          <h2 className="font-outfit text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl leading-tight">
            Trusted across the <br className="hidden sm:block"/>digital ecosystem
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our flexible moderation models scale perfectly to meet the heavily specialized demands of completely different online industries.
          </p>
        </div>

        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 md:grid-cols-2">
            {industries.map((industry, index) => (
              <Link key={industry.name} href={industry.slug} className="group outline-none block">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex flex-col items-start h-full p-8 bg-white border border-gray-200 rounded-3xl shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 z-10 overflow-hidden group-hover:-translate-y-1 group-hover:border-blue-300"
                >
                  
                  {/* Decorative background glow on hover */}
                  <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 rounded-full bg-blue-50 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>

                  <div className="relative z-10 flex items-center justify-center rounded-2xl bg-gray-50 p-4 mb-8 ring-1 ring-gray-900/5 group-hover:bg-blue-600 group-hover:ring-blue-600 transition-colors duration-300">
                    <industry.icon className="h-7 w-7 text-gray-700 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <h3 className="relative z-10 font-outfit text-2xl font-bold tracking-tight text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {industry.name}
                  </h3>
                  <p className="relative z-10 text-base leading-7 text-gray-600 flex-1 mb-8">
                    {industry.description}
                  </p>
                  
                  <div className="relative z-10 mt-auto flex items-center text-sm font-semibold text-blue-600 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                    Learn more <ArrowRight className="ml-1 w-4 h-4" />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
