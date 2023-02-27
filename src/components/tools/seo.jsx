import * as React from "react";
import { useSiteMetadata } from "../../hooks/use-site-metadata";

const Seo = ({ title, description, image, path, type, children }) => {
  const defaults = useSiteMetadata();

  const seo = {
    title: title || defaults.title,
    description: description || defaults.description,
    url: `${defaults.siteUrl}${path || ``}`,
    image: image,
    type: type || "website",
  };

  return (
    <>
      <html lang="de" />

      <title>{seo.title}</title>

      <meta name="description" content={seo.description} />
      {seo.image && <meta name="image" content={seo.image} />}

      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      {seo.type && <meta property="og:type" content={seo.type} />}
      {seo.image && <meta property="og:image" content={seo.image} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      {seo.image && <meta name="twitter:image" content={seo.image} />}

      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>"
      />

      {children}
    </>
  );
};

export default Seo;
