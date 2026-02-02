import SEO from "../components/SEO";
import Gallery from "../components/sections/Gallery";

const GalleryPage = () => {
  return (
    <>
      <SEO
        title="Gallery - GS Agritech | Cavendish G9 Banana Photos"
        description="Browse our gallery showcasing premium Cavendish G9 bananas, our facilities, and export operations. See the quality that sets GS Agritech apart."
        keywords="banana gallery, Cavendish G9 photos, banana export images, agricultural photos, banana farming images"
        url="/gallery"
        image="/og-image.jpg"
      />

      <div className="overflow-x-hidden">
        <Gallery />
      </div>
    </>
  );
};

export default GalleryPage;
