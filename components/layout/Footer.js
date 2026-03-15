import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Globe } from "lucide-react";
import { FacebookLogo, TwitterLogo, InstagramLogo, LinkedInLogo } from "@/components/ui/SocialIcons";
import Container from "@/components/ui/Container";

const navigation = {
  services: [
    { name: "Content Moderation", href: "/services/content-moderation" },
    { name: "Data Validation", href: "/services/data-validation" },
    { name: "Video KYC", href: "/services/video-kyc" },
  ],
  quickLinks: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Industries", href: "/#industries" },
    { name: "How It Works", href: "/#how-it-works" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/#contact" },
  ],
  social: [
    { name: "Twitter", href: "#", icon: TwitterLogo },
    { name: "LinkedIn", href: "#", icon: LinkedInLogo },
    { name: "Facebook", href: "#", icon: FacebookLogo },
    { name: "Instagram", href: "#", icon: InstagramLogo },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <Container className="pb-8 pt-16 sm:pt-24 lg:pt-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 xl:gap-8">
          
          {/* Column 1 - Company */}
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-2 group">
              <Image
                src="/LOGO.png"
                alt="ContentShield Logo"
                width={32}
                height={32}
                className="rounded-lg grayscale brightness-200"
              />
              <span className="font-outfit font-bold text-xl tracking-tight text-white">
                ContentShield
              </span>
            </Link>
            <p className="text-sm leading-6 text-gray-400">
              ContentShield provides AI + human moderation solutions to keep digital platforms safe and compliant.
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a key={item.name} href={item.href} className="text-gray-500 hover:text-white transition-colors">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 - Services */}
          <div>
            <h3 className="text-sm font-semibold leading-6 text-white font-outfit">Services</h3>
            <ul role="list" className="mt-6 space-y-4">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm leading-6 text-gray-400 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Quick Links */}
          <div>
            <h3 className="text-sm font-semibold leading-6 text-white font-outfit">Quick Links</h3>
            <ul role="list" className="mt-6 space-y-4">
              {navigation.quickLinks.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm leading-6 text-gray-400 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
             <h3 className="text-sm font-semibold leading-6 text-white font-outfit">Contact</h3>
             <ul role="list" className="mt-6 space-y-4">
               <li>
                 <div className="flex items-center gap-3 text-gray-400">
                   <Mail className="h-5 w-5 text-gray-500 flex-shrink-0" />
                   <a href="mailto:abc@safeshield.com" className="text-sm hover:text-white transition-colors break-all">
                     abc@safeshield.com
                   </a>
                 </div>
               </li>
               <li>
                 <div className="flex items-center gap-3 text-gray-400">
                   <MapPin className="h-5 w-5 text-gray-500 flex-shrink-0" />
                   <span className="text-sm">Mumbai, India</span>
                 </div>
               </li>
               <li>
                 <div className="flex items-center gap-3 text-gray-400">
                   <Globe className="h-5 w-5 text-gray-500 flex-shrink-0" />
                   <a href="https://safeshield.com" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-white transition-colors">
                     safeshield.com
                   </a>
                 </div>
               </li>
             </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm leading-5 text-gray-400">
            &copy; 2026 ContentShield. All rights reserved.
          </p>
          <div className="flex gap-x-6">
            <Link href="#" className="text-sm leading-6 text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm leading-6 text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
