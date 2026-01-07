import { motion } from "framer-motion";
import { FaShippingFast, FaCheckCircle, FaGlobeAmericas } from "react-icons/fa";
import bananahero from "../../Assets/hero_image5.png";

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 via-primary-800/85 to-secondary-900/90 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=1920&q=80"
          alt="Fresh Bananas"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-32 -right-32 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-32 -left-32 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="container-custom relative ">
        <div className="grid lg:grid-cols-2 gap-9 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-semibold border border-white/30">
                🍌 Premium Quality Since 2010
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              World's Leading
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-green-300">
                Banana Exporter
              </span>
              Premium Quality Worldwide
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-200 mb-8 leading-relaxed"
            >
              Leading banana export company specializing in premium Cavendish
              bananas, serving 50+ countries worldwide with excellence,
              reliability, and a seamless export process. Your trusted partner
              in international banana trade.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-white text-primary-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Get a Quote
              </button>
              <button
                onClick={() => scrollToSection("export-process")}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-primary-700 transition-all duration-300 transform hover:scale-105"
              >
                Learn More
              </button>
            </motion.div>

            {/* Quick Stats */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-6"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">50+</div>
                <div className="text-sm text-gray-300">Countries</div>
              </div>
              <div className="text-center border-x border-white/30">
                <div className="text-3xl font-bold text-white mb-1">10K+</div>
                <div className="text-sm text-gray-300">Shipments</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">99%</div>
                <div className="text-sm text-gray-300">Satisfaction</div>
              </div>
            </motion.div> */}
          </motion.div>

          {/* Right Content - Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Main Image */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="relative z-10"
              >
                <img
                  src={bananahero}
                  alt="Fresh Bananas"
                  className="rounded-3xl object-cover w-full h-full scale-150"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
