import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getSrc } from "gatsby-plugin-image";
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

        {gallery.description && (
          <h3 className="mx-2">{gallery.description.description}</h3>
        )}
        <div className="mx-2 mb-4 flex flex-wrap gap-1 text-neutral-400 transition hover:text-neutral-800">
          <div className="mb-0 mt-0.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path d="M5.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H6a.75.75 0 01-.75-.75V12zM6 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H6zM7.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H8a.75.75 0 01-.75-.75V12zM8 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H8zM9.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V10zM10 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H10zM9.25 14a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V14zM12 9.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V10a.75.75 0 00-.75-.75H12zM11.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H12a.75.75 0 01-.75-.75V12zM12 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H12zM13.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H14a.75.75 0 01-.75-.75V10zM14 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H14z" />
              <path
                fillRule="evenodd"
                d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div>{gallery.date}</div>
        </div>

        <div className="mx-2 mb-4 grid grid-cols-4 gap-2 text-center lg:grid-cols-4">
          {gallery.images.map((image) => (
            <LightBox image={image.image}>
              <GatsbyImage
                className="h-full rounded-lg drop-shadow-lg"
                image={image.preview}
              />
            </LightBox>
          ))}
        </div>

        <div className="mx-2 my-6 flex flex-nowrap text-neutral-800">
          <Link
            to="/bilder#main"
            className="rounded bg-sky-500 px-4 py-2 font-semibold text-white transition hover:bg-sky-700"
          >
            <div className="flex flex-nowrap">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6 pr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
                  />
                </svg>
              </div>
              <div>Alle Beiträge</div>
            </div>
          </Link>
        </div>
      </div>
    </MainLayout>
  );
};

export default GalleryPage;

export const Head = ({ data, location }) => {
  const gallery = data.gallery;

  return (
    <Seo
      title={gallery.name}
      description={gallery.description && gallery.description.description}
      image={getSrc(gallery.teaserImage)}
      path={location.pathname}
      type="article"
    />
  );
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
      teaserImage {
        gatsbyImage(
          layout: CONSTRAINED
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
          cropFocus: CENTER
          width: 600
          quality: 90
        )
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
