import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#0A0F1C] text-gray-300 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-4">
              <h2 className="text-white text-3xl font-bold mb-3">DigiTools</h2>
              <p className="text-gray-400 leading-relaxed max-w-md">
                Premium digital tools for creators, professionals, and
                businesses. Work smarter with our suite of powerful tools.
              </p>
            </div>

            <div className="md:col-span-2">
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Templates
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Integrations
                  </a>
                </li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Press
                  </a>
                </li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#">Documentation</a>
                </li>
                <li>
                  <a href="#">Help Center</a>
                </li>
                <li>
                  <a href="#">Community</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h3 className="text-white font-semibold mb-4">Social Links</h3>
              <div className="flex gap-4 flex-wrap">
                <a
                  href="#"
                  className="w-10 h-10 bg-white text-black hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors"
                >
                  <FaInstagram size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white text-black hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors"
                >
                  <FaFacebook size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white text-black hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors"
                >
                  <FaXTwitter size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
            <p className="text-gray-500">
              © 2026 DigiTools. All rights reserved.
            </p>

            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
