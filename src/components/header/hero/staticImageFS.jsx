import * as React from "react";

import { graphql, useStaticQuery } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

export default function StaticImageFS(props) {
  const data = useStaticQuery(graphql`
    {
      images: allFile(filter: { relativePath: { regex: "/^hero//" } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
                quality: 90
              )
            }
          }
        }
      }
    }
  `);

  const bgImage = {
    pointerEvents: "none",
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
    zIndex: -1,
    objectPosition: "center",
  };

  const { filename, alt, ...other } = props;

  const image = data.images.edges.find((n) => {
    return n.node.relativePath.includes(filename);
  });

  if (!image) {
    return null;
  }

  const imageData = getImage(image.node);

  return (
    <div className="h-max lg:h-screen">
      <div className="lg:hidden">
        <GatsbyImage image={imageData} alt={alt} />
      </div>

      <GatsbyImage
        image={imageData}
        alt={alt}
        style={bgImage}
        imgStyle={bgImage}
      />
    </div>
  );
}
