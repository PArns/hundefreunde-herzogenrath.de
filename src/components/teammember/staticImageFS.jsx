import * as React from "react";

import { graphql, useStaticQuery } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

export default function StaticImageFS(props) {
  const data = useStaticQuery(graphql`
    {
      images: allFile(filter: { relativePath: { regex: "/^team//" } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
                quality: 90
                height: 280
                width: 300
              )
            }
          }
        }
      }
    }
  `);

  const { filename, alt, ...other } = props;

  const image = data.images.edges.find((n) => {
    return n.node.relativePath.includes(filename);
  });

  if (!image) {
    return null;
  }

  const imageData = getImage(image.node);
  return <GatsbyImage image={imageData} alt={alt} {...other} />;
}
