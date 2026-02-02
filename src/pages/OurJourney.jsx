import SEO from "../components/SEO";
import { Navigate } from "react-router-dom";

const OurJourney = () => {
  return (
    <>
      <SEO
        title="Our Journey - GS Agritech | Company History & Milestones"
        description="Follow GS Agritech's journey over the last 5-6 years to becoming a leading banana exporter."
        keywords="GS Agritech journey, company history, milestones, banana exporter history"
        url="/about/our-journey"
        image="/og-image.jpg"
        noindex={true}
      />
      <Navigate to="/about/our-company" replace />
    </>
  );
};

export default OurJourney;
