"use client";

import React from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionWrapper from "@/components/ui/SectionWrapper";

const logos = [
  { name: "YouTube", url: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" },
  { name: "Shopify", url: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Shopify_Logo.png" },
  { name: "Discord", url: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Discord_Full_Logo.svg" },
  { name: "TikTok", url: "https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg" },
  { name: "Twitch", url: "https://upload.wikimedia.org/wikipedia/commons/7/74/Twitch-wordmark-logo.svg" },
];

export default function SocialProofSection() {
  return (
    <SectionWrapper id="social-proof" bg="white" spacing="minor" className="border-b border-gray-50 pt-10 pb-16">
      <Container>
        <div className="text-center mb-10">
          <p className="text-sm font-semibold tracking-wide text-gray-500 uppercase">
            Trusted by fast-growing platforms worldwide
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-10 sm:gap-x-16 lg:gap-x-24">
          {logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="h-8 sm:h-10 opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 ease-in-out cursor-pointer flex items-center justify-center">
                 {/* Fallback text rendering if external logos fail to load, styling specifically to look like logos */}
                 <span className="font-outfit font-bold text-2xl tracking-tighter text-gray-800 hidden">{logo.name}</span>
                 {/* Using standard img tags since they are external Wikipedia URLs for the demo */}
                 <img src={logo.url} alt={`${logo.name} logo`} className="max-h-full w-auto object-contain" />
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
