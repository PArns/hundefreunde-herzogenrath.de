import * as React from "react";

import { graphql, useStaticQuery } from "gatsby";
import { getSrc } from "gatsby-plugin-image";

const FixedBackground = ({ children, imageName, ...other }) => {
  const data = useStaticQuery(graphql`
    {
      images: allFile(filter: { relativePath: { regex: "/^backgrounds//" } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
                quality: 90
                width: 1900
              )
            }
          }
        }
      }
    }
  `);

  const image = data.images.edges.find((n) => {
    return n.node.relativePath.includes(imageName);
  });

  const imageSource = getSrc(image?.node);

  return (
    <div
      className="w-full bg-cover bg-fixed bg-center bg-no-repeat shadow-[inset_0_10px_10px_0px_rgba(0,0,0,0.4),inset_0_-10px_10px_0px_rgba(0,0,0,0.4)]"
      style={{ backgroundImage: `url(${imageSource})` }}
    >
      <div className="container mx-auto">
        <div {...other}>{children}</div>
      </div>
    </div>
  );
};

export default FixedBackground;
