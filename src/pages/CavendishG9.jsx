import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { FaCheckCircle, FaLeaf, FaStar, FaShieldAlt } from "react-icons/fa";
import box1 from "../Assets/box_1.png";
import box2 from "../Assets/box_2.png";
import box3 from "../Assets/box_3.png";

const CavendishG9 = () => {
  const features = [
    { icon: <FaCheckCircle />, title: "Premium Quality", desc: "Grade A+ Cavendish G9 bananas" },
    { icon: <FaLeaf />, title: "Natural Growth", desc: "Grown without harmful chemicals" },
    { icon: <FaStar />, title: "Export Ready", desc: "International quality standards" },
    { icon: <FaShieldAlt />, title: "Certified", desc: "ISO and HACCP certified" },
  ];

  return (
    <>
      <Helmet>
        <title>Cavendish G9 - GS Agritech | Premium Banana Variety</title>
        <meta name="description" content="Premium Cavendish G9 bananas - the finest quality banana variety for export. Grade A+ quality, certified, and export-ready." />
      </Helmet>

      <div className="py-12 md:py-16">
        <div className="container-custom w-full">
          {/* Box Images at Top */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
              {[box1, box2, box3].map((box, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="relative"
                >
                  <div className="overflow-hidden hover:shadow-lg transition-all duration-300  p-3">
                    <img
                      src={box}
                      alt={`Premium Banana Packaging ${index + 1}`}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            {/* Header */}
            <div className="text-center mb-8 md:mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
                CAVENDISH G9
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto"></div>
            </div>

            {/* Content Grid */}
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Left - Text */}
              <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
                <p>
                  <strong className="text-gray-900">Cavendish G9</strong> is our flagship banana variety, 
                  known for its exceptional quality, consistent size, and superior taste. This premium variety 
                  is specifically selected for international export markets.
                </p>
                <p>
                  Our Cavendish G9 bananas are cultivated with meticulous care, ensuring they meet the highest 
                  international quality standards. Each banana is handpicked at the perfect ripeness stage to 
                  ensure optimal freshness upon arrival at your destination.
                </p>
                <p>
                  We specialize exclusively in exporting <strong className="text-gray-900">Cavendish G9 bananas</strong>, 
                  making us experts in this variety. Our extensive experience ensures consistent quality, 
                  reliable supply, and seamless export processes.
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
                    <div className="text-primary-600 mb-2 text-xl">{feature.icon}</div>
                    <h3 className="font-semibold text-gray-900 text-sm mb-1">{feature.title}</h3>
                    <p className="text-xs text-gray-600 leading-tight">{feature.desc}</p>
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

export default CavendishG9;
