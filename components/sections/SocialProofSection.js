"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Container from "@/components/ui/Container";

const logos = [
  { name: "YouTube", src: "/logos/youtube-ar21.svg" },
  { name: "Shopify", src: "/logos/shopify-ar21.svg" },
  { name: "Discord", src: "/logos/discord-ar21~bgwhite.svg" },
  { name: "Twitter", src: "/logos/twitter-ar21.svg" },
];

export default function SocialProofSection() {
  // Duplicate for infinite scroll
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <section
      id="social-proof"
      className="bg-white border-b border-gray-50 pt-10 pb-16 overflow-hidden"
    >
      <Container>
        <div className="text-center mb-10">
          <h2 className="text-sm font-semibold tracking-wide text-gray-500 uppercase">
            Trusted by fast-growing platforms worldwide
          </h2>
        </div>
      </Container>

      {/* Infinite Scroll Container */}
      <div
        className="relative flex w-full overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
        }}
      >
        <motion.div
          className="flex items-center gap-16 sm:gap-24 px-8 min-w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 25,
          }}
        >
          {duplicatedLogos.map((logo, idx) => (
            <div
              key={`${logo.name}-${idx}`}
              className="flex items-center justify-center opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:scale-105"
            >
              <Image
                src={logo.src}
                alt={`${logo.name} logo`}
                width={140}
                height={50}
                className="h-8 sm:h-12 w-auto object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
