import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

import Seo from "../../components/tools/seo";
import MainLayout from "../../layouts/main";

import TatzenHeader from "../../components/tools/tatzenheader";
import LightBox from "../../components/lightbox";

const GalleryPage = ({ location, data }) => {
  const gallery = data.gallery;

  return (
    <MainLayout location={location}>
      <div className="container mx-auto">
        <TatzenHeader className="py-10">{gallery.name}</TatzenHeader>
        {gallery.description.description && (
          <h3 className="mb-4">{gallery.description.description}</h3>
        )}

        <div className="mb-4 flex flex-col gap-2 text-center lg:flex-row">
          {gallery.images.map((image) => (
            <LightBox image={image.image}>
              <GatsbyImage
                className="h-full rounded-lg drop-shadow-lg"
                image={image.preview}
              />
            </LightBox>
          ))}
        </div>

        <div className="my-10 text-center md:text-right">
          <Link
            to={`/bilder/#main`}
            className="rounded bg-sky-500 px-4 py-2 text-xl font-semibold text-white transition hover:bg-sky-700"
          >
            Alle Bilder
          </Link>
        </div>
      </div>
    </MainLayout>
  );
};

export default GalleryPage;

export const Head = () => {
  return <Seo title={"Bilder rund um die Hundefreunde Herzogenrath"} />;
};

export const pageQuery = graphql`
  query Galleries($slug: String!) {
    gallery: contentfulImageGallery(slug: { eq: $slug }) {
      name
      date(formatString: "dddd, D. MMMM YYYY", locale: "de")
      id
      description {
        description
      }
      images {
        preview: gatsbyImage(
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
          width: 400
          quality: 90
        )
        image: gatsbyImage(
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
          width: 2000
          quality: 90
        )
      }
    }
  }
`;
