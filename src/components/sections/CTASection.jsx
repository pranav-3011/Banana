import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import bananaicon from "../../Assets/banana_logo.png";

const CTASection = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-500/10 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Icon/Badge */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-2xl mb-8 mx-auto shadow-xl"
          >
            <img src={bananaicon} alt="banana icon" className="w-full h-full object-contain" />
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Ready to Import Premium
            <span className="block text-transparent bg-clip-text bg-gradient-to-r mt-2 from-primary-400 to-secondary-400">
              Cavendish G9 Bananas?
            </span>
          </h2>

          <p className="text-lg md:text-xl mb-10 text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of satisfied clients worldwide. With Cavendish G9 bananas as our
            exclusive product, we're ready to serve all your banana import
            requirements with the same excellence.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Get Started Now
            </Link>
            <Link
              to="/export-process"
              className="bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              Learn Our Process
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
