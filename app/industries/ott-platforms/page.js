"use client";

import React from "react";
import IndustryPageLayout from "@/components/layout/IndustryPageLayout";
import { MonitorPlay, Copyright, ListTree, MicOff, Subtitles, Video, FileText, Image as ImageIcon } from "lucide-react";

export default function OTTIndustryPage() {
  const pageData = {
    industryName: "OTT Platforms",
    title: "Compliance & Safety for OTT",
    subtitle: "Automate video analysis, ensure stringent regional compliance, and safeguard viewer experiences across massive global streaming libraries.",
    heroGradient: "from-purple-50 to-white",
    
    challenges: [
      "Managing vast archival libraries of historical video content requiring retroactive classification and tagging.",
      "Adhering to highly fragmented, rapidly changing regional broadcasting laws and censorship requirements.",
      "Detecting unsanctioned copyrighted material embedded seamlessly within user uploads or live channels.",
      "Ensuring closed captions, metadata, and thumbnail images are strictly aligned with age-rating policies."
    ],
    
    solutions: [
      {
        title: "Deep Video Analysis",
        desc: "Frame-by-frame computer vision accurately detects NSFW imagery, intense violence, and localized banned symbols.",
        icon: MonitorPlay
      },
      {
        title: "Copyright Fingerprinting",
        desc: "Instantaneously match hashes of uploaded media against massive global databases to prevent DMCA strikes.",
        icon: Copyright
      },
      {
        title: "Audio Transcription",
        desc: "Convert audio tracks to text dynamically to filter out hate speech and explicit language accurately.",
        icon: MicOff
      },
      {
        title: "Age-Rating Automation",
        desc: "Automatically suggest accurate regional maturity ratings (e.g., PG-13, TV-MA) based on continuous content analysis.",
        icon: ListTree
      }
    ],

    contentTypes: [
      { name: "VOD Files", icon: Video },
      { name: "Live TV Streams", icon: MonitorPlay },
      { name: "Thumbnails", icon: ImageIcon },
      { name: "Subtitles & Metadata", icon: Subtitles }
    ],

    workflow: [
      {
        title: "Library Audit",
        desc: "We establish a secure connection to your cloud buckets to begin automated batch processing of historical archives."
      },
      {
        title: "Compliance Mapping",
        desc: "Your legal team defines required regional cuts, blur thresholds, and strict audio-muting guidelines."
      },
      {
        title: "Automated Tagging",
        desc: "Our engine enriches your metadata by injecting precise timestamps of sensitive scenes or policy violations."
      },
      {
        title: "Human Escalation",
        desc: "Highly complex edge-cases or culturally sensitive content is securely routed to our OTT moderation specialists."
      },
      {
        title: "Clearance Delivery",
        desc: "The final, cleared asset is approved for global rendering or restricted to safe geographical regions."
      }
    ]
  };

  return <IndustryPageLayout {...pageData} />;
}
