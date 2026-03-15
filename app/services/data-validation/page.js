"use client";

import React from "react";
import ServicePageLayout from "@/components/layout/ServicePageLayout";
import { Database, Lock, Fingerprint, Activity } from "lucide-react";

export default function DataValidationPage() {
  const pageData = {
    title: "Data Validation & Integrity",
    subtitle: "Block fake accounts, sanitize inputs, and guarantee the structural integrity of your datasets in real-time.",
    serviceType: "Data Validation",
    heroGradient: "from-purple-50 to-white",
    
    overview: "Garbage in, garbage out. Our data validation suite acts as an impervious shield for your backend architecture. We go far beyond standard regex checking by verifying email legitimacy, validating complex international phone numbers, neutralizing malicious SQL injection attempts, and confirming physical addresses against global postal databases. Ensure that every entity row inserted into your system is accurate, authentic, and properly structured.",
    
    features: [
      {
        title: "Identity Verification",
        desc: "Cross-reference newly created user accounts against global blacklists and temporary email domain providers.",
        icon: Fingerprint
      },
      {
        title: "Payload Sanitization",
        desc: "Deep inspection of JSON and XML payloads to strip out malicious scripts before they reach your parsers.",
        icon: Lock
      },
      {
        title: "Global Formatting",
        desc: "Automatically standardize and format international phone numbers, dates, and postal addresses to your required spec.",
        icon: Database
      },
      {
        title: "Uptime & Reliability",
        desc: "Built on globally distributed edge networks ensuring < 50ms validation latency regardless of where the user is located.",
        icon: Activity
      }
    ],

    workflow: [
      {
        title: "Schema Definition",
        desc: "Provide us with your expected data schemas, required fields, and acceptable formatting rules."
      },
      {
        title: "Endpoint Configuration",
        desc: "We generate custom validation endpoints tuned specifically for your registration, checkout, or submission forms."
      },
      {
        title: "Frontend Integration",
        desc: "Plug our lightweight validation SDK into your client-side applications for instant user feedback."
      },
      {
        title: "Backend Enforcement",
        desc: "Route your API traffic through our secure gateway to ensure only pristine data reaches your primary database."
      },
      {
        title: "Anomaly Detection",
        desc: "Receive automated alerts if our system detects highly coordinated bot traffic or unusual data submission patterns."
      }
    ]
  };

  return <ServicePageLayout {...pageData} />;
}
