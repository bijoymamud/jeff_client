import { useState, useEffect } from "react";
import { Menu, X, Home, Info, Briefcase, Mail } from "lucide-react";
import Logo from "../assets/jeff_logo.png";
import DarkLogo from "../assets/darkLogoJeff.png";
import { useDarkMode } from "@/Themes/Themes";
import { NavLink, useLocation, useNavigate } from "react-router";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { darkMode, toggleDarkMode } = useDarkMode();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", icon: Home, to: "/", hash: "" },
    { name: "About", icon: Info, to: "/", hash: "about_us" },
    { name: "Projects", icon: Briefcase, to: "/", hash: "projects" },
    { name: "Testimonial", icon: Briefcase, to: "/", hash: "testimonial" },
    { name: "Contact", icon: Mail, to: "/", hash: "quote" },
  ];

  useEffect(() => setIsOpen(false), [location.pathname]);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: "smooth" }), 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.pathname, location.hash]);

  const handleLinkClick = (to, hash) => {
    navigate(to + (hash ? `#${hash}` : ""));
    if (location.pathname === to) {
      if (hash) {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  const currentHash = location.hash.replace("#", "");
  const isActive = (to, hash) => {
    if (to !== location.pathname) return false;
    if (!hash && !currentHash) return true;
    return hash === currentHash;
  };

  return (
    <nav className="sticky top-0 inset-x-0 z-50 bg-white/30 dark:bg-black/60 backdrop-blur-xl border-b border-white/20 dark:border-gray-800 transition-all duration-300">
      <div className="flex items-center justify-between h-24 px-4 md:px-20">
        {/* Logo */}
        <div className="flex-shrink-0">
          <NavLink to="/" onClick={() => handleLinkClick("/", "")}>
            <img src={Logo} alt="Logo" className=" w-auto dark:hidden" />
            <img
              src={DarkLogo}
              alt="Dark Logo"
              className=" w-auto hidden dark:block"
            />
          </NavLink>
        </div>

        <div className="flex items-center gap-6">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center space-x-10">
            {navLinks.map((link) => {
              const active = isActive(link.to, link.hash);
              return (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link.to, link.hash)}
                  className="relative px-4 py-2 text-lg font-medium transition-all duration-300 group"
                >
                  <span
                    className={`relative z-10 transition-colors duration-300 ${
                      active
                        ? darkMode
                          ? "text-white font-bold"
                          : "text-gray-900 font-bold"
                        : darkMode
                        ? "text-gray-100 group-hover:text-white"
                        : "text-gray-700 group-hover:text-gray-900"
                    }`}
                  >
                    {link.name}
                  </span>

                  {/* Active Underline - Perfect width match */}
                  {active && (
                    <span
                      className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full transition-transform duration-300 origin-left ${
                        darkMode ? "bg-white" : "bg-gray-900"
                      }`}
                    />
                  )}

                  {/* Hover Underline */}
                  {!active && (
                    <span
                      className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-300 ${
                        darkMode ? "bg-white" : "bg-gray-600"
                      }`}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="relative w-14 h-8 rounded-full bg-gray-300 dark:bg-gray-700 transition-all duration-300 focus:outline-none shadow-inner border border-gray-400 dark:border-gray-600"
            aria-label="Toggle Dark Mode"
          >
            <div
              className={`absolute top-1 left-1 w-6 h-6 rounded-full transition-all duration-300 flex items-center justify-center shadow-md ${
                darkMode
                  ? "translate-x-6 bg-gray-900"
                  : "translate-x-0 bg-white"
              }`}
            >
              {darkMode ? (
                <svg
                  className="w-4 h-4 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  className="w-4 h-4 text-gray-800"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </div>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 dark:text-gray-100 p-2 rounded-lg hover:bg-white/20 dark:hover:bg-gray-800/50 transition-all"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-4 py-6 space-y-3 bg-white/10 dark:bg-black/40 backdrop-blur-xl border-t border-white/20 dark:border-gray-800">
          {navLinks.map((link) => {
            const active = isActive(link.to, link.hash);
            return (
              <button
                key={link.name}
                onClick={() => {
                  handleLinkClick(link.to, link.hash);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-4 px-5 py-4 rounded-xl text-lg font-medium transition-all text-left ${
                  active
                    ? darkMode
                      ? "bg-blue-500/20 text-blue-400 border border-blue-400/60 shadow-lg shadow-blue-500/20"
                      : "bg-gray-900/10 text-gray-900 border border-gray-900/30"
                    : darkMode
                    ? "text-gray-100 hover:bg-gray-800/50"
                    : "text-gray-700 hover:bg-white/20"
                }`}
              >
                <link.icon
                  size={22}
                  className={
                    active
                      ? darkMode
                        ? "text-blue-400"
                        : "text-gray-900"
                      : darkMode
                      ? "text-gray-300"
                      : "text-gray-600"
                  }
                />
                <span>{link.name}</span>
                {active && (
                  <div className="ml-auto w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
