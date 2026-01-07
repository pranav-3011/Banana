import { Helmet } from "react-helmet-async";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import ExportProcess from "../components/sections/ExportProcess";
import Products from "../components/sections/Products";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import CTASection from "../components/sections/CTASection";
import Gallery from "../components/sections/Gallery";
import Statistics from "../components/sections/Statistics";
import Testimonials from "../components/sections/Testimonials";
import Contact from "../components/sections/Contact";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>
          GS Agritech - Premium Banana Exporter | Fresh Bananas Worldwide
        </title>
        <meta
          name="description"
          content="GS Agritech is a leading banana export company specializing in premium quality Cavendish bananas. Serving 50+ countries worldwide with seamless export process and reliable logistics."
        />
        <meta
          name="keywords"
          content="banana export, banana exporter, GS Agritech, banana supplier, international banana trade, fresh bananas, Cavendish banana, quality bananas, FOB, CIF, banana export process, premium bananas"
        />
      </Helmet>

      <div className="overflow-x-hidden">
        <Hero />
        <About />
        <Statistics />
        <Products />
        <ExportProcess />
        <WhyChooseUs />
        <CTASection />
        <Gallery />
        {/* <Testimonials /> */}
        <Contact />
      </div>
    </>
  );
};

export default Home;
