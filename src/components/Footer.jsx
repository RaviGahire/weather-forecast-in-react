import React from "react";
import { IconBrandFacebook, IconBrandTwitter, IconBrandInstagram, IconBrandLinkedin } from '@tabler/icons-react';


export function Footer({ companyName = "Weather-24.com" }) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo & About */}
        <div>
          <h2 className="text-white text-xl font-semibold mb-3">{companyName}</h2>
          <p className="text-sm text-gray-400">
            Creating user-focused digital experiences with innovation and heart.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/about" className="hover:text-white transition">About</a></li>
            <li><a href="/services" className="hover:text-white transition">Services</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/faq" className="hover:text-white transition">FAQ</a></li>
            <li><a href="/privacy" className="hover:text-white transition">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-white transition">Terms of Service</a></li>
            <li><a href="/help" className="hover:text-white transition">Help Center</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-gray-400">
            <a href="#" aria-label="Facebook" className="hover:text-white transition">
              <IconBrandFacebook/>
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-white transition">
                <IconBrandTwitter/>
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-white transition">
                <IconBrandInstagram/>
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-white transition">
                <IconBrandLinkedin/>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        <p>
          © {year} {companyName}. All rights reserved. | Designed By Ravi Gahire. {companyName} is not affiliated with any weather service provider.
        </p>
      </div>
    </footer>
  );
}