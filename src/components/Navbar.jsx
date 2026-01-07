import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaPhone, FaEnvelope } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../Assets/banana_logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Export Process", id: "export-process" },
    { name: "Products", id: "products" },
    { name: "Why Choose Us", id: "why-us" },
    { name: "Gallery", id: "gallery" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary-600 text-white py-2 hidden md:block">
        <div className="container-custom flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <a
              href="tel:+919970849999"
              className="flex items-center hover:text-primary-100 transition"
            >
              <FaPhone className="mr-2" />
              +91 9970849999
            </a>
            <a
              href="mailto:info@gsagritech.com"
              className="flex items-center hover:text-primary-100 transition"
            >
              <FaEnvelope className="mr-2" />
              info@gsagritech.com
            </a>
          </div>
          <div className="text-primary-100">
            Premium Banana Exporter | Fresh Quality Worldwide
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-lg py-2"
            : "bg-white/95 backdrop-blur py-2"
        }`}
      >
        <div className="container-custom">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <img
                src={logo}
                alt="GS Agritech Logo"
                className="h-24 w-auto object-contain"
              />
              <div>
                <h1 className="text-2xl font-bold text-gray-900 leading-tight">
                  GS AGRITECH
                </h1>
                <p className="text-xs text-gray-600">Premium Banana Exporter</p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
              <button
                onClick={() => scrollToSection("contact")}
                className="btn-primary"
              >
                Get Quote
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-gray-700 hover:text-primary-600 transition"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t"
            >
              <div className="container-custom py-4">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => scrollToSection(link.id)}
                    className="block w-full text-left py-3 text-gray-700 hover:text-primary-600 hover:bg-gray-50 px-4 rounded transition"
                  >
                    {link.name}
                  </motion.button>
                ))}
                <button
                  onClick={() => scrollToSection("contact")}
                  className="btn-primary w-full mt-4"
                >
                  Get Quote
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
