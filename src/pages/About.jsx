import SEO from "../components/SEO";
import About from "../components/sections/About";
import Statistics from "../components/sections/Statistics";

const AboutPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    mainEntity: {
      "@type": "Organization",
      name: "GS Agritech",
      description:
        "Premier banana export company specializing exclusively in premium Cavendish G9 bananas",
      numberOfEmployees: {
        "@type": "QuantitativeValue",
        value: "15,000+",
        unitText: "farmers",
      },
    },
  };

  return (
    <>
      <SEO
        title="About Us - GS Agritech | Premium Cavendish G9 Banana Exporter"
        description="Learn about GS Agritech, a premier banana export company specializing exclusively in premium Cavendish G9 bananas. Operating for 5-6 years with excellence in international banana trade."
        keywords="about GS Agritech, Cavendish G9 banana exporter, banana export company, agricultural exporter, banana supplier history"
        url="/about"
        image="/og-image.jpg"
        structuredData={structuredData}
      />

      <div className="overflow-x-hidden">
        <About />
        <Statistics />
      </div>
    </>
  );
};

export default AboutPage;
