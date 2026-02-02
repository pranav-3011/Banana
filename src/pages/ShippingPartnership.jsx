import SEO from "../components/SEO";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import vesselImage from "../Assets/vessel_image.jpg";
import nirmalaLogo from "../Assets/nirmala_logo.png";

const ShippingPartnership = () => {
  const benefits = [
    "Faster & Hassle-Free Documentation",
    "Smooth Customs Clearance",
    "End-to-End Logistics Support",
    "Temperature-Controlled Reefer Containers",
    "Reduced Transit Time",
    "Efficient Port Handling & Delivery",
    "Minimized Cargo Damage & Spoilage",
    "Cost-Effective Shipping Solutions",
    "Real-Time Shipment Tracking",
    "Compliance with International Export Standards",
    "Reliable & Trusted Shipping Partner",
  ];

  // Split benefits into 3 columns
  const getColumnData = (columnIndex) => {
    const itemsPerColumn = Math.ceil(benefits.length / 3);
    const start = columnIndex * itemsPerColumn;
    const end = Math.min(start + itemsPerColumn, benefits.length);
    return benefits.slice(start, end);
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "GS Agritech",
    knowsAbout: {
      "@type": "Organization",
      name: "Nirmala Global India Pvt. Ltd.",
      url: "https://nirmalaglobal.com",
    },
  };

  return (
    <>
      <SEO
        title="Shipping Partnership - GS Agritech | Nirmala Global India Pvt. Ltd."
        description="GS Agritech's strategic partnership with Nirmala Global India Pvt. Ltd. for seamless shipping, customs clearance, and logistics support."
        keywords="shipping partnership, Nirmala Global India, logistics partner, customs clearance, shipping line, export logistics"
        url="/about/shipping-partnership"
        image="/og-image.jpg"
        structuredData={structuredData}
      />

      <div className=" bg-gradient-to-b from-gray-50 via-white to-gray-50 py-16 md:py-24 ">
        <div className="container-custom w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto"
          >
            {/* Header Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-center mb-12 md:mb-16"
            >
              <div className="inline-block mb-6"></div>
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                SHIPPING LINE PARTNERSHIP
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto"></div>
            </motion.div>

            {/* Partnership Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-12 md:mb-16"
            >
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 overflow-hidden relative">
                {/* Decorative Background Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary-100/30 to-secondary-100/30 rounded-full blur-3xl -mr-32 -mt-32"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-secondary-100/30 to-primary-100/30 rounded-full blur-3xl -ml-32 -mb-32"></div>

                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row items-center gap-8 mb-6">
                    <div className="flex-shrink-0">
                      <div className="bg-white rounded-2xl p-4 md:p-6 shadow-lg border border-gray-200">
                        <img
                          src={nirmalaLogo}
                          alt="Nirmala Global India Pvt. Ltd. Logo"
                          className="h-24 md:h-32 w-auto object-contain"
                        />
                      </div>
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                        Tie-Up with Nirmala Global India Pvt. Ltd.
                      </h2>
                      <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-3">
                        GS Agritech has established a strategic partnership with{" "}
                        <strong className="text-gray-900">
                          Nirmala Global India Pvt. Ltd.
                        </strong>
                        , a trusted shipping line that makes customs clearance,
                        port of delivery, and all logistics processes seamless
                        and efficient.
                      </p>
                      <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                        This partnership ensures faster documentation, smooth
                        customs clearance, and hassle-free shipping for all our
                        export operations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Hero Section with Vessel Image */}
            <section className="relative h-[65vh] flex items-center text-white overflow-hidden rounded-3xl mb-12 md:mb-16 shadow-2xl">
              <div
                className="absolute inset-0 w-full h-full"
                style={{
                  backgroundImage: `url(${vesselImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-800/70 to-gray-900/80"></div>
              <div className="relative z-10 text-left max-w-2xl mx-8 md:mx-16 lg:mx-24">
                <h1 className="text-5xl md:text-7xl font-extrabold mb-4 drop-shadow">
                  Nirmala Global India Pvt Ltd
                </h1>
                <p className="text-xl md:text-2xl mb-8 drop-shadow font-medium">
                  A new era of global shipping—innovative, transparent, and
                  growing every day.
                </p>
                <div className="flex justify-start">
                  <a
                    href="https://nirmalaglobal.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-primary-900 font-semibold px-8 py-3 rounded shadow hover:bg-primary-100 transition"
                  >
                    Visit Now
                  </a>
                </div>
              </div>
            </section>

            {/* Benefits Table Section */}
            <motion.div
              id="benefits-section"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mb-12"
            >
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Value Added Through Our{" "}
                  <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                    Shipping Partner
                  </span>
                </h2>
                <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
                  Comprehensive shipping solutions that streamline your export
                  process
                </p>
              </div>

              {/* 3-Column Table */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                  {/* Column 1 */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="p-6 md:p-8"
                  >
                    <div className="space-y-4">
                      {getColumnData(0).map((benefit, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <FaCheckCircle className="text-primary-600 mt-1 flex-shrink-0" />
                          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                            {benefit}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Column 2 */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    className="p-6 md:p-8"
                  >
                    <div className="space-y-4">
                      {getColumnData(1).map((benefit, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <FaCheckCircle className="text-primary-600 mt-1 flex-shrink-0" />
                          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                            {benefit}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Column 3 */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="p-6 md:p-8"
                  >
                    <div className="space-y-4">
                      {getColumnData(2).map((benefit, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <FaCheckCircle className="text-primary-600 mt-1 flex-shrink-0" />
                          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                            {benefit}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ShippingPartnership;
