import SEO from "../components/SEO";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import CTASection from "../components/sections/CTASection";

const WhyChooseUsPage = () => {
  return (
    <>
      <SEO
        title="Why Choose Us - GS Agritech | Cavendish G9 Banana Exporter"
        description="Why choose GS Agritech for your Cavendish G9 banana imports? Quality assurance, global reach, competitive pricing, and 5-6 years of excellence."
        keywords="why choose GS Agritech, banana exporter benefits, Cavendish G9 quality, reliable banana supplier, best banana exporter"
        url="/why-choose-us"
        image="/og-image.jpg"
      />

      <div className="overflow-x-hidden">
        <WhyChooseUs />
        <CTASection />
      </div>
    </>
  );
};

export default WhyChooseUsPage;
