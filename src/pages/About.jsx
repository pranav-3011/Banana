import { Helmet } from "react-helmet-async";
import About from "../components/sections/About";
import Statistics from "../components/sections/Statistics";

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us - GS Agritech | Premium Cavendish G9 Banana Exporter</title>
        <meta
          name="description"
          content="Learn about GS Agritech, a premier banana export company specializing exclusively in premium Cavendish G9 bananas. Over 6 years of excellence in international banana trade."
        />
        <meta
          name="keywords"
          content="about GS Agritech, Cavendish G9 banana exporter, banana export company, agricultural exporter"
        />
      </Helmet>

      <div className="overflow-x-hidden">
        <About />
        <Statistics />
      </div>
    </>
  );
};

export default AboutPage;
