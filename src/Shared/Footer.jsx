
import React from "react";
import { Phone, Mail } from "lucide-react";
import { Link } from "react-router";
import { FaFacebook } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { BsLinkedin } from "react-icons/bs";
import Logo from "../assets/jeff_logo.png";

const Footer = () => {
  return (
    <footer className=" py-12 border-t-2 border-white">
      <div className="mx-auto px-6 sm:px-8 lg:px-20 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
          <div className="space-y-6">
            <div className="flex items-center">
              <img
                src={Logo}
                alt="D05 Engineering Logo"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-600 text-sm sm:text-base max-w-xs leading-relaxed">
              We offer Structural & Misc metal design assist, Stair design & PE
              & Calculation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-gray-900 font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition block text-sm sm:text-base"
                >
                  Home
                </a>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 hover:text-gray-900 transition block text-sm sm:text-base"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-gray-600 hover:text-gray-900 transition block text-sm sm:text-base"
                >
                  Our Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/testimonials"
                  className="text-gray-600 hover:text-gray-900 transition block text-sm sm:text-base"
                >
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-gray-900 font-semibold text-lg">
              Contact Links
            </h3>
            <div className="space-y-5">
              <a
                href="mailto:Jryant@d05eng.com"
                className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition text-sm sm:text-base"
              >
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>Jryant@d05eng.com</span>
              </a>
              <a
                href="tel:+18032643390"
                className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition text-sm sm:text-base"
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>(803) 264-3390</span>
              </a>

              {/* Social Icons */}
              <div className="flex gap-6 pt-4">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="text-gray-600 hover:text-gray-900 transition"
                >
                  <FaFacebook className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="text-gray-600 hover:text-gray-900 transition"
                >
                  <RiInstagramFill className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="text-gray-600 hover:text-gray-900 transition"
                >
                  <BsLinkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-500 text-xs sm:text-sm">
            © 2025. All Rights Reserved | D05 Design & Engineering
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
