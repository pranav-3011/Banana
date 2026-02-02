import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../Assets/banana_logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center  space-x-3 mb-6">
              <img
                src={logo}
                alt="GS Agritech Logo"
                className="h-24 w-auto bg-white  p-1 object-contain"
              />
              <div>
                <h3 className="text-xl font-bold text-white">GS Agritech</h3>
                <p className="text-xs text-gray-400">
                  Premium Cavendish G9 Banana Exporter
                </p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Operating for 5-6 years, GS Agritech is a leading banana export
              company specializing exclusively in premium Cavendish G9 bananas.
              With 5-6 years of experience and a network of 15,000+ farmers, we
              deliver quality, reliability, and excellence in every shipment to
              10+ countries worldwide.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
              >
                <FaInstagram />
              </a>
              <a
                href="https://wa.me/911234567890"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="hover:text-primary-500 transition-colors hover:translate-x-2 inline-block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-primary-500 transition-colors hover:translate-x-2 inline-block"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/banana/cavendish-g9"
                  className="hover:text-primary-500 transition-colors hover:translate-x-2 inline-block"
                >
                  Cavendish G9
                </Link>
              </li>
              <li>
                <Link
                  to="/banana/our-network"
                  className="hover:text-primary-500 transition-colors hover:translate-x-2 inline-block"
                >
                  Our Network
                </Link>
              </li>
              <li>
                <Link
                  to="/why-choose-us"
                  className="hover:text-primary-500 transition-colors hover:translate-x-2 inline-block"
                >
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="hover:text-primary-500 transition-colors hover:translate-x-2 inline-block"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-primary-500 transition-colors hover:translate-x-2 inline-block"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li className="hover:text-primary-500 transition-colors">
                Premium Cavendish G9 Bananas
              </li>
              <li className="hover:text-primary-500 transition-colors">
                APEDA Certified Quality Assurance
              </li>
              <li className="hover:text-primary-500 transition-colors">
                End-to-End Logistics Support
              </li>
              <li className="hover:text-primary-500 transition-colors">
                Shipping Partnership (Nirmala Global)
              </li>
              <li className="hover:text-primary-500 transition-colors">
                Customs Clearance Services
              </li>
              <li className="hover:text-primary-500 transition-colors">
                Temperature-Controlled Shipping
              </li>
              <li className="hover:text-primary-500 transition-colors">
                Real-Time Shipment Tracking
              </li>
              <li className="hover:text-primary-500 transition-colors">
                Export Documentation Support
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-primary-500 mt-1 mr-3 flex-shrink-0" />
                <span>
                  Indapur-Akluj Road, Shivajinagar, Indapur, Dist. Pune,
                  Maharashtra, India
                </span>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-primary-500 mr-3" />
                <div className="flex flex-col">
                  <a
                    href="tel:+919970849999"
                    className="hover:text-primary-500 transition-colors"
                  >
                    +91 9970849999
                  </a>
                  <a
                    href="tel:+919850419073"
                    className="hover:text-primary-500 transition-colors text-sm"
                  >
                    +91 9850419073
                  </a>
                </div>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-primary-500 mr-3" />
                <div className="flex flex-col">
                  <a
                    href="mailto:info@gsagritech.com"
                    className="hover:text-primary-500 transition-colors"
                  >
                    info@gsagritech.com
                  </a>
                  <a
                    href="mailto:export@gsagritech.com"
                    className="hover:text-primary-500 transition-colors text-sm"
                  >
                    export@gsagritech.com
                  </a>
                </div>
              </li>
            </ul>
            {/* <div className="mt-6">
              <h4 className="text-white font-semibold mb-2">Business Hours</h4>
              <p className="text-sm">Monday - Saturday: 9:00 AM - 6:00 PM</p>
              <p className="text-sm">Sunday: Closed</p>
            </div> */}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              © {currentYear} GS Agritech. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-primary-500 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary-500 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary-500 transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
