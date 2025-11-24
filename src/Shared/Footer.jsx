import React from "react";
import { Phone, Mail } from "lucide-react";
import { Link } from "react-router";
import { FaFacebook } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { BsLinkedin } from "react-icons/bs";
import Logo from "../assets/jeff_logo.png";
import DarkLogo from "../assets/darkLogoJeff.png";

const Footer = () => {
  return (
    <footer className=" py-12 border-t-2 border-white">
      <div className="mx-auto px-6 sm:px-8 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
          <div className="space-y-6">
            <div className="flex items-center">
              <img src={Logo} alt="Logo" className=" w-auto dark:hidden" />
              <img
                src={DarkLogo}
                alt="Dark Logo"
                className=" w-auto hidden dark:block"
              />
            </div>
            <p className="text-gray-600 dark:text-white text-sm sm:text-base max-w-xs leading-relaxed">
              We offer Structural & Misc metal design assist, Stair design & PE
              & Calculation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-gray-900 font-semibold text-lg dark:text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition block text-sm sm:text-base dark:text-white"
                >
                  Home
                </a>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 hover:text-gray-900 transition block text-sm sm:text-base dark:text-white"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-gray-600 hover:text-gray-900 transition block text-sm sm:text-base dark:text-white"
                >
                  Our Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/testimonials"
                  className="text-gray-600 hover:text-gray-900 transition block text-sm sm:text-base dark:text-white"
                >
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-gray-900 font-semibold text-lg dark:text-white">
              Contact Links
            </h3>
            <div className="space-y-5">
              <a
                href="mailto:Jryant@d05eng.com"
                className="flex items-center gap-3 text-gray-600  transition text-sm sm:text-base dark:text-white"
              >
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>jryan@d05eng.com</span>
              </a>
              <a
                href="tel:+18032643390"
                className="flex items-center gap-3 text-gray-600  transition text-sm sm:text-base dark:text-white"
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>(862)254-3390</span>
              </a>

              {/* Social Icons */}
              <div className="flex gap-6 pt-4">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="text-gray-600  transition"
                >
                  <FaFacebook className="w-6 h-6 dark:text-white" />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="text-gray-600  transition"
                >
                  <RiInstagramFill className="w-6 h-6 dark:text-white" />
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="text-gray-600  transition"
                >
                  <BsLinkedin className="w-6 h-6 dark:text-white" />
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
