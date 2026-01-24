import { Helmet } from "react-helmet-async";
import ExportProcess from "../components/sections/ExportProcess";

const ExportProcessPage = () => {
  return (
    <>
      <Helmet>
        <title>Export Process - GS Agritech | Cavendish G9 Banana Export</title>
        <meta
          name="description"
          content="Complete guide to our Cavendish G9 banana export process. From sourcing to delivery, learn how GS Agritech ensures seamless international banana trade."
        />
        <meta
          name="keywords"
          content="banana export process, Cavendish G9 export, FOB, CIF, export documentation, banana shipping"
        />
      </Helmet>

      <div className="overflow-x-hidden">
        <ExportProcess />
      </div>
    </>
  );
};

export default ExportProcessPage;
