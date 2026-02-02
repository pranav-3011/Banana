import SEO from "../components/SEO";
import { motion } from "framer-motion";
import {
  FaSeedling,
  FaHandshake,
  FaChartLine,
  FaUsers,
  FaLeaf,
  FaCheckCircle,
} from "react-icons/fa";
import whoAreWeBg from "../Assets/who_are_we.png";

const WhoAreWe = () => {
  const values = [
    {
      icon: <FaSeedling />,
      title: "Farming Background",
      desc: "Strong agricultural roots",
    },
    {
      icon: <FaHandshake />,
      title: "20 Years Experience",
      desc: "Bhumiputra Krushi Udyog Bhandar Agency",
    },
    {
      icon: <FaUsers />,
      title: "Farmer Connections",
      desc: "Thousands of farmers in region",
    },
    {
      icon: <FaLeaf />,
      title: "Field Consulting",
      desc: "On-field crop disease management",
    },
    {
      icon: <FaChartLine />,
      title: "Accurate Data",
      desc: "Real-time harvest schedules",
    },
    {
      icon: <FaCheckCircle />,
      title: "Consistent Quality",
      desc: "High-quality shipments",
    },
  ];

  return (
    <>
      <SEO
        title="Who Are We - GS Agritech | Our Story & Background"
        description="We come from a strong farming background with 20 years of agency experience. Closely connected with thousands of farmers through Bhumiputra Krushi Udyog Bhandar Agency."
        keywords="who are we, GS Agritech background, farming background, Bhumiputra Krushi Udyog Bhandar, farmer network, agricultural agency"
        url="/about/who-are-we"
        image="/og-image.jpg"
      />

      <div className="min-h-screen flex items-center bg-white py-12 md:py-16 relative">
        {/* Background Image */}
        <div className="absolute w-full h-full bg- bg-center inset-0 z-0">
          <img
            src={whoAreWeBg}
            alt="Who Are We Background"
            className="w-full h-full object-cover lg:object-fill"
          />
        </div>

        <div className="container-custom md:-translate-y-40 w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            {/* Header */}
            <div className="text-center mb-8 md:mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
                Who Are We
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto"></div>
            </div>

            {/* Content Grid */}
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Left - Text */}
              <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
                <p>
                  We come from a{" "}
                  <strong className="text-gray-900">
                    strong farming background
                  </strong>{" "}
                  and run an agency called{" "}
                  <strong className="text-gray-900">
                    "Bhumiputra Krushi Udyog Bhandar Agency"
                  </strong>{" "}
                  for the last{" "}
                  <strong className="text-gray-900">20 years</strong>.
                </p>
                <p>
                  Through our work, we are closely connected with{" "}
                  <strong className="text-gray-900">
                    thousands of farmers
                  </strong>{" "}
                  in this region. We provide them with{" "}
                  <strong className="text-gray-900">on-field consulting</strong>{" "}
                  and{" "}
                  <strong className="text-gray-900">
                    crop disease management guidance
                  </strong>{" "}
                  by visiting farms.
                </p>
                <p>
                  This has helped us build very close relationships with
                  farmers. Because of this, we have{" "}
                  <strong className="text-gray-900">
                    accurate and timely information
                  </strong>{" "}
                  on harvest schedules and the quality of bananas.
                </p>
                <p>
                  This data allows us to plan exports efficiently and deliver{" "}
                  <strong className="text-gray-900">
                    consistently high-quality shipments
                  </strong>{" "}
                  to our clients worldwide.
                </p>
              </div>

              {/* Right - Values Grid */}
              <div className="grid grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all"
                  >
                    <div className="text-primary-600 mb-2 text-xl">
                      {value.icon}
                    </div>
                    <h3 className="font-semibold text-gray-900 text-sm mb-1">
                      {value.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-tight">
                      {value.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default WhoAreWe;
