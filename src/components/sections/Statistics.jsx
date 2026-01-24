import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const Statistics = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const stats = [
    {
      end: 6,
      suffix: "+",
      label: "YEARS EXPERIENCE",
    },
    {
      end: 15000,
      suffix: "+",
      label: "FARMERS CONNECTED",
    },
    {
      end: 10,
      suffix: "+",
      label: "EXPORT REGIONS",
    },
    {
      end: 50,
      suffix: "+",
      label: "HAPPY CLIENTS",
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
      className="relative -mt-24 md:-mt-32  z-20"
    >
      <div className="container-custom px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#b6e36d] to-[#5fa83a] rounded-3xl py-12 md:py-16 px-6 md:px-12 shadow-2xl"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
                  <Counter
                    end={stat.end}
                    suffix={stat.suffix}
                    shouldStart={isInView}
                  />
                </div>
                <div className="text-white text-sm md:text-base font-semibold tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Statistics;
