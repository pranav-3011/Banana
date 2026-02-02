import SEO from "../components/SEO";
import { motion } from "framer-motion";
import {
  FaGlobe,
  FaShippingFast,
  FaMapMarkerAlt,
  FaHandshake,
  FaCheckCircle,
} from "react-icons/fa";
import iraqMap from "../Assets/iraq.png";
import iranMap from "../Assets/iran.png";
import saudiArabiaMap from "../Assets/saudi_arabia.png";
import turkeyMap from "../Assets/turkey.png";
import afghanistanMap from "../Assets/afghanistan.png";
import { IQ, IR, SA, AE, AF, TR } from "country-flag-icons/react/3x2";

const OurNetwork = () => {
  const exportCountries = [
    {
      name: "Iraq",
      mapImage: iraqMap,
      FlagComponent: IQ,
    },
    {
      name: "Iran",
      mapImage: iranMap,
      FlagComponent: IR,
    },
    {
      name: "Saudi Arabia",
      mapImage: saudiArabiaMap,
      FlagComponent: SA,
    },
    {
      name: "UAE - Dubai",
      mapImage: saudiArabiaMap, // Using Saudi Arabia map as placeholder, can be replaced when UAE map is available
      FlagComponent: AE,
    },
    {
      name: "Afghanistan",
      mapImage: afghanistanMap,
      FlagComponent: AF,
    },
    {
      name: "Turkey",
      mapImage: turkeyMap,
      FlagComponent: TR,
    },
  ];

  const capabilities = [
    {
      icon: <FaGlobe className="text-3xl" />,
      title: "Global Reach",
      description: "Ready to export worldwide with established networks",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <FaShippingFast className="text-3xl" />,
      title: "Logistics Network",
      description: "Efficient shipping routes and reliable delivery",
      gradient: "from-primary-500 to-orange-500",
    },
    {
      icon: <FaMapMarkerAlt className="text-3xl" />,
      title: "Strategic Locations",
      description: "Multiple port connections for seamless exports",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: <FaHandshake className="text-3xl" />,
      title: "Trusted Partners",
      description: "Reliable international network and partnerships",
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "GS Agritech",
    areaServed: [
      { "@type": "Country", name: "Iraq" },
      { "@type": "Country", name: "Iran" },
      { "@type": "Country", name: "Saudi Arabia" },
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "Country", name: "Afghanistan" },
      { "@type": "Country", name: "Turkey" },
    ],
  };

  return (
    <>
      <SEO
        title="Our Network - GS Agritech | Global Export Network"
        description="GS Agritech is ready to export throughout countries. Currently exporting to Iraq, Iran, Saudi Arabia, UAE-Dubai, Afghanistan, and Turkey."
        keywords="banana export network, international banana trade, global export destinations, banana exporter countries, GS Agritech network"
        url="/banana/our-network"
        image="/og-image.jpg"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 py-16 md:py-24">
        <div className="container-custom w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto"
          >
            {/* Hero Header Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16 md:mb-20"
            >
              <div className="inline-block mb-6">
                <span className="bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 px-6 py-2 rounded-full text-sm font-semibold shadow-sm">
                  Global Export Network
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Our{" "}
                <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                  International Network
                </span>
              </h1>
              <div className="w-24 h-1.5 bg-gradient-to-r from-primary-600 via-secondary-600 to-primary-600 mx-auto mb-8 rounded-full"></div>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mt-8 leading-relaxed">
                Connecting premium quality Cavendish G9 bananas to markets
                across the globe
              </p>
            </motion.div>

            {/* Introduction Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-20 md:mb-24"
            >
              <div className="relative bg-green-50 rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden">
                {/* Decorative Background Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary-100/30 to-secondary-100/30 rounded-full blur-3xl -mr-32 -mt-32"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-secondary-100/30 to-primary-100/30 rounded-full blur-3xl -ml-32 -mb-32"></div>

                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                    <div className="flex-1 text-center ">
                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Ready to Export Throughout Countries
                      </h2>
                      <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                        GS Agritech is{" "}
                        <strong className="text-gray-900">
                          ready and committed
                        </strong>{" "}
                        to exporting our premium Cavendish G9 bananas throughout
                        countries worldwide. We have established a robust export
                        network with strategic logistics partnerships to ensure
                        seamless delivery across international borders.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Current Export Countries Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mb-20 md:mb-24"
            >
              <div className="text-center mb-12 md:mb-16">
                <div className="inline-flex items-center gap-2 mb-4">
                  <FaCheckCircle className="text-primary-600 text-xl" />
                  <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
                    Active Export Destinations
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  Currently We Are Exporting To
                </h2>
                <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
                  Our active export destinations with reliable logistics
                  networks and strategic partnerships
                </p>
              </div>

              {/* Countries Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                {exportCountries.map((country, index) => {
                  const FlagComponent = country.FlagComponent;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.95, y: 30 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                      whileHover={{ y: -8, scale: 1.02 }}
                      className="group"
                    >
                      <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                        {/* Country Header */}
                        <div className="relative bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-600 p-6 text-center overflow-hidden">
                          <div className="absolute inset-0 bg-black/5"></div>
                          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
                          <div className="relative z-10">
                            <div className="mb-3 transform group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                              <FlagComponent
                                className="w-16 h-12 md:w-20 md:h-14 rounded-md shadow-lg border-2 border-white/20"
                                title={`${country.name} flag`}
                              />
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-white drop-shadow-sm">
                              {country.name}
                            </h3>
                          </div>
                        </div>

                        {/* Map */}
                        <div className="relative h-56 md:h-64 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          <img
                            src={country.mapImage}
                            alt={`${country.name} Map`}
                            className="relative z-10 w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500"
                          />
                          {/* Shine effect on hover */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        </div>

                        {/* Footer Badge */}
                        <div className="p-4 bg-gradient-to-r from-gray-50 to-gray-100 border-t border-gray-200 text-center">
                          <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary-700 bg-white px-4 py-2 rounded-full shadow-sm">
                            <FaShippingFast className="text-primary-500" />
                            <span>Active Export</span>
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Export Capabilities Section */}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default OurNetwork;
