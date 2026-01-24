import { Helmet } from "react-helmet-async";
import Products from "../components/sections/Products";
import CTASection from "../components/sections/CTASection";

const ProductsPage = () => {
  return (
    <>
      <Helmet>
        <title>Products - GS Agritech | Premium Cavendish G9 Bananas</title>
        <meta
          name="description"
          content="GS Agritech specializes exclusively in premium Cavendish G9 bananas. Discover our flagship product with exceptional quality, sweetness, and extended shelf life."
        />
        <meta
          name="keywords"
          content="Cavendish G9 banana, premium bananas, banana products, banana specifications, banana quality"
        />
      </Helmet>

      <div className="overflow-x-hidden">
        <Products />
        <CTASection />
      </div>
    </>
  );
};

export default ProductsPage;
