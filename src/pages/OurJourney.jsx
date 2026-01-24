import { Helmet } from "react-helmet-async";
import { Navigate } from "react-router-dom";

const OurJourney = () => {
  return (
    <>
      <Helmet>
        <title>Our Journey - GS Agritech | Company History & Milestones</title>
        <meta name="description" content="Follow GS Agritech's journey from establishment in 2018 to becoming a leading banana exporter." />
      </Helmet>
      <Navigate to="/about/our-company" replace />
    </>
  );
};

export default OurJourney;
