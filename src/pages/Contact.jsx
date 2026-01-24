import { Helmet } from "react-helmet-async";
import Contact from "../components/sections/Contact";

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - GS Agritech | Get Quote for Cavendish G9 Bananas</title>
        <meta
          name="description"
          content="Contact GS Agritech for premium Cavendish G9 banana imports. Get in touch for quotes, inquiries, and partnership opportunities."
        />
        <meta
          name="keywords"
          content="contact GS Agritech, banana export contact, Cavendish G9 quote, banana importer inquiry"
        />
      </Helmet>

      <div className="overflow-x-hidden">
        <Contact />
      </div>
    </>
  );
};

export default ContactPage;
