"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function CTASection() {
  return (
    <SectionWrapper id="cta" bg="white" spacing="none" className="relative py-24 sm:py-32 overflow-hidden border-t border-gray-100">

      {/* Dynamic Background Gradients */}
      <div className="absolute inset-0 bg-gray-900">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[1000px] max-h-[800px] overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-60 animate-blob"></div>
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-60 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-60 animate-blob animation-delay-4000"></div>
        </div>
      </div>

      <Container className="relative z-10 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl w-full flex flex-col items-center relative"
        >
          <div className="rounded-2xl bg-white/10 backdrop-blur-md p-3 mb-8 ring-1 ring-white/20 shadow-2xl">
            <ShieldCheck size={48} className="text-white drop-shadow-md" strokeWidth={1.5} />
          </div>

          <h2 className="font-outfit text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl mb-6">
            Ready to secure your <br className="hidden sm:block" />platform's future?
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-lg leading-8 text-gray-300 mb-10">
            Join leading digital brands that trust ContentShield to maintain flawless safety standards. Get started with a custom moderation framework today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <a 
              href="/#contact" 
              onClick={(e) => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  e.preventDefault();
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="w-full sm:w-auto"
            >
              <Button size="lg" className="w-full bg-white text-gray-900 hover:bg-blue-50 hover:scale-105 active:scale-95 transition-all duration-300 ease-out shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] group text-lg h-14 px-8">
                Book Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:text-blue-600 transition-all" />
              </Button>
            </a>
          </div>
        </motion.div>
      </Container>
    </SectionWrapper>
  );
}
