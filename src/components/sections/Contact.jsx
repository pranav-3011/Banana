import { motion } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaLinkedin,
  FaClock,
  FaCheckCircle,
  FaBox,
  FaShippingFast,
  FaDollarSign,
  FaFileAlt,
  FaImage,
  FaInfoCircle,
} from "react-icons/fa";

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaPhone className="text-3xl" />,
      title: "Phone",
      details: ["+91 9970849999", "+91 9850419073"],
    },
    {
      icon: <FaEnvelope className="text-3xl" />,
      title: "Email",
      details: ["info@gsagritech.com", "export@gsagritech.com"],
    },
    {
      icon: <FaMapMarkerAlt className="text-3xl" />,
      title: "Address",
      details: [
        "Indapur-Akluj Road, Shivajinagar",
        "Indapur, Dist. Pune, Maharashtra, India",
      ],
    },
    // {
    //   icon: <FaClock className="text-3xl" />,
    //   title: "Business Hours",
    //   details: ["Monday - Saturday: 9:00 AM - 6:00 PM", "Sunday: Closed"],
    // },
  ];

  return (
    <section id="contact" className="section-padding bg-white">
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
              Get In Touch
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let's Start Your{" "}
            <span className="text-primary-600">Cavendish G9 Import Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to import premium Cavendish G9 bananas? Fill out the form below and our team will get back to you within 24
            hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Contact Info Cards - Now at top in minimalistic style */}
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 text-primary-600 rounded-xl mb-4">
                {info.icon}
              </div>
              <h4 className="font-bold text-gray-900 mb-3">{info.title}</h4>
              {info.details.map((detail, idx) => (
                <p key={idx} className="text-gray-600 text-sm">
                  {detail}
                </p>
              ))}
            </motion.div>
          ))}
        </div>

        {/* What We Expect From You Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-6xl mx-auto"
        >
          <div className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 rounded-3xl p-8 md:p-12 border border-primary-100 shadow-lg">
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 text-white rounded-2xl mb-4 shadow-lg">
                <FaInfoCircle className="text-3xl" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What We Expect From You
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                To provide you with the best quote and service, please include the following information in your inquiry
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Product Details */}
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <FaBox className="text-primary-600 text-xl" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-2">Product Details</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li className="flex items-start gap-2">
                        <FaCheckCircle className="text-primary-500 mt-0.5 flex-shrink-0" />
                        <span>Product type (Fresh Bananas)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FaCheckCircle className="text-primary-500 mt-0.5 flex-shrink-0" />
                        <span>Packing specifications (e.g., 13 kg carton)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FaCheckCircle className="text-primary-500 mt-0.5 flex-shrink-0" />
                        <span>Quantity requirements</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Delivery Terms */}
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center">
                    <FaShippingFast className="text-secondary-600 text-xl" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-2">Delivery Terms</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li className="flex items-start gap-2">
                        <FaCheckCircle className="text-secondary-500 mt-0.5 flex-shrink-0" />
                        <span>Delivery method (CIF, FOB, etc.)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FaCheckCircle className="text-secondary-500 mt-0.5 flex-shrink-0" />
                        <span>Destination port/city</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FaCheckCircle className="text-secondary-500 mt-0.5 flex-shrink-0" />
                        <span>Target delivery timeline</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Pricing & Volume */}
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <FaDollarSign className="text-yellow-600 text-xl" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-2">Pricing & Volume</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li className="flex items-start gap-2">
                        <FaCheckCircle className="text-yellow-600 mt-0.5 flex-shrink-0" />
                        <span>Target price range (if applicable)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FaCheckCircle className="text-yellow-600 mt-0.5 flex-shrink-0" />
                        <span>Initial order quantity</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FaCheckCircle className="text-yellow-600 mt-0.5 flex-shrink-0" />
                        <span>Long-term purchase plans (containers/month)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <FaFileAlt className="text-blue-600 text-xl" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-2">Additional Information</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li className="flex items-start gap-2">
                        <FaCheckCircle className="text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>Payment terms preference</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FaCheckCircle className="text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>Quality specifications required</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FaCheckCircle className="text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>Any special requirements</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Example Inquiry Format */}
            {/* <div className="bg-white rounded-xl p-6 md:p-8 border-2 border-primary-200 shadow-sm">
              <div className="flex items-start gap-3 mb-4">
                <FaFileAlt className="text-primary-600 text-2xl mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 mb-2 text-lg">Example Inquiry Format</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Here's a sample structure to help you compose your inquiry:
                  </p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <div className="space-y-3 text-sm text-gray-700">
                  <p className="font-semibold text-gray-900">We are interested in purchasing fresh bananas and would like to receive your best offer under the following conditions:</p>
                  <div className="space-y-2 pl-4 border-l-2 border-primary-300">
                    <p><strong className="text-gray-900">Product:</strong> Fresh Bananas</p>
                    <p><strong className="text-gray-900">Packing:</strong> 13 kg carton</p>
                    <p><strong className="text-gray-900">Delivery:</strong> CIF / Delivered to [Your Port], [Your Country]</p>
                    <p><strong className="text-gray-900">Target Price:</strong> USD [Amount] per 13 kg carton</p>
                    <p><strong className="text-gray-900">Volume:</strong> If the trial shipment meets our quality and price expectations, we are planning a regular purchase of [X] containers per month on a long-term basis.</p>
                  </div>
                  <p className="font-semibold text-gray-900 mt-4">Please share:</p>
                  <ul className="list-disc list-inside space-y-1 pl-4 text-gray-600">
                    <li>Product specifications and quality details</li>
                    <li>Origin</li>
                    <li>Shelf life</li>
                    <li>Loading port</li>
                    <li>Estimated transit time</li>
                    <li>Payment terms</li>
                    <li>Photos of the product and packing</li>
                  </ul>
                </div>
              </div>
            </div> */}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-100 rounded-2xl overflow-hidden h-96 border border-gray-200">
              <iframe
                src="https://maps.google.com/maps?q=18.104271,75.020523+(GS+Agritech)&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="GS Agritech Location"
              ></iframe>
            </div>
          </motion.div>

          {/* Quick Contact Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-8 h-96 relative overflow-hidden flex items-center justify-center">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary-500/10 rounded-full blur-2xl"></div>

              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-3 text-white">
                  Need Immediate Assistance?
                </h3>
                <p className="mb-6 text-gray-300 text-sm">
                  Contact us directly through your preferred channel
                </p>
                <div className="space-y-3">
                  <a
                    href="https://wa.me/919970849999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
                  >
                    <FaWhatsapp className="mr-2 text-xl" />
                    WhatsApp
                  </a>
                  <a
                    href="tel:+919970849999"
                    className="flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 text-white py-3 rounded-lg font-semibold hover:bg-white/20 transition"
                  >
                    <FaPhone className="mr-2" />
                    Call Now
                  </a>
                  <a
                    href="mailto:info@gsagritech.com"
                    className="flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 text-white py-3 rounded-lg font-semibold hover:bg-white/20 transition"
                  >
                    <FaEnvelope className="mr-2" />
                    Email Us
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
