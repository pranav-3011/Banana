import SEO from "../components/SEO";
import ExportProcess from "../components/sections/ExportProcess";

const ExportProcessPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Cavendish G9 Banana Export Process",
    description: "Complete guide to our Cavendish G9 banana export process",
    step: [
      {
        "@type": "HowToStep",
        name: "Sourcing",
        text: "Source premium Cavendish G9 bananas from our network of 15,000+ farmers",
      },
      {
        "@type": "HowToStep",
        name: "Quality Control",
        text: "Rigorous quality checks and certification",
      },
      {
        "@type": "HowToStep",
        name: "Packaging",
        text: "Export-ready packaging and preparation",
      },
      {
        "@type": "HowToStep",
        name: "Shipping",
        text: "Seamless shipping and logistics through our partners",
      },
    ],
  };

  return (
    <>
      <SEO
        title="Export Process - GS Agritech | Cavendish G9 Banana Export"
        description="Complete guide to our Cavendish G9 banana export process. From sourcing to delivery, learn how GS Agritech ensures seamless international banana trade."
        keywords="banana export process, Cavendish G9 export, FOB, CIF, export documentation, banana shipping, export logistics"
        url="/export-process"
        image="/og-image.jpg"
        structuredData={structuredData}
      />

      <div className="overflow-x-hidden">
        <ExportProcess />
      </div>
    </>
  );
};

export default ExportProcessPage;
