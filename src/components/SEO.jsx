import { Helmet } from "react-helmet-async";

const SEO = ({
  title,
  description,
  keywords,
  image = "/og-image.jpg",
  url,
  type = "website",
  siteName = "GS Agritech",
  structuredData,
  canonical,
  noindex = false,
  nofollow = false,
}) => {
  const baseUrl = "https://www.gsagritech.com";
  const fullUrl = url ? `${baseUrl}${url}` : baseUrl;
  const fullImageUrl = image.startsWith("http") ? image : `${baseUrl}${image}`;
  const canonicalUrl = canonical ? `${baseUrl}${canonical}` : fullUrl;

  // Default structured data for Organization
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "GS Agritech",
    url: baseUrl,
    logo: `${baseUrl}/logo_banana_bg.png`,
    description:
      "Leading agricultural exporter specializing in premium Cavendish G9 bananas",
    sameAs: [
      // Add social media links if available
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Sales",
      areaServed: "Worldwide",
    },
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content="GS Agritech" />
      <meta
        name="robots"
        content={`${noindex ? "noindex" : "index"}, ${nofollow ? "nofollow" : "follow"}`}
      />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="rating" content="general" />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:image:alt" content={title} />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#16a34a" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      <meta name="apple-mobile-web-app-title" content="GS Agritech" />
      <meta name="application-name" content="GS Agritech" />
      <meta name="msapplication-TileColor" content="#16a34a" />
      <meta name="msapplication-config" content="/browserconfig.xml" />

      {/* Structured Data (JSON-LD) */}
      {finalStructuredData && (
        <script type="application/ld+json">
          {JSON.stringify(finalStructuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
