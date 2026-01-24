import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaPhone, FaEnvelope, FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../Assets/banana_logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [bananaDropdownOpen, setBananaDropdownOpen] = useState(false);
  const aboutDropdownRef = useRef(null);
  const bananaDropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (aboutDropdownRef.current && !aboutDropdownRef.current.contains(event.target)) {
        setAboutDropdownOpen(false);
      }
      if (bananaDropdownRef.current && !bananaDropdownRef.current.contains(event.target)) {
        setBananaDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { name: "Products", path: "/products" },
    { name: "Why Choose Us", path: "/why-choose-us" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  const aboutSubLinks = [
    { name: "Our Company", path: "/about/our-company" },
    { name: "Who Are We", path: "/about/who-are-we" },
    { name: "Our Team", path: "/about/our-team" },
    { name: "CSR", path: "/about/csr" },
  ];

  const bananaSubLinks = [
    { name: "Cavendish G9", path: "/banana/cavendish-g9" },
    { name: "Our Network", path: "/banana/our-network" },
    { name: "Our Suppliers", path: "/banana/our-suppliers" },
  ];

  return (
    <>
      {/* Top Bar */}
      {/* <div className="bg-primary-600 text-white py-2 hidden md:block">
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
            Premium Cavendish G9 Banana Exporter | Fresh Quality Worldwide
          </div>
        </div>
      </div> */}

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
                <p className="text-xs text-gray-600">Premium Cavendish G9 Banana Exporter</p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link
                to="/"
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-300 relative group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              
              {/* About Dropdown */}
              <div className="relative" ref={aboutDropdownRef}>
                <button
                  onClick={() => {
                    setAboutDropdownOpen(!aboutDropdownOpen);
                    setBananaDropdownOpen(false);
                  }}
                  className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-300 relative group flex items-center space-x-1"
                >
                  <span>About</span>
                  <FaChevronDown className={`text-xs transition-transform duration-300 ${aboutDropdownOpen ? 'rotate-180' : ''}`} />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300"></span>
                </button>
                <AnimatePresence>
                  {aboutDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
                    >
                      {aboutSubLinks.map((link) => (
                        <Link
                          key={link.path}
                          to={link.path}
                          onClick={() => setAboutDropdownOpen(false)}
                          className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Banana Dropdown */}
              <div className="relative" ref={bananaDropdownRef}>
                <button
                  onClick={() => {
                    setBananaDropdownOpen(!bananaDropdownOpen);
                    setAboutDropdownOpen(false);
                  }}
                  className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-300 relative group flex items-center space-x-1"
                >
                  <span>Banana</span>
                  <FaChevronDown className={`text-xs transition-transform duration-300 ${bananaDropdownOpen ? 'rotate-180' : ''}`} />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300"></span>
                </button>
                <AnimatePresence>
                  {bananaDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
                    >
                      {bananaSubLinks.map((link) => (
                        <Link
                          key={link.path}
                          to={link.path}
                          onClick={() => setBananaDropdownOpen(false)}
                          className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
              <Link
                to="/contact"
                className="btn-primary"
              >
                Get Quote
              </Link>
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
                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-left py-3 text-gray-700 hover:text-primary-600 hover:bg-gray-50 px-4 rounded transition"
                >
                  Home
                </Link>

                {/* Mobile About Dropdown */}
                <div className="border-t border-gray-200 mt-2 pt-2">
                  <button
                    onClick={() => {
                      setAboutDropdownOpen(!aboutDropdownOpen);
                      setBananaDropdownOpen(false);
                    }}
                    className="block w-full text-left py-3 text-gray-700 hover:text-primary-600 hover:bg-gray-50 px-4 rounded transition flex items-center justify-between"
                  >
                    <span>About</span>
                    <FaChevronDown className={`text-xs transition-transform duration-300 ${aboutDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {aboutDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        {aboutSubLinks.map((link, index) => (
                          <Link
                            key={link.path}
                            to={link.path}
                            onClick={() => {
                              setIsOpen(false);
                              setAboutDropdownOpen(false);
                            }}
                            className="block w-full text-left py-2 pl-8 text-gray-600 hover:text-primary-600 hover:bg-gray-50 px-4 rounded transition text-sm"
                          >
                            {link.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile Banana Dropdown */}
                <div className="border-t border-gray-200 mt-2 pt-2">
                  <button
                    onClick={() => {
                      setBananaDropdownOpen(!bananaDropdownOpen);
                      setAboutDropdownOpen(false);
                    }}
                    className="block w-full text-left py-3 text-gray-700 hover:text-primary-600 hover:bg-gray-50 px-4 rounded transition flex items-center justify-between"
                  >
                    <span>Banana</span>
                    <FaChevronDown className={`text-xs transition-transform duration-300 ${bananaDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {bananaDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        {bananaSubLinks.map((link, index) => (
                          <Link
                            key={link.path}
                            to={link.path}
                            onClick={() => {
                              setIsOpen(false);
                              setBananaDropdownOpen(false);
                            }}
                            className="block w-full text-left py-2 pl-8 text-gray-600 hover:text-primary-600 hover:bg-gray-50 px-4 rounded transition text-sm"
                          >
                            {link.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className="block w-full text-left py-3 text-gray-700 hover:text-primary-600 hover:bg-gray-50 px-4 rounded transition"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="btn-primary w-full mt-4 block text-center"
                >
                  Get Quote
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
