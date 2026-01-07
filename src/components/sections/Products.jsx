import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaLeaf,
  FaBoxOpen,
  FaTruck,
  FaStar,
  FaAward,
} from "react-icons/fa";
import banana_image from "../../Assets/banana_image.jpg";

const Products = () => {
  const flagshipProduct = {
    name: "Premium Bananas",
    tagline: "The Gold Standard of Export Quality",
    image:
      "https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=1200&q=80",
    description:
      "Our flagship Cavendish bananas represent the pinnacle of quality in international banana trade. Renowned worldwide for their perfect ripening characteristics, exceptional sweetness, and extended shelf life, these premium bananas are the preferred choice of importers across 50+ countries.",
    highlights: [
      {
        icon: <FaStar />,
        title: "Grade A+ Quality",
        desc: "Only the finest selection",
      },
      {
        icon: <FaLeaf />,
        title: "Sustainably Grown",
        desc: "Certified organic farms",
      },
      {
        icon: <FaAward />,
        title: "Export Excellence",
        desc: "ISO certified process",
      },
      {
        icon: <FaCheckCircle />,
        title: "Year-Round Supply",
        desc: "Consistent availability",
      },
    ],
    features: [
      "Perfect uniform size and appearance",
      "Sweet, creamy texture loved globally",
      "Extended shelf life (18-21 days)",
      "Excellent disease resistance",
      "Ideal for long-distance shipping",
      "Consistent ripening characteristics",
      "Rich in potassium and nutrients",
      "Minimal post-harvest losses",
    ],
    specs: [
      { label: "Variety", value: "Premium Cavendish" },
      { label: "Origin", value: "Certified Farms" },
      { label: "Grade", value: "A+ Export Quality" },
      { label: "Availability", value: "Year-Round" },
      { label: "Packaging", value: "13.5 / 18 kg cartons" },
      { label: "Shelf Life", value: "18-21 days" },
    ],
  };

  return (
    <section id="products" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="bg-secondary-100 text-secondary-700 px-4 py-2 rounded-full text-sm font-semibold">
              Our Flagship Product
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Flagship Product :{" "}
            <span className="text-primary-600"> Premium Bananas</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {flagshipProduct.tagline}
          </p>
        </motion.div>

        {/* Flagship Product Showcase */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={banana_image}
                  alt={banana_image}
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8"></div>
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -top-6 -right-6 bg-gradient-to-br from-yellow-400 to-orange-500 text-white p-6 rounded-2xl shadow-2xl transform rotate-12"
              >
                <div className="text-center">
                  <FaStar className="text-3xl mx-auto mb-2" />
                  <div className="text-xs font-semibold">Premium</div>
                  <div className="text-2xl font-bold">Quality</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Product Details */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Why Our Bananas Are the Best Choice
              </h3>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {flagshipProduct.description}
              </p>

              {/* Highlights Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {flagshipProduct.highlights.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gradient-to-br from-primary-50 to-secondary-50 p-4 rounded-xl"
                  >
                    <div className="text-2xl text-primary-600 mb-2">
                      {item.icon}
                    </div>
                    <h4 className="font-bold text-gray-900 text-sm mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-600">{item.desc}</p>
                  </motion.div>
                ))}
              </div>

              {/* Product Specifications */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-6">
                <h4 className="font-bold mb-4 text-lg">
                  Product Specifications
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {flagshipProduct.specs.map((spec, index) => (
                    <div
                      key={index}
                      className="border-l-2 border-primary-500 pl-3"
                    >
                      <div className="text-xs text-gray-400 mb-1">
                        {spec.label}
                      </div>
                      <div className="font-semibold text-sm">{spec.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
