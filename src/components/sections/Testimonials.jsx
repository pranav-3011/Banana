import { motion } from 'framer-motion'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'
import { useState, useEffect } from 'react'

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      name: 'Mohammed Al-Rashid',
      company: 'Gulf Fresh Imports, UAE',
      image: 'https://i.pravatar.cc/150?img=12',
      rating: 5,
      text: 'GS Agritech has been our trusted partner for over 5 years. Their consistent quality and reliable delivery have made them invaluable to our business. The bananas always arrive fresh and meet our exact specifications.',
      flag: '🇦🇪'
    },
    {
      name: 'James Wilson',
      company: 'Atlantic Foods Ltd, UK',
      image: 'https://i.pravatar.cc/150?img=33',
      rating: 5,
      text: 'Outstanding service from start to finish! The export process was seamless, and their team handled all documentation professionally. We\'ve been importing from them for 3 years now and couldn\'t be happier.',
      flag: '🇬🇧'
    },
    {
      name: 'Chen Wei',
      company: 'Asia Pacific Traders, Singapore',
      image: 'https://i.pravatar.cc/150?img=68',
      rating: 5,
      text: 'The quality of bananas from GS Agritech is exceptional. They understand international quality standards and consistently deliver premium products. Their competitive pricing and excellent customer support make them stand out.',
      flag: '🇸🇬'
    },
    {
      name: 'Maria Rodriguez',
      company: 'European Fresh Produce, Spain',
      image: 'https://i.pravatar.cc/150?img=45',
      rating: 5,
      text: 'Professional, reliable, and trustworthy. GS Agritech has transformed our banana sourcing. Their transparency in the export process and commitment to quality has made them our preferred supplier.',
      flag: '🇪🇸'
    },
    {
      name: 'Yuki Tanaka',
      company: 'Tokyo Import Co., Japan',
      image: 'https://i.pravatar.cc/150?img=52',
      rating: 5,
      text: 'Working with GS Agritech has been a game-changer for our business. Their attention to detail, timely shipments, and premium quality bananas have exceeded our expectations. Highly recommended!',
      flag: '🇯🇵'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <section className="section-padding bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="bg-primary-500/20 text-primary-400 px-4 py-2 rounded-full text-sm font-semibold border border-primary-500/30">
              Testimonials
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our valued partners from around the world have to say about working with us.
          </p>
        </motion.div>

        {/* Main Testimonial */}
        <div className="max-w-5xl mx-auto mb-12">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-700/50 relative"
          >
            <FaQuoteLeft className="text-6xl text-primary-500/20 absolute top-8 left-8" />
            
            <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
              <img 
                src={testimonials[activeIndex].image} 
                alt={testimonials[activeIndex].name}
                className="w-32 h-32 rounded-full border-4 border-primary-500 shadow-lg"
              />
              
              <div className="flex-grow text-center md:text-left">
                <div className="flex justify-center md:justify-start mb-4">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-xl" />
                  ))}
                </div>
                
                <p className="text-white text-xl md:text-2xl mb-6 leading-relaxed italic">
                  "{testimonials[activeIndex].text}"
                </p>
                
                <div>
                  <h4 className="text-white font-bold text-lg flex items-center justify-center md:justify-start gap-2">
                    {testimonials[activeIndex].name}
                    <span className="text-2xl">{testimonials[activeIndex].flag}</span>
                  </h4>
                  <p className="text-gray-400">{testimonials[activeIndex].company}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Testimonial Navigation */}
        <div className="flex justify-center gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                index === activeIndex 
                  ? 'bg-primary-500 w-12 h-3' 
                  : 'bg-gray-600 w-3 h-3 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>

        {/* All Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30 hover:border-primary-500/50 transition-all cursor-pointer"
              onClick={() => setActiveIndex(index)}
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full border-2 border-primary-500 mr-4"
                />
                <div>
                  <h4 className="text-white font-bold flex items-center gap-2">
                    {testimonial.name}
                    <span className="text-lg">{testimonial.flag}</span>
                  </h4>
                  <div className="flex mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-xs" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-3 line-clamp-3">"{testimonial.text}"</p>
              <p className="text-gray-500 text-xs">{testimonial.company}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials


