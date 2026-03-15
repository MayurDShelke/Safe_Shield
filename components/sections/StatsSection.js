"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileCheck2, ShieldCheck, Globe, Clock4 } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionWrapper from "@/components/ui/SectionWrapper";

const stats = [
  { id: 1, name: "Content Moderated", value: "10M+", icon: FileCheck2 },
  { id: 2, name: "Accuracy Rate", value: "99.9%", icon: ShieldCheck },
  { id: 3, name: "Global Clients", value: "50+", icon: Globe },
  { id: 4, name: "Active Monitoring", value: "24/7", icon: Clock4 },
];

export default function StatsSection() {
  return (
    <SectionWrapper id="stats" bg="white" spacing="minor" className="border-b border-gray-100 bg-gradient-to-b from-transparent to-gray-50/50">
      <Container>
        <dl className="grid grid-cols-1 gap-x-8 gap-y-12 sm:gap-y-16 text-center lg:grid-cols-4 sm:grid-cols-2">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mx-auto flex max-w-xs flex-col items-center gap-y-3 group"
            >
              <div className="rounded-2xl bg-blue-50/50 p-4 ring-1 ring-blue-100/50 shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:bg-blue-100/50">
                 <stat.icon className="h-8 w-8 text-blue-600" strokeWidth={1.5} />
              </div>
              <dd className="order-first font-outfit text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl drop-shadow-sm">
                {stat.value}
              </dd>
              <dt className="text-sm font-medium leading-7 text-gray-500 uppercase tracking-wider">{stat.name}</dt>
            </motion.div>
          ))}
        </dl>
      </Container>
    </SectionWrapper>
  );
}
