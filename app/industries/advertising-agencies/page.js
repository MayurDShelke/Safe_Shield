"use client";

import React from "react";
import IndustryPageLayout from "@/components/layout/IndustryPageLayout";
import { Megaphone, SearchCheck, XSquare, Briefcase, Video, Image as ImageIcon, Layout, Type } from "lucide-react";

export default function AdvertisingIndustryPage() {
  const pageData = {
    industryName: "Advertising Agencies",
    title: "Ad Creative Validation",
    subtitle: "Guarantee network compliance by automatically validating millions of ad creatives for restricted content, unauthorized claims, and brand safety.",
    heroGradient: "from-amber-50 to-white",
    
    challenges: [
      "Costly ad-network rejections due to creatives containing prohibited imagery, excessive text-to-image ratios, or banned keywords.",
      "The impossibility of manually reviewing thousands of dynamically generated programmatic ad variations.",
      "Malicious actors attempting to slip cryptocurrency scams, adult content, or malware links through your ad exchanges.",
      "Ensuring specific regional compliance for highly regulated industries like alcohol, pharmaceuticals, and politics."
    ],
    
    solutions: [
      {
        title: "Pre-Flight Validation",
        desc: "Automatically scan ad images and videos milliseconds before they are submitted to ad exchanges to guarantee acceptance.",
        icon: SearchCheck
      },
      {
        title: "Text & Claim Analysis",
        desc: "OCR extracts text from banners to verify it does not contain prohibited health claims or banned financial promises.",
        icon: Type
      },
      {
        title: "Malware Link Detection",
        desc: "Deeply inspect the destination URLs of every ad creative to ensure they do not redirect to known phishing or malware sites.",
        icon: XSquare
      },
      {
        title: "Brand Safety Auditing",
        desc: "Ensure the surrounding context where the ad is placed does not conflict with the advertiser's core brand values.",
        icon: Briefcase
      }
    ],

    contentTypes: [
      { name: "Display Banners", icon: ImageIcon },
      { name: "Video Pre-rolls", icon: Video },
      { name: "Native Widgets", icon: Layout },
      { name: "Ad Copy & Links", icon: Megaphone }
    ],

    workflow: [
      {
        title: "Exchange Integration",
        desc: "Implement our protective API directly into your DSP or ad-serving architecture."
      },
      {
        title: "Network Rule Mapping",
        desc: "We configure validation rules matching the exact rejection criteria of Google, Meta, and premium programmatic networks."
      },
      {
        title: "High-Velocity Scanning",
        desc: "As creatives are uploaded, our engine analyzes visual safety, reads embedded text, and tests destination URLs in parallel."
      },
      {
        title: "Instant Rejection",
        desc: "Non-compliant ads are instantly blocked at the gateway, returning specific error codes explaining why the creative failed."
      },
      {
        title: "Human Appeal",
        desc: "False-positives or highly nuanced regulatory ads are escalated to our compliance experts for manual override."
      }
    ]
  };

  return <IndustryPageLayout {...pageData} />;
}
