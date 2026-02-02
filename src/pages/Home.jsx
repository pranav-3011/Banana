import SEO from "../components/SEO";
import Hero from "../components/sections/Hero";
import Statistics from "../components/sections/Statistics";
import PremiumShowcase from "../components/sections/PremiumShowcase";
import KeyFeatures from "../components/sections/KeyFeatures";
import ExportFlowChart from "../components/sections/ExportFlowChart";
import CTASection from "../components/sections/CTASection";

const Home = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "GS Agritech",
    url: "https://www.gsagritech.com",
    logo: "https://www.gsagritech.com/src/Assets/logo_banana_bg.png",
    description:
      "Leading agricultural exporter specializing in premium Cavendish G9 bananas",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: "15,000+",
      unitText: "farmers",
    },
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    makesOffer: {
      "@type": "Offer",
      itemOffered: {
        "@type": "Product",
        name: "Cavendish G9 Bananas",
        description: "Premium quality Cavendish G9 bananas for export",
        category: "Fresh Produce",
        brand: {
          "@type": "Brand",
          name: "GS Agritech",
        },
      },
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Sales",
      areaServed: "Worldwide",
      availableLanguage: "English",
    },
  };

  return (
    <>
      <SEO
        title="GS Agritech - Premium Cavendish G9 Banana Exporter | Fresh Bananas Worldwide"
        description="GS Agritech is a leading banana export company specializing exclusively in premium quality Cavendish G9 bananas. Serving 50+ countries worldwide with seamless export process and reliable logistics."
        keywords="banana export, banana exporter, GS Agritech, Cavendish G9 banana, banana supplier, international banana trade, fresh bananas, Cavendish G9, quality bananas, FOB, CIF, banana export process, premium bananas"
        url="/"
        image="/og-image.jpg"
        structuredData={structuredData}
      />

      <div className="overflow-x-hidden">
        <Hero />

        <KeyFeatures />
        <PremiumShowcase />
        <Statistics />
        <ExportFlowChart />
        <CTASection />
      </div>
    </>
  );
};

export default Home;
