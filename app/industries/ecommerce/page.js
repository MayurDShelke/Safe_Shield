"use client";

import React from "react";
import IndustryPageLayout from "@/components/layout/IndustryPageLayout";
import { ShoppingBag, Star, PackageX, UserX, Image as ImageIcon, Video, MessageSquare, StarHalf } from "lucide-react";

export default function EcommerceIndustryPage() {
  const pageData = {
    industryName: "E-Commerce",
    title: "Marketplace Integrity",
    subtitle: "Protect your buyers and maintain seller trust by automatically detecting counterfeit goods, fake reviews, and fraudulent vendor profiles.",
    heroGradient: "from-blue-50 to-white",
    
    challenges: [
      "Massive influxes of fake, AI-generated product reviews artificially inflating fraudulent seller ratings.",
      "Third-party vendors uploading counterfeit branded goods, leading to severe legal liabilities and loss of consumer trust.",
      "Sellers attempting to bypass platform fees by embedding external contact information or payment links in product images.",
      "Offensive or completely unrelated imagery uploaded by users in the product review section."
    ],
    
    solutions: [
      {
        title: "Review Authenticity",
        desc: "Advanced NLP detects coordinated bot rings, duplicated text across multiple items, and unnatural sentiment patterns.",
        icon: Star
      },
      {
        title: "Counterfeit Detection",
        desc: "Computer vision scans product images, comparing logos and design patterns against registered intellectual property databases.",
        icon: PackageX
      },
      {
        title: "Off-Platform Prevention",
        desc: "OCR extracts phone numbers, email addresses, and URLs hidden within product images designed to bypass marketplace fees.",
        icon: UserX
      },
      {
        title: "Image Moderation",
        desc: "Instantly block NSFW or highly inappropriate photos uploaded by buyers in the customer review sections.",
        icon: ShoppingBag
      }
    ],

    contentTypes: [
      { name: "Product Listings", icon: ImageIcon },
      { name: "Customer Reviews", icon: StarHalf },
      { name: "Seller Profiles", icon: MessageSquare },
      { name: "Unboxing Videos", icon: Video }
    ],

    workflow: [
      {
        title: "Catalog Sync",
        desc: "Establish an API connection to pipe new seller registrations and product listing updates through our validation engine."
      },
      {
        title: "Asset Scanning",
        desc: "Product images are analyzed for prohibited items (weapons, drugs), counterfeit logos, and embedded text."
      },
      {
        title: "Review Filtering",
        desc: "Incoming customer reviews pass through a sentiment and authenticity check before being published to the live page."
      },
      {
        title: "Vendor Scoring",
        desc: "Our system assigns rolling trust-scores to third-party sellers based on their history of policy violations."
      },
      {
        title: "Takedown Enforcement",
        desc: "Fraudulent listings are automatically suspended, and highly complex counterfeiting cases are queued for human expert review."
      }
    ]
  };

  return <IndustryPageLayout {...pageData} />;
}
