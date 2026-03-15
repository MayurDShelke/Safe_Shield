"use client";

import React from "react";
import ServicePageLayout from "@/components/layout/ServicePageLayout";
import { Video, ShieldAlert, ScanFace, FileCheck } from "lucide-react";

export default function VideoKYCPage() {
  const pageData = {
    title: "Video Know Your Customer",
    subtitle: "Onboard remote customers with absolute confidence using high-resolution, AI-verified, and spoof-proof live video calls.",
    serviceType: "Video KYC",
    heroGradient: "from-green-50 to-white",
    
    overview: "In an era of deepfakes and advanced synthetic identities, traditional document verification is no longer enough to meet stringent global financial regulations. Our Video KYC platform conducts secure, low-latency video streaming sessions comparing live user biometrics against their official physical identification documents. This fully managed end-to-end service ensures you remain completely compliant with AML regulations without sacrificing conversion rates.",
    
    features: [
      {
        title: "Liveness Detection",
        desc: "Advanced facial movement analysis to detect masks, screens, and AI-generated deepfakes in absolute real-time.",
        icon: ScanFace
      },
      {
        title: "Document Verification",
        desc: "High-resolution capture and OCR extraction of over 10,000+ government-issued IDs, driving licenses, and passports globally.",
        icon: FileCheck
      },
      {
        title: "Low Bandwidth Optimization",
        desc: "Proprietary compression ensuring clear video feeds even when users are on unstable 3G networks in developing regions.",
        icon: Video
      },
      {
        title: "Agent Dashboard",
        desc: "Provide your compliance officers with our intuitive dashboard, or utilize our certified global KYC operatives.",
        icon: ShieldAlert
      }
    ],

    workflow: [
      {
        title: "Session Initiation",
        desc: "A secure one-time link is generated via API and sent to the user to begin the video verification flow on their mobile device."
      },
      {
        title: "Document Capture",
        desc: "The user is guided to photograph the front and back of their official ID card under optimal lighting conditions."
      },
      {
        title: "Live Biometric Check",
        desc: "The user performs randomized movement tasks on a live video feed to confirm physical liveness."
      },
      {
        title: "Machine Learning Comparison",
        desc: "Our neural networks cross-reference the live facial topology against the photo extracted from the official document."
      },
      {
        title: "Final Approval",
        desc: "A human expert reviews the recording instantly, returning a highly secured pass/fail webhook to your backend."
      }
    ]
  };

  return <ServicePageLayout {...pageData} />;
}
