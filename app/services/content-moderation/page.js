"use client";

import React from "react";
import ServicePageLayout from "@/components/layout/ServicePageLayout";
import { ShieldCheck, Eye, Zap, Users } from "lucide-react";

export default function ContentModerationPage() {
  const pageData = {
    title: "Content Moderation Services",
    subtitle: "Real-time, scalable protection against toxic content, NSFW media, and harassment across all your user touchpoints.",
    serviceType: "Content Moderation",
    heroGradient: "from-blue-50 to-white",
    
    overview: "Our completely managed content moderation proxy sits directly between your users and your database. By combining proprietary machine learning models with a global workforce of culturally-aware human moderators, we guarantee that your platform remains a safe, welcoming environment 24/7. We review text chats, image uploads, and live streaming video in real-time, instantly flagging or removing content that violates your unique community guidelines.",
    
    features: [
      {
        title: "AI + Human Moderation",
        desc: "Automated ML filters handle 95% of obvious toxicity in milliseconds. Nuanced edge cases are instantly routed to trained human reviewers.",
        icon: Users
      },
      {
        title: "Real-Time Monitoring",
        desc: "Sub-second latency integrations ensure that harmful content never even reaches your live database or frontend clients.",
        icon: Zap
      },
      {
        title: "Policy Enforcement",
        desc: "We digest your exact community terms of service and train our models to enforce your specific definitions of acceptable content.",
        icon: ShieldCheck
      },
      {
        title: "Omnichannel Scanning",
        desc: "A single unified API endpoint capable of scanning raw text, audio transcriptions, images, and live video feeds simultaneously.",
        icon: Eye
      }
    ],

    workflow: [
      {
        title: "Submit Requirements",
        desc: "Share your platform's Terms of Service and historical data examples with our Trust & Safety architects."
      },
      {
        title: "Moderation Policy Setup",
        desc: "We configure custom AI rule-sets and build specific training modules for the human moderation pods assigned to your account."
      },
      {
        title: "API Integration",
        desc: "Connect to our REST or GraphQL APIs to start piping user-generated content through our secure analysis layer."
      },
      {
        title: "Continuous Monitoring",
        desc: "Active 24/7 enforcement begins. Harmless content passes through instantly; toxic content is quarantined or deleted."
      },
      {
        title: "Reports & Insights",
        desc: "Access a live dashboard showing enforcement analytics, toxicity trends, and false-positive reduction metrics."
      }
    ]
  };

  return <ServicePageLayout {...pageData} />;
}
