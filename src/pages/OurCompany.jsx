import SEO from "../components/SEO";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaTruck,
  FaWarehouse,
  FaBox,
  FaUsers,
  FaShieldAlt,
  FaRocket,
  FaChartLine,
  FaHandshake,
  FaGlobe,
} from "react-icons/fa";
import aboutUs1 from "../Assets/about_us_1.png";
import aboutUs2 from "../Assets/about_us_2.png";
import aboutUs3 from "../Assets/about_us_3.png";

const OurCompany = () => {
  const features = [
    {
      icon: <FaMapMarkerAlt />,
      title: "Strategic Location",
      desc: "Karmala–Solapur hub: Kandhar, Ujani backwaters, Malshiras, Madha, Pandharpur, Indapur",
    },
    {
      icon: <FaWarehouse />,
      title: "Cold Storage",
      desc: "Complete cold storage chain available",
    },
    {
      icon: <FaBox />,
      title: "Packing Materials",
      desc: "Ready availability of packing resources",
    },
    {
      icon: <FaUsers />,
      title: "Skilled Labor",
      desc: "Plenty of skilled labor in the region",
    },
    {
      icon: <FaShieldAlt />,
      title: "Quality Assurance",
      desc: "Rigorous quality control and certification",
    },
    {
      icon: <FaTruck />,
      title: "JNPT Proximity",
      desc: "Direct connectivity via national highways for efficient farm-to-port movement",
    },
  ];

  const milestones = [
    {
      year: "5-6 years",
      title: "Operating",
      description: "GS Agritech began banana export operations",
      icon: <FaRocket className="text-2xl" />,
    },
    {
      year: "2020",
      title: "Expanded Domestically",
      description: "Expanded business within India",
      icon: <FaChartLine className="text-2xl" />,
    },
    {
      year: "2022",
      title: "International Partnership",
      description:
        "Tie-up with Nirmala Global India Pvt Limited for Gulf region",
      icon: <FaHandshake className="text-2xl" />,
    },
    {
      year: "Present",
      title: "Continuing Growth",
      description: "Continuing to expand and serve clients worldwide",
      icon: <FaGlobe className="text-2xl" />,
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "GS Agritech",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Indapur",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: "15,000+",
      unitText: "farmers",
    },
  };

  return (
    <>
      <SEO
        title="Our Company - GS Agritech | Premium Banana Exporter"
        description="GS Agritech is based in the Karmala–Solapur banana hub (Indapur, Kandhar, Ujani backwaters, Malshiras, Madha, Pandharpur). Complete ecosystem for banana export with 15,000+ farmers network and JNPT-linked logistics."
        keywords="GS Agritech company, Indapur banana exporter, Solapur banana hub, agricultural exporter India, banana export company"
        url="/about/our-company"
        image="/og-image.jpg"
        structuredData={structuredData}
      />

      <div className="min-h-screen-60 mt-24 flex items-center flex-col bg-white ">
        <div className="container-custom w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto"
          >
            {/* Header */}
            <div className="text-center mb-8 md:mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
                OUR COMPANY
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto mb-4"></div>
              <p className="text-lg md:text-xl text-gray-700 font-semibold">
                Operating for{" "}
                <span className="text-primary-600">5-6 years</span> • With a
                network of{" "}
                <span className="text-primary-600">15,000+ farmers</span>
              </p>
            </div>

            {/* Content Grid */}
            <div className="grid w-full lg:grid-cols-2 gap-8 md:gap-12 items-center mb-8 md:mb-12">
              {/* Left - Text */}
              <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
                <p>
                  GS Agritech is a{" "}
                  <strong className="text-gray-900">
                    leading exporter of premium bananas
                  </strong>
                  , operating in the sector for{" "}
                  <strong className="text-gray-900">5-6 years</strong>. We
                  operate in the{" "}
                  <strong className="text-gray-900">
                    Karmala region of Solapur district
                  </strong>
                  —including Kandhar, villages along the Ujani backwaters, and
                  selected areas of Malshiras, Madha, Pandharpur, and Indapur
                  talukas—where a stable agro-climatic environment supports
                  large-scale production of export-grade bananas.
                </p>
                <p>
                  Through our associate platform{" "}
                  <strong className="text-gray-900">
                    Bhumiputra Krushi Udyog Bhandar
                  </strong>
                  , we have maintained close working relationships with farmers
                  in this region for{" "}
                  <strong className="text-gray-900">over 20 years</strong>. We
                  remain in continuous contact with{" "}
                  <strong className="text-gray-900">
                    more than 15,000 farmers
                  </strong>
                  , giving us a strong, dependable sourcing base. Our direct
                  farmer network provides real-time visibility into crop
                  conditions—from fertilizer programs and irrigation to plant
                  protection—enabling efficient export planning and precise
                  allocation to meet importer specifications.
                </p>
                <p>
                  The region offers a strong logistics advantage due to its
                  proximity to{" "}
                  <strong className="text-gray-900">JNPT Port</strong> and
                  direct connectivity via national highways. Efficient
                  farm-to-packhouse-to-port movement ensures predictable transit
                  times, reduced handling risk, and reliable logistics
                  execution.
                </p>
                <p>
                  We have availability of{" "}
                  <strong className="text-gray-900">cold storage</strong>,{" "}
                  <strong className="text-gray-900">packing materials</strong>,
                  and <strong className="text-gray-900">skilled labor</strong>.
                  The complete ecosystem is available here to export bananas
                  efficiently, and we can fulfill large export orders within
                  committed timelines.
                </p>
              </div>

              {/* Right - Features Grid */}
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all"
                  >
                    <div className="text-primary-600 mb-2 text-xl">
                      {feature.icon}
                    </div>
                    <h3 className="font-semibold text-gray-900 text-sm mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-tight">
                      {feature.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Our Journey Section */}
        <div className="container-custom w-full mt-12 md:mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="max-w-7xl mx-auto"
          >
            {/* Header */}
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
                OUR JOURNEY
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto"></div>
            </div>

            {/* Timeline */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="bg-white border-2 border-gray-200 rounded-xl p-5 md:p-6 hover:border-primary-300 hover:shadow-lg transition-all text-center"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-primary-500 to-secondary-500 text-white rounded-full mb-4">
                    {milestone.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-primary-600 mb-2">
                    {milestone.year}
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                    {milestone.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Images at Bottom - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="w-full mt-8 md:mt-16 "
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            <div className="overflow-hidden">
              <img
                src={aboutUs1}
                alt="Banana plantation and farming activities"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="overflow-hidden">
              <img
                src={aboutUs2}
                alt="Farmers working in banana plantation"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="overflow-hidden">
              <img
                src={aboutUs3}
                alt="Banana farming and cultivation"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default OurCompany;
