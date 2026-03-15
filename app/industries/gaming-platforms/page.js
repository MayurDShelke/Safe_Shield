"use client";

import React from "react";
import IndustryPageLayout from "@/components/layout/IndustryPageLayout";
import { Gamepad2, Zap, Brain, ShieldAlert, MessageSquare, Mic2, Image as ImageIcon, Video } from "lucide-react";

export default function GamingIndustryPage() {
  const pageData = {
    industryName: "Gaming Platforms",
    title: "Toxicity Control for Multiplayer",
    subtitle: "Protect player retention by instantly neutralizing toxic in-game voice chat, abusive text logs, and inappropriate custom avatars.",
    heroGradient: "from-green-50 to-white",
    
    challenges: [
      "Ultra-low latency requirements for real-time text and voice chat filtering without impacting game engine performance.",
      "Highly toxic sub-cultures attempting to bypass basic profanity filters using leetspeak and creative misspellings.",
      "Inappropriate, offensive, or copyrighted custom user-generated avatars and in-game textures.",
      "Safeguarding minors and maintaining COPPA/GDPR-K compliance in games with mixed-age populations."
    ],
    
    solutions: [
      {
        title: "Millisecond Text Filtering",
        desc: "Edge-deployed APIs strip away severe toxicity, racism, and harassment before the packets reach the receiving client.",
        icon: Zap
      },
      {
        title: "Contextual AI Parsing",
        desc: "Advanced NLP models differentiate between friendly competitive \"trash talk\" and genuine targeted abuse.",
        icon: Brain
      },
      {
        title: "Voice Chat Moderation",
        desc: "Near real-time audio analysis listening for acute toxicity, grooming behaviors, and severe keyword triggers.",
        icon: Mic2
      },
      {
        title: "Player Safety Triage",
        desc: "Automated alert systems instantly notify our 24/7 human response teams for severe self-harm or real-world threats.",
        icon: ShieldAlert
      }
    ],

    contentTypes: [
      { name: "Live Text Chat", icon: MessageSquare },
      { name: "In-Game Voice", icon: Mic2 },
      { name: "Custom Avatars", icon: ImageIcon },
      { name: "Forum Threads", icon: Video }
    ],

    workflow: [
      {
        title: "API Sandbox",
        desc: "Your engineering team implements our lightweight SDK into your chat server architecture for load testing."
      },
      {
        title: "Lexicon Customization",
        desc: "We import your existing ban-lists and build custom dictionaries specifically accounting for your game's unique lore."
      },
      {
        title: "Threat Thresholds",
        desc: "Configure automated penalty tiers (e.g., mute, shadowban, temporary suspension) based on serverity scores."
      },
      {
        title: "Live Deployment",
        desc: "Our systems activate seamlessly during your game launch or massive seasonal updates to handle peak concurrency."
      },
      {
        title: "Player Experience Review",
        desc: "We continually tune false positives to ensure healthy player communication remains entirely uninterrupted."
      }
    ]
  };

  return <IndustryPageLayout {...pageData} />;
}
