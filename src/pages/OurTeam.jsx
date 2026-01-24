import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { FaUserTie, FaBriefcase } from "react-icons/fa";

const OurTeam = () => {
  const teamMembers = [
    {
      name: "Santosh Sukhdev Suryavanshi",
      position: "Managing Director",
      icon: <FaUserTie className="text-3xl" />,
    },
    {
      name: "Tanaji Baban Gule",
      position: "Owner of Bhoomi Putra Udyog Bhandar",
      icon: <FaBriefcase className="text-3xl" />,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Our Team - GS Agritech | Leadership & Management</title>
        <meta name="description" content="Meet the leadership team of GS Agritech - Santosh Sukhdev Suryavanshi (MD) and Tanaji Baban Gule." />
      </Helmet>

      <div className=" my-24 flex items-center bg-white py-12 md:py-16">
        <div className="container-custom w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            {/* Header */}
            <div className="text-center mb-8 md:mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
                Our Team
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto"></div>
            </div>

            {/* Team Grid */}
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white border-2 border-gray-200 rounded-xl p-6 md:p-8 hover:border-primary-300 hover:shadow-lg transition-all text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 text-white rounded-full mb-4">
                    {member.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600">
                    {member.position}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default OurTeam;
