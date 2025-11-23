import { useState, useEffect } from "react";
import { Menu, X, Home, Info, Briefcase, Mail } from "lucide-react";
import Logo from "../assets/jeff_logo.png";
import { Link, useLocation, useNavigate } from "react-router";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", icon: Home, to: "/", hash: "" },
    { name: "About", icon: Info, to: "/", hash: "about_us" },
    { name: "Projects", icon: Briefcase, to: "/", hash: "projects" },
    { name: "Contact", icon: Mail, to: "/", hash: "contact" },
  ];

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.pathname, location.hash]);

  const handleLinkClick = (to, hash) => {
    navigate(to + (hash ? `#${hash}` : ""));

    if (location.pathname === to) {
      if (hash) {
        const element = document.getElementById(hash);
        element?.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  const isActive = (to, hash) => {
    const isOnHome = location.pathname === "/" || location.pathname === "";
    const currentHash = location.hash.replace("#", "");

    if (to !== "/") return false;

    if (!hash && !currentHash) return true;
    if (hash && currentHash === hash) return true;

    return false;
  };

  return (
    <nav className="sticky top-0 inset-x-0 z-50 md:bg-white/10  backdrop-blur-xl border-b-2 border-white md:px-20 px-4">
      <div className="flex items-center justify-between h-24">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/" onClick={() => handleLinkClick("/", "")}>
            <img
              src={Logo}
              alt="Jeff Logo"
              className="h-14 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleLinkClick(link.to, link.hash)}
              className={`relative text-lg font-medium transition-all hover:cursor-pointer duration-300 px-2 py-1
                ${
                  isActive(link.to, link.hash)
                    ? "text-title font-bold"
                    : "text-title hover:text-white"
                }`}
            >
              {link.name}
              {isActive(link.to, link.hash) && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-title rounded-full"></span>
              )}
            </button>
          ))}
        </div>

        <button
          onClick={toggleMenu}
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-all"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X size={28} className="text-title" />
          ) : (
            <Menu size={28} className="text-title" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-6 space-y-3 bg-white/10 backdrop-blur-xl border-t border-white/20">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => {
                handleLinkClick(link.to, link.hash);
                setIsOpen(false);
              }}
              className={`w-full flex items-center gap-4 px-5 py-4 rounded-xl text-lg font-medium transition-all text-left
                ${
                  isActive(link.to, link.hash)
                    ? "bg-white/20 text-white shadow-lg border border-white/30"
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                }`}
            >
              <link.icon size={22} className="text-title font-bold" />
              <span className="text-title font-bold">{link.name}</span>
              {isActive(link.to, link.hash) && (
                <div className="ml-auto w-2 h-2 bg-title rounded-full animate-pulse"></div>
              )}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
