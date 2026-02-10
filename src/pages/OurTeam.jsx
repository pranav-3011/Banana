import SEO from "../components/SEO";
import { motion } from "framer-motion";
import santoshPhoto from "../Assets/santosh_suryawanshi.jpeg";
import tanajiPhoto from "../Assets/tanaji_gole.jpeg";

const OurTeam = () => {
  const teamMembers = [
    {
      name: "Santosh Sukhdev Suryavanshi",
      position: "Managing Director",
      image: santoshPhoto,
    },
    {
      name: "Tanaji Baban Gole",
      position: "Owner of Bhoomi Putra Udyog Bhandar",
      image: tanajiPhoto,
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "GS Agritech",
    employee: [
      {
        "@type": "Person",
        name: "Santosh Sukhdev Suryavanshi",
        jobTitle: "Managing Director",
        image: "https://www.gsagritech.com/src/Assets/santosh_suryawanshi.jpeg",
      },
      {
        "@type": "Person",
        name: "Tanaji Baban Gole",
        jobTitle: "Owner of Bhoomi Putra Udyog Bhandar",
        image: "https://www.gsagritech.com/src/Assets/tanaji_gole.jpeg",
      },
    ],
  };

  return (
    <>
      <SEO
        title="Our Team - GS Agritech | Leadership & Management"
        description="Meet the leadership team of GS Agritech - Santosh Sukhdev Suryavanshi (Managing Director) and Tanaji Baban Gole (Owner of Bhoomi Putra Udyog Bhandar)."
        keywords="GS Agritech team, leadership, management, Santosh Sukhdev Suryavanshi, Tanaji Baban Gole, banana exporter management"
        url="/about/our-team"
        image="/og-image.jpg"
        structuredData={structuredData}
      />

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
                  className="bg-white border-2 border-gray-200 rounded-xl p-6 md:p-8 hover:border-primary-300 hover:shadow-lg transition-all text-center overflow-hidden"
                >
                  <div className="w-32 h-40 md:w-48 md:h-56 mx-auto mb-4 rounded-lg overflow-hidden border-2 border-primary-100 shadow-md">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-"
                    />
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
