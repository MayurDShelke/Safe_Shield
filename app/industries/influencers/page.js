"use client";

import React from "react";
import IndustryPageLayout from "@/components/layout/IndustryPageLayout";
import { Mic2, MessageCircleHeart, ShieldOff, AlertCircle, Camera, Video, MonitorPlay, MessageSquare } from "lucide-react";

export default function InfluencersIndustryPage() {
  const pageData = {
    industryName: "Influencers",
    title: "Brand Safety for Creators",
    subtitle: "Protect your mental health and brand sponsorships by automatically filtering hate speech, doxxing, and harassment from your social comment sections.",
    heroGradient: "from-pink-50 to-white",
    
    challenges: [
      "Severe mental health impacts caused by reading high volumes of targeted harassment and hate speech.",
      "Losing lucrative brand sponsorships due to unmoderated toxic comment sections reflecting poorly on partner brands.",
      "Coordinated bot attacks spamming malicious links, cryptocurrency scams, or adult content under viral posts.",
      "The massive time sink required to manually delete inappropriate comments instead of focusing on content creation."
    ],
    
    solutions: [
      {
        title: "Comment Section Shield",
        desc: "Automated APIs instantly hide or delete toxic replies seconds after they are posted across all your active platforms.",
        icon: MessageCircleHeart
      },
      {
        title: "Doxxing Prevention",
        desc: "Advanced neural networks specifically trained to recognize and immediately block attempts to leak your private information.",
        icon: ShieldOff
      },
      {
        title: "Spam & Scam Blocking",
        desc: "Protect your loyal followers from falling victim to phishing links or impersonator accounts commenting on your behalf.",
        icon: AlertCircle
      },
      {
        title: "Sponsorship Compliance",
        desc: "Ensure your comment sections adhere strictly to the brand-safety requirements dictated by your corporate sponsors.",
        icon: Mic2
      }
    ],

    contentTypes: [
      { name: "Live Chat Streams", icon: MonitorPlay },
      { name: "Video Comments", icon: MessageSquare },
      { name: "Photo Replies", icon: Camera },
      { name: "Shorts & Reels", icon: Video }
    ],

    workflow: [
      {
        title: "Account Linking",
        desc: "Securely authorize our platform via OAuth to access your comment streams across YouTube, Instagram, and TikTok."
      },
      {
        title: "Tolerance Configuration",
        desc: "Set your specific sensitivity thresholds for profanity, spam, and political arguments."
      },
      {
        title: "Silent Filtering",
        desc: "Our engine operates quietly in the background, automatically hiding content that breaches your configured thresholds."
      },
      {
        title: "Quarantine Review",
        desc: "Access a centralized dashboard to review flagged comments, allowing you to restore them or permanently block the users."
      },
      {
        title: "Sponsorship Export",
        desc: "Generate clean brand-safety reports demonstrating the health of your community to prospective brand partners."
      }
    ]
  };

  return <IndustryPageLayout {...pageData} />;
}
