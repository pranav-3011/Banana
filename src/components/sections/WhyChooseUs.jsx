import { motion } from "framer-motion";
import {
  FaLeaf,
  FaShieldAlt,
  FaDollarSign,
  FaHeadset,
  FaTruck,
  FaCertificate,
  FaHandshake,
  FaGlobeAmericas,
} from "react-icons/fa";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <FaLeaf className="text-3xl" />,
      title: "Premium Quality",
      description: "Grade A+ bananas from certified organic farms",
    },
    {
      icon: <FaShieldAlt className="text-3xl" />,
      title: "Quality Assurance",
      description: "ISO 22000:2018 and HACCP certified",
    },
    {
      icon: <FaGlobeAmericas className="text-3xl" />,
      title: "Global Reach",
      description: "Exporting to 50+ countries worldwide",
    },
    {
      icon: <FaDollarSign className="text-3xl" />,
      title: "Competitive Pricing",
      description: "Direct sourcing, best prices",
    },
    {
      icon: <FaHeadset className="text-3xl" />,
      title: "24/7 Support",
      description: "Dedicated customer support team",
    },
    {
      icon: <FaTruck className="text-3xl" />,
      title: "End-to-End Logistics",
      description: "Complete farm to port management",
    },
    {
      icon: <FaCertificate className="text-3xl" />,
      title: "Certified & Compliant",
      description: "International trade regulations",
    },
    {
      icon: <FaHandshake className="text-3xl" />,
      title: "Trusted Partnership",
      description: "Long-term reliable relationships",
    },
  ];

  return (
    <section
      id="why-us"
      className="section-padding bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Your <span className="text-primary-600">Trusted Partner</span> in
            Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With over 15 years of expertise, we've perfected the art of banana
            export. Here's what sets us apart from the competition.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gray-100 text-primary-600 rounded-xl mb-4">
                {reason.icon}
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">
                {reason.title}
              </h3>
              <p className="text-sm text-gray-600">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
