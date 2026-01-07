import { motion } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaLinkedin,
  FaClock,
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
    {
      icon: <FaClock className="text-3xl" />,
      title: "Business Hours",
      details: ["Monday - Saturday: 9:00 AM - 6:00 PM", "Sunday: Closed"],
    },
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
            <span className="text-primary-600">Import Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fill out the form below and our team will get back to you within 24
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
