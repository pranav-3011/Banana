import { Helmet } from "react-helmet-async";
import Hero from "../components/sections/Hero";
import Statistics from "../components/sections/Statistics";
import PremiumShowcase from "../components/sections/PremiumShowcase";
import KeyFeatures from "../components/sections/KeyFeatures";
import ExportFlowChart from "../components/sections/ExportFlowChart";
import CTASection from "../components/sections/CTASection";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>
          GS Agritech - Premium Cavendish G9 Banana Exporter | Fresh Bananas Worldwide
        </title>
        <meta
          name="description"
          content="GS Agritech is a leading banana export company specializing exclusively in premium quality Cavendish G9 bananas. Serving 50+ countries worldwide with seamless export process and reliable logistics."
        />
        <meta
          name="keywords"
          content="banana export, banana exporter, GS Agritech, Cavendish G9 banana, banana supplier, international banana trade, fresh bananas, Cavendish G9, quality bananas, FOB, CIF, banana export process, premium bananas"
        />
      </Helmet>

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
