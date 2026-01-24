import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { FaUsers, FaHandshake, FaCheckCircle, FaLeaf } from "react-icons/fa";

const OurSuppliers = () => {
  const supplierFeatures = [
    { icon: <FaUsers />, title: "Certified Farms", desc: "Verified and certified suppliers" },
    { icon: <FaHandshake />, title: "Long-term Partners", desc: "Trusted relationships" },
    { icon: <FaCheckCircle />, title: "Quality Assured", desc: "Rigorous quality checks" },
    { icon: <FaLeaf />, title: "Sustainable", desc: "Eco-friendly practices" },
  ];

  return (
    <>
      <Helmet>
        <title>Our Suppliers - GS Agritech | Trusted Farm Network</title>
        <meta name="description" content="GS Agritech works with certified farms and trusted suppliers to ensure premium quality Cavendish G9 bananas for export." />
      </Helmet>

      <div className="min-h-screen flex items-center bg-white py-12 md:py-16">
        <div className="container-custom w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            {/* Header */}
            <div className="text-center mb-8 md:mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
                OUR SUPPLIERS
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto"></div>
            </div>

            {/* Content Grid */}
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Left - Text */}
              <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
                <p>
                  GS Agritech works closely with a network of <strong className="text-gray-900">certified farms</strong> 
                  and trusted suppliers in the Solapur region. Our suppliers are carefully selected based on their 
                  commitment to quality, sustainable farming practices, and reliability.
                </p>
                <p>
                  We maintain <strong className="text-gray-900">long-term partnerships</strong> with our suppliers, 
                  ensuring consistent quality and supply. Our direct relationships with farmers allow us to maintain 
                  strict quality control from the source.
                </p>
                <p>
                  All our suppliers follow <strong className="text-gray-900">sustainable farming practices</strong> 
                  and meet international quality standards. We conduct regular quality checks and provide guidance to 
                  ensure our Cavendish G9 bananas meet export requirements.
                </p>
              </div>

              {/* Right - Supplier Features Grid */}
              <div className="grid grid-cols-2 gap-4">
                {supplierFeatures.map((feature, index) => (
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

export default OurSuppliers;
