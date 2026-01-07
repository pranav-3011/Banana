import { motion, useInView } from "framer-motion";
import {
  FaGlobeAmericas,
  FaShippingFast,
  FaUsers,
  FaStar,
} from "react-icons/fa";
import { useEffect, useState, useRef } from "react";

const Statistics = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const stats = [
    {
      icon: <FaGlobeAmericas className="text-5xl" />,
      end: 50,
      suffix: "+",
      label: "Countries Served",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <FaShippingFast className="text-5xl" />,
      end: 10000,
      suffix: "+",
      label: "Successful Shipments",
      color: "from-green-500 to-green-600",
    },
    {
      icon: <FaUsers className="text-5xl" />,
      end: 500,
      suffix: "+",
      label: "Happy Clients",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: <FaStar className="text-5xl" />,
      end: 99,
      suffix: "%",
      label: "Customer Satisfaction",
      color: "from-orange-500 to-orange-600",
    },
  ];

  const Counter = ({ end, duration = 2000, suffix = "", shouldStart }) => {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
      if (!shouldStart || hasAnimated) return;

      const startTimestamp = Date.now();
      const endTimestamp = startTimestamp + duration;

      const updateCount = () => {
        const now = Date.now();
        const progress = Math.min((now - startTimestamp) / duration, 1);
        const currentCount = Math.floor(progress * end);

        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        } else {
          setHasAnimated(true);
        }
      };

      updateCount();
    }, [end, duration, hasAnimated, shouldStart]);

    return (
      <span>
        {count.toLocaleString()}
        {suffix}
      </span>
    );
  };

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-gradient-to-r from-primary-600 via-primary-700 to-secondary-600 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            OUR IMPACT IN NUMBERS
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Years of dedication have built a legacy of trust and excellence in
            the global banana trade.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div
                  className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${stat.color} text-white rounded-2xl mb-6 shadow-lg`}
                >
                  {stat.icon}
                </div>
                <div className="text-5xl font-bold text-white mb-2">
                  <Counter
                    end={stat.end}
                    suffix={stat.suffix}
                    shouldStart={isInView}
                  />
                </div>
                <div className="text-white/90 text-lg font-semibold">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
