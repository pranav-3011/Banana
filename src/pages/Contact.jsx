import SEO from "../components/SEO";
import Contact from "../components/sections/Contact";

const ContactPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    mainEntity: {
      "@type": "Organization",
      name: "GS Agritech",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Sales",
        areaServed: "Worldwide",
        availableLanguage: "English",
      },
    },
  };

  return (
    <>
      <SEO
        title="Contact Us - GS Agritech | Get Quote for Cavendish G9 Bananas"
        description="Contact GS Agritech for premium Cavendish G9 banana imports. Get in touch for quotes, inquiries, and partnership opportunities."
        keywords="contact GS Agritech, banana export contact, Cavendish G9 quote, banana importer inquiry, banana supplier contact"
        url="/contact"
        image="/og-image.jpg"
        structuredData={structuredData}
      />

      <div className="overflow-x-hidden">
        <Contact />
      </div>
    </>
  );
};

export default ContactPage;
