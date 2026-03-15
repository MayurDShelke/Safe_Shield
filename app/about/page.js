import React from "react";
import Image from "next/image";
import { ShieldCheck, Users, Globe2, Target } from "lucide-react";
import Container from "@/components/ui/Container";

export const metadata = {
  title: "About Content Shield | Safeguarding Digital Ecosystems",
  description: "Learn about Content Shield, our history, and our global expertise in moderating user generated content for emerging startups and large scale enterprises.",
};

const stats = [
  { label: 'Founded', value: 'Feb 2026' },
  { label: 'Headquarters', value: 'Mumbai, India' },
  { label: 'Focus', value: 'Content Moderation' },
  { label: 'Client Base', value: 'Global Startups to Enterprises' },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10 h-full w-full object-cover">
          <div className="absolute inset-0 bg-gray-900 bg-opacity-90 mix-blend-multiply" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-gray-900" />
        </div>
        
        {/* Abstract background shapes */}
        <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
          <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
        </div>
        <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
          <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
        </div>

        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-outfit text-4xl font-bold tracking-tight text-white sm:text-6xl">About Content Shield</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Fostering safer online communities by bringing extensive experience and a wide range of expertise in moderating user generated content.
          </p>
        </div>
      </div>

      {/* Content section */}
      <div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-16 lg:mt-24">Our Story & Expertise</h2>
          <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
            <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
              <p className="text-xl leading-8 text-gray-600">
                Content Shield was established in February 2026 and operates out of Mumbai, India. Driven by a strong commitment to supporting businesses and fostering safer online communities, we bring extensive experience and a wide range of expertise in moderating user generated content.
              </p>
              <div className="mt-10 max-w-xl text-base leading-7 text-gray-700 space-y-8">
                <p>
                  We possess deep expertise in understanding the unique dynamics that shape online communities across different brands, industries, and interest groups. This understanding enables us to effectively moderate a wide range of digital platforms, including websites, messaging applications, social media channels, forums, and discussion communities.
                </p>
                <p className="border-l-4 border-blue-600 pl-6 text-gray-900 font-semibold italic">
                  From emerging startups to large scale enterprises, our support is highly adaptable, ensuring our moderation services align seamlessly with diverse business needs.
                </p>
              </div>
            </div>
            <div className="lg:flex lg:flex-auto lg:justify-center">
              <dl className="w-64 space-y-8 xl:w-80">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex flex-col-reverse gap-y-4">
                    <dt className="text-base leading-7 text-gray-600">{stat.label}</dt>
                    <dd className="text-3xl font-bold tracking-tight text-gray-900">{stat.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>

      {/* Values section */}
      <div className="mx-auto mt-20 max-w-7xl px-6 sm:mt-24 lg:px-8 bg-gray-50 rounded-3xl py-16 mb-24">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Mission Statement</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We exist to remove toxicity, illegality, and disruption from digital ecosystems, allowing platforms to scale securely without compromising user safety.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
            <dt className="font-semibold text-gray-900 flex items-center gap-2 text-xl mb-2 font-outfit">
               <ShieldCheck className="h-6 w-6 text-blue-600" /> Protective
            </dt>
            <dd className="mt-1 text-gray-600">Guarding your brand reputation with proactive and reactive moderation strategies tailored to your industry.</dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-900 flex items-center gap-2 text-xl mb-2 font-outfit">
               <Globe2 className="h-6 w-6 text-blue-600" /> Adaptive
            </dt>
            <dd className="mt-1 text-gray-600">Scaling globally across messaging apps, robust social channels, and dynamic market environments with ease.</dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-900 flex items-center gap-2 text-xl mb-2 font-outfit">
               <Users className="h-6 w-6 text-blue-600" /> Human-Centric
            </dt>
            <dd className="mt-1 text-gray-600">Combining next-gen AI filters with precise human oversight to understand nuance and community context perfectly.</dd>
          </div>
        </dl>
      </div>

    </div>
  );
}
