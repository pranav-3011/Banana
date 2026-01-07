import { motion } from 'framer-motion'
import { FaSearch, FaShoppingCart, FaFileInvoiceDollar, FaClipboardList, FaShip, FaTruck, FaCheckCircle } from 'react-icons/fa'
import { useState } from 'react'

const ExportProcess = () => {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      number: '01',
      icon: <FaSearch className="text-4xl" />,
      title: 'Finding a Buyer',
      subtitle: 'Through Online Platform',
      description: 'We connect with potential buyers through trusted platforms and industry networks.',
      details: [
        'Utilize platforms like Alibaba, Thomasnet, or Tradekey',
        'Attend international trade shows and industry events',
        'Leverage social media and email marketing strategies',
        'Research buyers\' needs, preferences, and market requirements',
        'Establish initial contact and build relationships'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      number: '02',
      icon: <FaShoppingCart className="text-4xl" />,
      title: 'Sourcing the Product',
      subtitle: 'Quality & Reliability',
      description: 'Selecting the finest suppliers to ensure premium quality and competitive pricing.',
      details: [
        'Find certified suppliers with competitive pricing',
        'Research suppliers\' reputation, quality standards, and reliability',
        'Verify compliance with international regulations',
        'Negotiate prices, payment terms, and delivery schedules',
        'Ensure suppliers meet buyer\'s specifications and requirements',
        'Establish quality control measures'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      number: '03',
      icon: <FaFileInvoiceDollar className="text-4xl" />,
      title: 'Proforma Invoice',
      subtitle: 'Documentation & Pricing',
      description: 'Creating detailed documentation with all product and pricing information.',
      details: [
        'Create comprehensive proforma invoice',
        'Include detailed product information and specifications',
        'Specify prices, quantities, and payment terms',
        'Attach relevant certifications and licenses',
        'Include compliance documents',
        'Send to buyer for approval and confirmation'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      number: '04',
      icon: <FaClipboardList className="text-4xl" />,
      title: 'Purchase Order',
      subtitle: 'Order Confirmation',
      description: 'Processing confirmed orders and initiating production with suppliers.',
      details: [
        'Receive purchase order from buyer',
        'Verify confirmed prices, quantities, and delivery schedules',
        'Assess buyer\'s credibility and creditworthiness',
        'Advise supplier to commence production',
        'Production timeline: Approximately 20 days',
        'Monitor production progress'
      ],
      color: 'from-orange-500 to-orange-600'
    },
    {
      number: '05',
      icon: <FaShip className="text-4xl" />,
      title: 'Incoterms',
      subtitle: 'Shipping Terms',
      description: 'Establishing clear shipping terms and responsibilities with the buyer.',
      details: [
        'Decide between FOB (Free on Board) or CIF (Cost, Insurance, Freight)',
        'Understand cost implications and risk distribution',
        'Define transportation responsibilities',
        'Clarify insurance coverage',
        'Establish customs clearance procedures',
        'Document all terms clearly'
      ],
      color: 'from-red-500 to-red-600'
    },
    {
      number: '06',
      icon: <FaTruck className="text-4xl" />,
      title: 'Logistics & Freight',
      subtitle: 'Transportation',
      description: 'Managing container booking, loading, and international shipping.',
      details: [
        'Book container with freight forwarder (for CIF)',
        'Obtain gate pass 48 hours before vessel arrival',
        'Load container onto vessel',
        'Voyage period: Approximately 15-20 days',
        'Track container movement in real-time',
        'Maintain communication with all parties'
      ],
      color: 'from-teal-500 to-teal-600'
    },
    {
      number: '07',
      icon: <FaCheckCircle className="text-4xl" />,
      title: 'Post-Shipment',
      subtitle: 'Follow-up & Support',
      description: 'Ensuring smooth delivery and addressing any concerns promptly.',
      details: [
        'Ensure timely payment from buyer',
        'Monitor container arrival and customs clearance',
        'Address any issues or discrepancies promptly',
        'Provide post-delivery support',
        'Collect feedback for continuous improvement',
        'Evaluate export process for optimization'
      ],
      color: 'from-indigo-500 to-indigo-600'
    }
  ]

  return (
    <section id="export-process" className="section-padding bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
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
              Our Process
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            The Complete <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">Export Process</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A transparent, step-by-step journey from finding buyers to successful delivery. 
            We handle everything so you can focus on your business.
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="mb-8"
            >
              <div 
                className={`cursor-pointer transition-all duration-300 ${
                  activeStep === index ? 'scale-105' : 'hover:scale-102'
                }`}
                onClick={() => setActiveStep(index)}
              >
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-primary-500/50 transition-all">
                  <div className="p-8">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                      {/* Step Number & Icon */}
                      <div className={`flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-lg`}>
                        {step.icon}
                      </div>

                      {/* Content */}
                      <div className="flex-grow">
                        <div className="flex items-center mb-2">
                          <span className="text-5xl font-bold text-gray-700 mr-4">{step.number}</span>
                          <div>
                            <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                            <p className="text-primary-400 font-semibold">{step.subtitle}</p>
                          </div>
                        </div>
                        <p className="text-gray-300 text-lg mb-4">{step.description}</p>
                        
                        {/* Details - Expandable */}
                        <motion.div
                          initial={false}
                          animate={{
                            height: activeStep === index ? 'auto' : 0,
                            opacity: activeStep === index ? 1 : 0
                          }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="bg-gray-900/50 rounded-xl p-6 mt-4">
                            <h4 className="text-white font-semibold mb-3 flex items-center">
                              <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                              Key Activities:
                            </h4>
                            <ul className="space-y-2">
                              {step.details.map((detail, idx) => (
                                <li key={idx} className="text-gray-400 flex items-start">
                                  <FaCheckCircle className="text-secondary-500 mr-3 mt-1 flex-shrink-0" />
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>

                        <button
                          onClick={() => setActiveStep(activeStep === index ? -1 : index)}
                          className="mt-4 text-primary-400 hover:text-primary-300 font-semibold text-sm"
                        >
                          {activeStep === index ? '▲ Show Less' : '▼ Show More Details'}
                        </button>
                      </div>

                      {/* Arrow Indicator */}
                      {index < steps.length - 1 && (
                        <div className="hidden lg:block absolute right-8">
                          <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="text-gray-600 text-2xl"
                          >
                            ↓
                          </motion.div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-500/20 to-secondary-500/20 backdrop-blur-sm rounded-2xl p-8 border border-primary-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              💡 The Best Part?
            </h3>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Exporting can be managed through supervision - you don't need to be physically present in the field. 
              We handle all the complexities while keeping you informed at every step.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ExportProcess


