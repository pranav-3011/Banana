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
  FaFileAlt,
  FaCheckCircle,
  FaSnowflake,
  FaClock,
  FaWarehouse,
  FaMapMarkerAlt,
} from "react-icons/fa";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <FaLeaf className="text-3xl" />,
      title: "Premium Quality",
      description: "Grade A+ Cavendish G9 bananas from certified organic farms",
    },
    {
      icon: <FaShieldAlt className="text-3xl" />,
      title: "Quality Assurance",
      description: "APEDA certified",
    },
    {
      icon: <FaGlobeAmericas className="text-3xl" />,
      title: "Global Reach",
      description: "Exporting to 10+ countries worldwide",
    },
    {
      icon: <FaFileAlt className="text-3xl" />,
      title: "Faster Documentation",
      description: "Hassle-free documentation with our shipping partner",
    },
    {
      icon: <FaCheckCircle className="text-3xl" />,
      title: "Smooth Customs Clearance",
      description: "Seamless customs clearance process",
    },
    {
      icon: <FaTruck className="text-3xl" />,
      title: "End-to-End Logistics",
      description: "Complete logistics support from farm to port",
    },
    {
      icon: <FaSnowflake className="text-3xl" />,
      title: "Temperature-Controlled",
      description: "Reefer containers for optimal cargo preservation",
    },
    {
      icon: <FaClock className="text-3xl" />,
      title: "Reduced Transit Time",
      description: "Efficient shipping routes for faster delivery",
    },
    {
      icon: <FaWarehouse className="text-3xl" />,
      title: "Efficient Port Handling",
      description: "Expert port handling and delivery services",
    },
    {
      icon: <FaDollarSign className="text-3xl" />,
      title: "Cost-Effective Solutions",
      description: "Competitive pricing with direct sourcing",
    },
    {
      icon: <FaMapMarkerAlt className="text-3xl" />,
      title: "Real-Time Tracking",
      description: "Track your shipment in real-time",
    },
    {
      icon: <FaCertificate className="text-3xl" />,
      title: "International Compliance",
      description: "Compliance with international export standards",
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
            With over 8+ years of expertise, we've perfected the art of Cavendish G9 banana
            export. Combined with our strategic shipping partnership with Nirmala Global India Pvt. Ltd., 
            we offer comprehensive solutions that set us apart from the competition.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
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
