import * as React from "react";
import { graphql } from "gatsby";

import Seo from "../../components/tools/seo";
import MainLayout from "../../layouts/main";

import TatzenHeader from "../../components/tools/tatzenheader";

import GalleryCard from "../../components/gallery/galleryCard";

const IndexPage = ({ location, data }) => {
  const galleries = data.galleries.nodes;

  return (
    <MainLayout location={location}>
      <div className="container mx-auto">
        <TatzenHeader className="py-10">
          Bilder unserer Veranstaltungen
        </TatzenHeader>

        <div className="mx-2 mb-5 grid grid-flow-row gap-2 md:grid-flow-col">
          {galleries.map((gallery) => (
            <GalleryCard key={gallery.id} gallery={gallery} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default IndexPage;

export const Head = () => {
  return <Seo title={"Bilder rund um die Hundefreunde Herzogenrath"} />;
};

export const pageQuery = graphql`
  query Galleries {
    galleries: allContentfulImageGallery(sort: { date: DESC }) {
      nodes {
        name
        date(formatString: "dddd, D. MMMM YYYY", locale: "de")
        slug
        id
        teaserImage {
          gatsbyImage(
            layout: CONSTRAINED
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
            cropFocus: CENTER
            width: 600
            height: 400
            quality: 50
          )
        }
        description {
          description
        }
      }
    }
  }
`;
