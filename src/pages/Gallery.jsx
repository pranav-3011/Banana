import { Helmet } from "react-helmet-async";
import Gallery from "../components/sections/Gallery";

const GalleryPage = () => {
  return (
    <>
      <Helmet>
        <title>Gallery - GS Agritech | Cavendish G9 Banana Photos</title>
        <meta
          name="description"
          content="Browse our gallery showcasing premium Cavendish G9 bananas, our facilities, and export operations. See the quality that sets GS Agritech apart."
        />
        <meta
          name="keywords"
          content="banana gallery, Cavendish G9 photos, banana export images, agricultural photos"
        />
      </Helmet>

      <div className="overflow-x-hidden">
        <Gallery />
      </div>
    </>
  );
};

export default GalleryPage;
