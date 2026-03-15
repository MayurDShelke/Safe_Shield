"use client";

import React from "react";
import Link from "next/link";
import { ShieldAlert, Database, Video, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Card from "@/components/ui/Card";

const services = [
  {
    title: "Content Moderation",
    description: "Multi-layered moderation utilizing AI algorithms and human expertise to detect and remove harmful text, images, and videos in real-time before they impact users.",
    icon: ShieldAlert,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    gradient: "from-blue-50/50 via-white to-white",
    borderHover: "hover:border-blue-200",
    shadowHover: "hover:shadow-blue-900/5",
    href: "/services/content-moderation"
  },
  {
    title: "Data Validation",
    description: "Ensure the complete accuracy, authenticity, and structure of user-submitted data to maintain pure platform integrity and prevent advanced fraud attempts.",
    icon: Database,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    gradient: "from-purple-50/50 via-white to-white",
    borderHover: "hover:border-purple-200",
    shadowHover: "hover:shadow-purple-900/5",
    href: "/services/data-validation"
  },
  {
    title: "Video KYC",
    description: "Streamlined, heavily secure, and globally compliant Know Your Customer (KYC) onboarding via high-resolution, spoof-proof video verification processes.",
    icon: Video,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    gradient: "from-green-50/50 via-white to-white",
    borderHover: "hover:border-green-200",
    shadowHover: "hover:shadow-green-900/5",
    href: "/services/video-kyc"
  },
];

export default function ServicesSection() {
  return (
    <SectionWrapper id="services" bg="white" spacing="major" className="relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold text-blue-600 ring-1 ring-inset ring-blue-600/20 mb-6 bg-blue-50/50">
            Platform Capabilities
          </div>
          <h2 className="font-outfit text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Complete safety infrastructure
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We provide an end-to-end suite of protective services tailored to dynamically shield your users, guard your dataset, and uphold brand reputation.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3">
            {services.map((service) => (
              <Link key={service.title} href={service.href} className="group outline-none">
                <Card 
                  hoverEffect 
                  className={`relative flex flex-col items-start h-full overflow-hidden bg-gradient-to-br ${service.gradient} border-gray-200/60 p-8 sm:p-10 transition-all duration-300 ${service.borderHover} ${service.shadowHover} group-hover:-translate-y-2`}
                >
                  <div className={`rounded-2xl p-4 shadow-sm ring-1 ring-inset ring-gray-900/5 mb-6 ${service.iconBg}`}>
                    <service.icon className={`h-10 w-10 ${service.iconColor}`} strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <dt className="font-outfit text-2xl font-bold leading-7 text-gray-900 tracking-tight group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{service.description}</p>
                  </dd>
                  
                  {/* CTA Link attached to bottom of card content */}
                  <div className="mt-8 flex items-center font-semibold text-blue-600 opacity-90 group-hover:opacity-100">
                    Request Service <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                  
                  {/* Decorative background element on hover */}
                  <div className="absolute -bottom-12 -right-12 opacity-0 transition-opacity duration-300 group-hover:opacity-10 pointer-events-none">
                       <service.icon className={`w-40 h-40 ${service.iconColor}`} />
                  </div>
                </Card>
              </Link>
            ))}
          </dl>
        </div>
      </Container>
    </SectionWrapper>
  );
}
