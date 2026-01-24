import { motion } from "framer-motion";
import { FaCheckCircle, FaLeaf, FaStar, FaShippingFast } from "react-icons/fa";
import bananaHeroImage from "../../Assets/cavendish_right.png";
import bananaHeroImage2 from "../../Assets/cavendish_left.png";

const PremiumShowcase = () => {
  const highlights = [
    {
      icon: <FaCheckCircle className="text-2xl" />,
      title: "100% Natural",
      description: "Grown without harmful chemicals",
    },
    {
      icon: <FaLeaf className="text-2xl" />,
      title: "Sustainable Farming",
      description: "Eco-friendly cultivation practices",
    },
    {
      icon: <FaStar className="text-2xl" />,
      title: "Premium Grade",
      description: "A+ quality assured",
    },
    {
      icon: <FaShippingFast className="text-2xl" />,
      title: "Fresh Export",
      description: "Temperature-controlled logistics",
    },
  ];

  return (
    <section className=" bg-gradient-to-br from-yellow-50 via-green-50 to-white overflow-hidden">
      <div className="w-full">
        <div className="grid lg:grid-cols-3 gap-0 items-center">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-start"
          >
            <div className="relative z-10">
              <img
                src={bananaHeroImage2}
                alt="Banana Plantation - Farmers Harvesting"
                className="h-auto max-w-full object-contain mr-auto  -translate-y-4 drop-shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Center Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="px-4 md:px-8 lg:px-12 flex flex-col items-center justify-center text-center"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg">
                 Our Premium Product
              </span>
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight text-center"
            >
              PREMIUM{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                CAVENDISH G9
              </span>
              <br />
              BANANA
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed text-center max-w-2xl"
            >
              Experience the finest quality Cavendish G9 bananas, cultivated
              with care in certified farms and delivered fresh to destinations
              worldwide. Our commitment to excellence ensures every banana meets
              international standards.
            </motion.p>

            {/* Highlights Grid */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-lg flex items-center justify-center text-primary-600">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div> */}
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative flex justify-end"
          >
            <div className="relative z-10">
              <img
                src={bananaHeroImage}
                alt="Premium Cavendish G9 Banana - Fresh from Farm"
                className="h-auto max-w-full object-contain ml-auto drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PremiumShowcase;
