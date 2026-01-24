import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaThermometerHalf,
  FaShieldAlt,
  FaSeedling,
} from "react-icons/fa";
import exportYearImage from "../../Assets/export_throughout_the_year.png";
import temperatureMonitoringImage from "../../Assets/Temperature_Monitoring.png";
import foodSafetyImage from "../../Assets/food_safety.png";
import farmPickImage from "../../Assets/farm_pic.png";

const KeyFeatures = () => {
  const features = [
    {
      icon: <FaCalendarAlt className="text-3xl" />,
      title: "Export Throughout the Year",
      color: "from-blue-500 to-blue-600",
      image: exportYearImage,
    },
    {
      icon: <FaThermometerHalf className="text-3xl" />,
      title: "Real-Time Temperature Monitoring",
      color: "from-red-500 to-red-600",
      image: temperatureMonitoringImage,
    },
    {
      icon: <FaShieldAlt className="text-3xl" />,
      title: "Food Safety & Quality Assurance",
      color: "from-green-500 to-green-600",
      image: foodSafetyImage,
    },
    {
      icon: <FaSeedling className="text-3xl" />,
      title: "Our Own Farm Pick-up & Sanitation",
      color: "from-primary-500 to-secondary-500",
      image: farmPickImage,
    },
  ];

  return (
    <section className=" bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className=" rounded-xl p-6  hover:border-primary-300 hover:shadow-lg transition-all duration-300 text-center">
                <div className="mb-4 flex justify-center items-center min-h-[120px]">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-auto max-w-[200px] object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-base md:text-lg font-bold text-gray-900">
                  {feature.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
