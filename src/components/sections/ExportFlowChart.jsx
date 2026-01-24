import { motion } from "framer-motion";
import flowChartImage from "../../Assets/home_flow.png";

const ExportFlowChart = () => {
  return (
    <section className="section-padding ">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-4">
            <span className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold">
              Our Process
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            COMPLETE{" "}
            <span className="text-primary-600">EXPORT JOURNEY</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From plantation to your destination - A transparent and efficient
            process ensuring quality at every step.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="bg-white rounded-3xl   overflow-hidden">
            <div className="overflow-x-auto">
              <img
                src={flowChartImage}
                alt="Cavendish G9 Banana Export Process Flow Chart"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Process Steps Summary */}
          <div className="grid md:grid-cols-4 gap-6 mt-12">
            {[
              {
                step: "01",
                title: "Plantation & Farming",
                desc: "Expert guidance to farmers",
              },
              {
                step: "02",
                title: "Quality Control",
                desc: "Washing, sorting & packaging",
              },
              {
                step: "03",
                title: "Container Loading",
                desc: "Temperature-controlled shipping",
              },
              {
                step: "04",
                title: "International Delivery",
                desc: "Customs clearance & delivery",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 text-white rounded-full text-2xl font-bold mb-4 shadow-lg">
                  {item.step}
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExportFlowChart;
