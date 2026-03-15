"use client";

import React from "react";
import IndustryPageLayout from "@/components/layout/IndustryPageLayout";
import { Users, Bot, Globe2, ShieldCheck, Image as ImageIcon, Video, Radio, MessageSquare } from "lucide-react";

export default function SocialMediaIndustryPage() {
  const pageData = {
    industryName: "Social Media Platforms",
    title: "Content Moderation for Social Media",
    subtitle: "Protect your users, maintain brand safety, and scale your growing community without the friction of toxic content or coordinated spam attacks.",
    heroGradient: "from-blue-50 to-white",
    
    challenges: [
      "Exponentially increasing volumes of user-generated content (UGC) leading to moderation backlogs.",
      "Sophisticated bot networks spamming links and creating fake accounts.",
      "Rapid spread of viral misinformation and highly coordinated harassment campaigns.",
      "Upholding brand safety to remain attractive to tier-1 corporate advertisers."
    ],
    
    solutions: [
      {
        title: "Real-time AI Filtering",
        desc: "Ingest and analyze millions of comments and posts instantly, blocking obvious toxicity via API before it renders.",
        icon: Bot
      },
      {
        title: "Human Nuance at Scale",
        desc: "Complex cases (like cultural slang or sarcasm) are piped directly to our specifically trained human operative pods.",
        icon: Users
      },
      {
        title: "Multilingual Protection",
        desc: "Expand your platform globally with native-level linguistic moderation available 24/7 in over 50+ languages.",
        icon: Globe2
      },
      {
        title: "Adaptive Policy Engine",
        desc: "As your community guidelines evolve, our models are retrained seamlessly to enforce your newest rules.",
        icon: ShieldCheck
      }
    ],

    contentTypes: [
      { name: "Image Posts", icon: ImageIcon },
      { name: "Short-form Video", icon: Video },
      { name: "Live Broadcasts", icon: Radio },
      { name: "Threaded Comments", icon: MessageSquare }
    ],

    workflow: [
      {
        title: "Policy Ingestion",
        desc: "We completely map your specific community guidelines into actionable ML heuristics and human review manuals."
      },
      {
        title: "API Integration",
        desc: "You connect your backend to our low-latency classification endpoints for real-time traffic analysis."
      },
      {
        title: "Shadow Testing",
        desc: "We run a silent background evaluation week to calibrate our models against your live production traffic."
      },
      {
        title: "Active Enforcement",
        desc: "Full enforcement begins filtering content based on your preferred action thresholds (Delete, Filter, or Flag)."
      },
      {
        title: "Reporting",
        desc: "Executive dashboards provide transparent insights into takedown rates, threat vectors, and accuracy metrics."
      }
    ]
  };

  return <IndustryPageLayout {...pageData} />;
}
