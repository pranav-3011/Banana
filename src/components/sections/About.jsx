import { motion } from "framer-motion";
import { FaLeaf, FaAward, FaHandshake, FaGlobeAsia } from "react-icons/fa";

const About = () => {
  const features = [
    {
      icon: <FaLeaf className="text-4xl" />,
      title: "Premium Quality",
      description:
        "We source only the finest Cavendish G9 bananas from certified farms, ensuring top-grade quality in every shipment.",
      color: "text-green-600",
    },
    {
      icon: <FaAward className="text-4xl" />,
      title: "Certified Excellence",
      description:
        "APEDA certified processes and international quality standards compliance for your peace of mind.",
      color: "text-blue-600",
    },
    {
      icon: <FaHandshake className="text-4xl" />,
      title: "15,000+ Farmer Network",
      description:
        "Strong relationship with 15,000+ farmers through Bhumiputra Krushi Udyog Bhandar—over 20 years in the region with real-time crop visibility.",
      color: "text-primary-600",
    },
    {
      icon: <FaGlobeAsia className="text-4xl" />,
      title: "JNPT-Linked Logistics",
      description:
        "Proximity to JNPT Port and national highways for efficient farm-to-packhouse-to-port movement and reliable delivery.",
      color: "text-purple-600",
    },
  ];

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=800&q=80"
                alt="Banana Plantation"
                className="rounded-3xl shadow-2xl"
              />
            </div>

            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -top-8 -left-8 bg-white p-6 rounded-2xl shadow-xl z-10"
            >
              <div className="text-3xl mb-2">🏆</div>
              <div className="text-sm font-semibold text-gray-900">Award Winning</div>
              <div className="text-xs text-gray-600">Premium Banana Exporter</div>
            </motion.div> */}
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-4">
              <span className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold">
                About GS Agritech
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Trusted Partner in
              <span className="text-primary-600"> Banana Exports</span>
            </h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              GS Agritech is a premier banana export company operating in the
              sector for 5-6 years. We specialize exclusively in exporting
              premium Cavendish G9 bananas from the Karmala region of Solapur
              district—including Kandhar, villages along the Ujani backwaters,
              and selected areas of Malshiras, Madha, Pandharpur, and Indapur
              talukas—where a stable agro-climatic environment supports
              large-scale production of export-grade bananas.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Through our associate platform Bhumiputra Krushi Udyog Bhandar, we
              have maintained close working relationships with farmers in this
              region for over 20 years. We remain in continuous contact with{" "}
              <strong className="text-gray-900">
                more than 15,000 farmers
              </strong>
              , giving us a strong, dependable sourcing base. Unlike
              conventional models, our direct farmer network provides real-time
              visibility into crop conditions—from fertilizer programs and
              irrigation to plant protection—enabling efficient export planning
              and precise allocation to meet your quality and volume
              requirements. The region’s proximity to JNPT Port and national
              highways ensures predictable transit times and reliable logistics
              for perishable produce.
            </p>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className={`${feature.color} mt-1`}>{feature.icon}</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="btn-primary">Download Brochure</button>
              <button className="btn-outline">View Certifications</button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
