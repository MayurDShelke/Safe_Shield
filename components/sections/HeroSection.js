"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Activity, Users, Lock, CheckCircle2, Globe2, Zap } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";

const trustIndicators = [
  { text: "Trusted by platforms worldwide", icon: Globe2 },
  { text: "10+ supported languages", icon: Users },
  { text: "Real-time content moderation", icon: Zap },
];

export default function HeroSection() {
  return (
    <SectionWrapper
      id="hero"
      spacing="none"
      className="relative overflow-hidden pt-32 pb-24 lg:pt-48 lg:pb-32 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-white to-gray-50"
    >
      {/* Background Graphic */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 blur-[100px] opacity-40 pointer-events-none">
        <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#3b82f6] to-[#93c5fd] opacity-30" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
      </div>

      <Container className="relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0"
          >
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold text-blue-600 ring-1 ring-inset ring-blue-600/20 mb-6 bg-blue-50/50 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2 animate-pulse"></span>
              Next-Gen AI Moderation
            </div>
            <h1 className="font-outfit text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl leading-tight">
              Protect Your Platform with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Intelligent</span> Moderation
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-xl mx-auto lg:mx-0">
              AI + Human powered moderation services to keep digital platforms safe, compliant, and thriving in real-time. Block toxicity before it reaches your users.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
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
                <Button size="lg" className="w-full shadow-lg shadow-blue-600/20">Book Consultation</Button>
              </a>
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">Explore Services</Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-10 pt-8 border-t border-gray-200/60 hidden sm:flex flex-wrap items-center gap-x-6 gap-y-3 justify-center lg:justify-start">
              {trustIndicators.map((indicator, index) => (
                <div key={index} className="flex items-center text-sm font-medium text-gray-500">
                  <indicator.icon className="mr-2 h-4 w-4 text-blue-500" />
                  {indicator.text}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Visual / Dashboard Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 sm:mt-24 lg:mt-0 relative perspective-1000"
          >
            {/* Main Mockup Card */}
            <div className="rounded-2xl bg-white/50 backdrop-blur-xl p-3 border border-gray-200/50 shadow-2xl shadow-blue-900/10 ring-1 ring-gray-900/5 transform lg:-rotate-y-12 lg:rotate-x-12 transition-transform duration-700 hover:rotate-0">
              <div className="rounded-xl bg-white border border-gray-100 overflow-hidden shadow-inner">
                {/* Mockup Header */}
                <div className="flex bg-gray-50/80 px-4 py-3 border-b border-gray-100 items-center justify-between">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="text-xs font-mono text-gray-400 font-medium tracking-wider">PROTECTION_DASHBOARD</div>
                </div>
                
                {/* Mockup Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center space-x-4">
                      <div className="bg-green-100 p-3 rounded-xl text-green-600 ring-4 ring-green-50">
                        <ShieldCheck size={28} />
                      </div>
                      <div>
                        <h3 className="font-outfit font-bold text-gray-900 text-lg">Platform Status</h3>
                        <p className="text-sm text-green-600 font-medium flex items-center">
                          <CheckCircle2 size={14} className="mr-1" /> Secure & Monitoring
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-blue-50 to-white p-5 rounded-xl border border-blue-100/50 shadow-sm flex flex-col items-start relative overflow-hidden">
                      <div className="absolute right-0 top-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
                        <Activity size={80} />
                      </div>
                      <Activity className="text-blue-500 mb-3" size={24} />
                      <div className="text-3xl font-bold text-gray-900">14.2k</div>
                      <div className="text-sm font-medium text-gray-500 mt-1">Scanned Today</div>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-white p-5 rounded-xl border border-green-100/50 shadow-sm flex flex-col items-start relative overflow-hidden">
                       <div className="absolute right-0 top-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
                        <Lock size={80} />
                      </div>
                      <Lock className="text-green-500 mb-3" size={24} />
                      <div className="text-3xl font-bold text-gray-900">99.8%</div>
                      <div className="text-sm font-medium text-gray-500 mt-1">Avg. Accuracy</div>
                    </div>
                  </div>

                  {/* Mockup Chart Area */}
                  <div className="mt-4 bg-gray-50 rounded-xl p-4 border border-gray-100">
                     <div className="flex items-end space-x-2 h-16 w-full opacity-60">
                        {[40, 70, 45, 90, 65, 85, 55, 100].map((h, i) => (
                           <motion.div 
                            key={i} 
                            initial={{ height: 0 }}
                            animate={{ height: `${h}%` }}
                            transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                            className="bg-blue-600 rounded-t-sm flex-1"
                           ></motion.div>
                        ))}
                     </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Badges */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 lg:-left-12 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-gray-200/50 flex items-center space-x-4 z-20"
            >
              <div className="bg-gradient-to-br from-indigo-500 to-blue-600 p-2.5 rounded-xl text-white shadow-inner">
                <Users size={22} className="stroke-[2.5]" />
              </div>
              <div>
                <div className="text-sm font-bold text-gray-900">200+ Experts</div>
                <div className="text-xs font-medium text-gray-500">Human in the loop</div>
              </div>
            </motion.div>

            {/* Floating Alerts Badge */}
            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
              className="absolute -top-6 -right-6 lg:-right-8 bg-white/90 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl border border-gray-200/50 flex items-center space-x-3 z-20"
            >
               <span className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
                <span className="text-sm font-bold text-gray-900">Threat Blocked</span>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
