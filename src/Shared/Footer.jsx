import React from "react";
import { Phone, Mail } from "lucide-react";
import { Link } from "react-router";
import { FaFacebook } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="py-12 border-t-2 border-white">
      <div class=" mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-10 md:px-20">
          {/* Left Section - Logo & Description */}
          <div class="space-y-6">
            <div class="flex items-center space-x-3">
              <div class="text-5xl font-black tracking-tighter text-gray-900">
                D05
              </div>
            </div>
            <p class="text-gray-900 text-lg font-medium">
              D05 Design & Engineering
            </p>
            <p class="text-gray-600 max-w-xs leading-relaxed">
              We offer Structural & Misc metal design assist, Stair design & PE
              & Calculation.
            </p>
          </div>

          {/* Middle Section - Quick Links */}
          <div class="space-y-4">
            <h3 class="text-gray-900 font-semibold text-lg">Quick Links</h3>
            <ul class="space-y-3">
              <li>
                <a
                  href="#"
                  class="text-gray-600 hover:text-gray-900 transition"
                >
                  Home
                </a>
              </li>
              <li>
                <Link class="text-gray-600 hover:text-gray-900 transition">
                  About us
                </Link>
              </li>
              <li>
                <Link class="text-gray-600 hover:text-gray-900 transition">
                  Our Projects
                </Link>
              </li>
              <li>
                <Link class="text-gray-600 hover:text-gray-900 transition">
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          <div class="space-y-4">
            <h3 class="text-gray-900 font-semibold text-lg">Contact Links</h3>
            <div class="space-y-4">
              <a
                href="mailto:Jryant@d05eng.com"
                class="flex items-center space-x-3 text-gray-600 hover:text-gray-900 transition"
              >
                <Mail className="w-5 h-5" />
                <span>Jryant@d05eng.com</span>
              </a>
              <a
                href="tel:+18032643390"
                class="flex items-center space-x-3 text-gray-600 hover:text-gray-900 transition"
              >
                <Phone className="w-5 h-5" />
                <span>(803)264-3390</span>
              </a>
              <div class="flex space-x-5 pt-4">
                <a
                  href="#"
                  class="text-gray-600 hover:text-gray-900 transition"
                >
                  <FaFacebook className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  class="text-gray-600 hover:text-gray-900 transition"
                >
                  <RiInstagramFill className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  class="text-gray-600 hover:text-gray-900 transition"
                >
                  <BsLinkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-12 pt-8 border-t border-gray-200 text-center">
          <p class="text-gray-500 text-sm">
            © 2025. All Rights Reserved | D05 Design & Engineering
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
