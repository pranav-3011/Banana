import { motion } from "framer-motion";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import g1 from "../../Assets/gallery/g1.jpeg";
import g2 from "../../Assets/gallery/g2.jpeg";
import g3 from "../../Assets/gallery/g3.jpeg";
import g4 from "../../Assets/gallery/g4.jpeg";
import g5 from "../../Assets/gallery/g5.jpeg";
import g6 from "../../Assets/gallery/g6.jpeg";
import g7 from "../../Assets/gallery/g7.jpeg";
import g8 from "../../Assets/gallery/g8.jpeg";
import g9 from "../../Assets/gallery/g9.jpeg";
import g10 from "../../Assets/gallery/g10.jpeg";
import g11 from "../../Assets/gallery/g11.jpeg";
import g12 from "../../Assets/gallery/g12.jpeg";
import g13 from "../../Assets/gallery/g13.jpeg";
import g14 from "../../Assets/gallery/g14.jpeg";
import g15 from "../../Assets/gallery/g15.jpeg";
import g16 from "../../Assets/gallery/g16.jpeg";
import g17 from "../../Assets/gallery/g17.jpeg";
import g18 from "../../Assets/gallery/g18.jpeg";
import g19 from "../../Assets/gallery/g19.jpeg";
import g20 from "../../Assets/gallery/g20.jpeg";
import g21 from "../../Assets/gallery/g21.jpeg";
import g22 from "../../Assets/gallery/g22.jpeg";
import g23 from "../../Assets/gallery/g23.jpeg";
import g24 from "../../Assets/gallery/g24.jpeg";
import g25 from "../../Assets/gallery/g25.jpeg";
import g26 from "../../Assets/gallery/g26.jpeg";


const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      url: g1,
      // title: 'Premium Quality Bananas',
      // category: 'Products'
    },
    {
      url: g2,
      // title: 'Fresh Banana Harvest',
      // category: 'Farming'
    },
    {
      url: g3,
      // title: 'Banana Plantation',
      // category: 'Sourcing'
    },
    {
      url: g4,
      // title: 'Quality Inspection',
      // category: 'Quality Control'
    },
    {
      url: g5,
      // title: 'Farm Operations',
      // category: 'Farming'
    },
    {
      url: g6,
      // title: 'Packaging Process',
      // category: 'Packaging'
    },
    {
      url: g7,
      // title: 'Export Ready',
      // category: 'Products'
    },
    {
      url: g8,
      // title: 'Container Loading',
      // category: 'Shipping'
    },
    {
      url: g9,
      // title: 'Quality Standards',
      // category: 'Quality Control'
    },
    {
      url: g10,
      // title: 'Warehouse Operations',
      // category: 'Logistics'
    },
    {
      url: g11,
      // title: 'Fresh Produce',
      // category: 'Products'
    },
    {
      url: g12,
      // title: 'Processing Facility',
      // category: 'Processing'
    },
    {
      url: g13,
      // title: 'Export Documentation',
      // category: 'Documentation'
    },
    {
      url: g14,
      // title: 'International Shipping',
      // category: 'Shipping'
    },
    {
      url: g15,
      // title: 'Port Operations',
      // category: 'Logistics'
    },
    {
      url: g16,
      // title: 'Cargo Handling',
      // category: 'Shipping'
    },
    {
      url: g17,
      // title: 'Global Distribution',
      // category: 'Logistics'
    },
    {
      url: g18,
      // title: 'Quality Control',
      // category: 'Quality Control'
    },
    {
      url: g19,
      // title: 'Quality Control',
      // category: 'Quality Control'
    },
    {
      url: g20,
      // title: 'Quality Control',
      // category: 'Quality Control'
    },
    {
      url: g21,
      // title: 'Quality Control',
      // category: 'Quality Control'
    },
    {
      url: g22,
      // title: 'Quality Control',
      // category: 'Quality Control'
    },
    {
      url: g23,
      // title: 'Quality Control',
      // category: 'Quality Control'
    },
    {
      url: g24,
      // title: 'Quality Control',
      // category: 'Quality Control'
    },
    {
      url: g25,
      // title: 'Quality Control',
      // category: 'Quality Control'
    },
    {
      url: g26,
      // title: 'Quality Control',
      // category: 'Quality Control'
    },
    
  ];

  return (
    <>
      <section id="gallery" className="section-padding bg-white">
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
                Our Gallery
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Behind the Scenes of{" "}
              <span className="text-primary-600">Excellence</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a visual journey through our operations - from farm to
              shipment, witness the dedication that goes into every export.
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-square"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="text-xs font-semibold mb-2 text-primary-400">
                      {image.category}
                    </div>
                    <h3 className="text-lg font-bold">{image.title}</h3>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-primary-400 transition-colors p-2"
          >
            <FaTimes className="text-3xl" />
          </button>
          <div className="max-w-5xl w-full">
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-center mt-6 text-white"
            >
              <div className="text-sm font-semibold mb-2 text-primary-400">
                {selectedImage.category}
              </div>
              <h3 className="text-2xl font-bold">{selectedImage.title}</h3>
            </motion.div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Gallery;
