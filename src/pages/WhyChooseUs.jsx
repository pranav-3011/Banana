import { Helmet } from "react-helmet-async";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import CTASection from "../components/sections/CTASection";

const WhyChooseUsPage = () => {
  return (
    <>
      <Helmet>
        <title>Why Choose Us - GS Agritech | Cavendish G9 Banana Exporter</title>
        <meta
          name="description"
          content="Why choose GS Agritech for your Cavendish G9 banana imports? Quality assurance, global reach, competitive pricing, and 6+ years of excellence."
        />
        <meta
          name="keywords"
          content="why choose GS Agritech, banana exporter benefits, Cavendish G9 quality, reliable banana supplier"
        />
      </Helmet>

      <div className="overflow-x-hidden">
        <WhyChooseUs />
        <CTASection />
      </div>
    </>
  );
};

export default WhyChooseUsPage;
