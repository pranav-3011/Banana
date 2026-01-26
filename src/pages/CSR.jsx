import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { FaUsers, FaChalkboardTeacher, FaLeaf, FaSeedling } from "react-icons/fa";
import csrImage from "../Assets/csr.png";

const CSR = () => {
  const csrActivities = [
    { icon: <FaChalkboardTeacher />, title: "Workshops", desc: "Conducting educational workshops for farmers" },
    { icon: <FaUsers />, title: "Farmer Guidance", desc: "Providing comprehensive guidance to farmers" },
    { icon: <FaLeaf />, title: "Fertilizer Support", desc: "Assisting with quality fertilizers" },
    { icon: <FaSeedling />, title: "Scheduled Practices", desc: "Educating on proper farming schedules" },
  ];

  return (
    <>
      <Helmet>
        <title>CSR - GS Agritech | Corporate Social Responsibility</title>
        <meta name="description" content="GS Agritech's CSR initiatives include farmer workshops, guidance, fertilizer support, and scheduled practices." />
      </Helmet>

      <div className=" bg-white">
        {/* Full Width CSR Image */}
        <div className="w-full">
          <img 
            src={csrImage} 
            alt="GS Agritech CSR Initiatives - Supporting Our Farming Community" 
            className="w-full h-[400px] object-fit"
          />
        </div>

        <div className="py-12 md:py-16">
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
                Corporate Social Responsibility
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto"></div>
            </div>

            {/* Content Grid */}
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Left - Text */}
              <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
                <p>
                  At GS Agritech, we believe in giving back to the farming community that forms the
                  foundation of our business.
                </p>
                <p>
                  Our CSR activities include <strong className="text-gray-900">giving guidance to farmers</strong>, conducting{" "}
                  <strong className="text-gray-900">workshops</strong>, providing <strong className="text-gray-900">fertilizer support</strong>, and
                  educating them about <strong className="text-gray-900">scheduled practices</strong> for optimal agricultural outcomes.
                </p>
                <p>
                  Through these initiatives, we aim to improve the livelihoods of farmers, enhance
                  agricultural productivity, and promote sustainable farming practices in the region.
                </p>
              </div>

              {/* Right - Activities Grid */}
              <div className="grid grid-cols-2 gap-4">
                {csrActivities.map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all"
                  >
                    <div className="text-primary-600 mb-2 text-xl">{activity.icon}</div>
                    <h3 className="font-semibold text-gray-900 text-sm mb-1">{activity.title}</h3>
                    <p className="text-xs text-gray-600 leading-tight">{activity.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CSR;
