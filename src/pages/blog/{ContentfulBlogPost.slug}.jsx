import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getSrc } from "gatsby-plugin-image";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";

import Seo from "../../components/tools/seo";
import Permalink from "../../components/tools/permalink";

import Container from "../../components/layout/container";

import {
  FlexContainer,
  FlexContentMain,
} from "../../components/layout/flexContent";
import { Link } from "gatsby";

import Tag from "../../components/blog/tag";

import "./blog.css";

import classNames from "classnames";
import Gallery from "../../components/gallery";
import LightBox from "../../components/lightbox";

import MainLayout from "../../layouts/main";

const BlogPost = ({ data, location }) => {
  const post = data.post;

  const options = {
    renderNode: {
      ["embedded-entry-inline"]: (node) => {
        if (!node.data.target) return <b>UNKNOWN TARGET!</b>;
        if (!node.data.target.__typename) return <b>PLEASE ADD __typename!</b>;

        switch (node.data.target.__typename) {
          case "ContentfulBlogPostImage": {
            var {
              useDefaultStyle,
              floatingDirection,
              maxWidth,
              classes,
              imageClasses,
              styles,
              showSubtitle,
              useLightBox,
              image,
              name,
            } = node.data.target;

            var styleObject =
              styles !== null ? JSON.parse(styles.internal.content) : {};

            classes = classes || [];
            classes.push("object-cover");

            imageClasses = imageClasses || [];

            if (showSubtitle) classes.push("mb-1");

            if (useDefaultStyle) {
              classes.push("border");
              classes.push("rounded-lg");
              classes.push("drop-shadow-lg");

              imageClasses.push("rounded-lg");
            }

            if (floatingDirection)
              classes.push(`float-${floatingDirection.toLowerCase()}`);

            if (maxWidth && maxWidth > 0)
              styleObject["maxWidth"] = `${maxWidth}px`;

            var subTitleClasses = classNames("text-center", {
              "float-left": classes.indexOf("float-left") > -1,
              "pr-4": classes.indexOf("float-left") > -1,
              "float-right": classes.indexOf("float-right") > -1,
              "pl-4": classes.indexOf("float-right") > -1,
            });

            var lightBoxData = {
              image: image.image,
              title: image.title,
              description: image.description,
            };

            return (
              <div className={subTitleClasses}>
                <LightBox enabled={useLightBox} images={lightBoxData}>
                  <GatsbyImage
                    image={image.previewImage}
                    alt={image.title}
                    title={image.description}
                    className={classes.join(" ")}
                    imgClassName={imageClasses.join(" ")}
                    style={styleObject}
                  />
                </LightBox>
                {showSubtitle && <p className="text-gray-400">{name}</p>}
              </div>
            );
          }
          case "ContentfulImageGallery": {
            return (
              <div className="clear-both flex justify-center">
                <div className="xl:w-5/6">
                  <Gallery gallery={node.data.target} />
                </div>
              </div>
            );
          }
          default: {
            return (
              <b>
                UNKNOWN embedded-entry-inline TYPE:{" "}
                {node.data.target.__typename}
              </b>
            );
          }
        }
      },
      [INLINES.HYPERLINK]: (node) => {
        const uri = node.data.uri;
        const content = node.content[0];
        return (
          <a href={uri} target="_blank" rel="noreferrer">
            {content.value}
          </a>
        );
      },
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { gatsbyImage, description } = node.data.target;
        return <GatsbyImage image={gatsbyImage} alt={description} />;
      },
    },
  };

  return (
    <MainLayout location={location}>
      <Container>
        <FlexContainer>
          <FlexContentMain>
            <h1>{post.title}</h1>
            <h2>{post.subTitle}</h2>
            <div className="mt-5 flex flex-wrap gap-1 text-neutral-400 transition hover:text-neutral-800">
              <div className="mt-0.5 mb-2">
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
              <div>{post.publishedAt}</div>
            </div>
            <div id="blogContent">{renderRichText(post.body, options)}</div>
            <div className="clear-both grid grid-cols-1 pt-4 opacity-70 transition hover:opacity-100">
              {post.tags && (
                <div className="mt-1 mr-1 flex flex-nowrap text-neutral-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="mr-2 mt-1 h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 6h.008v.008H6V6z"
                    />
                  </svg>

                  {post.tags.map((tag) => (
                    <Tag tag={tag} key={tag} />
                  ))}
                </div>
              )}

              <div className="mt-1 mr-1 flex flex-nowrap text-neutral-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-2 mt-1 h-6 w-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M18.97 3.659a2.25 2.25 0 00-3.182 0l-10.94 10.94a3.75 3.75 0 105.304 5.303l7.693-7.693a.75.75 0 011.06 1.06l-7.693 7.693a5.25 5.25 0 11-7.424-7.424l10.939-10.94a3.75 3.75 0 115.303 5.304L9.097 18.835l-.008.008-.007.007-.002.002-.003.002A2.25 2.25 0 015.91 15.66l7.81-7.81a.75.75 0 011.061 1.06l-7.81 7.81a.75.75 0 001.054 1.068L18.97 6.84a2.25 2.25 0 000-3.182z"
                    clipRule="evenodd"
                  />
                </svg>
                <Permalink />
              </div>
            </div>

            <div className="mt-6 mr-1 flex flex-nowrap text-neutral-800">
              <Link
                to="/blog#main"
                className="rounded bg-sky-500 py-2 px-4 font-semibold text-white transition hover:bg-sky-700"
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
          </FlexContentMain>
        </FlexContainer>
      </Container>
    </MainLayout>
  );
};

export default BlogPost;

export const Head = ({ data, location }) => {
  const post = data.post;

  return (
    <Seo
      title={post.title}
      description={post.subTitle}
      image={getSrc(post.previewImage)}
      path={location.pathname}
      type="article"
    />
  );
};

export const pageQuery = graphql`
  query BlogIndexQuery($slug: String!) {
    post: contentfulBlogPost(slug: { eq: $slug }) {
      title
      subTitle
      tags
      slug
      publishedAt(formatString: "dddd, D. MMMM YYYY", locale: "de")
      image {
        gatsbyImage(
          layout: CONSTRAINED
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
          width: 1600
        )
      }
      previewImage: image {
        gatsbyImage(
          layout: CONSTRAINED
          placeholder: BLURRED
          formats: [JPG]
          width: 600
          quality: 90
        )
      }
      body {
        raw
        references {
          ... on ContentfulBlogPostImage {
            contentful_id
            useDefaultStyle
            floatingDirection
            maxWidth
            classes
            imageClasses
            styles {
              internal {
                content
              }
            }
            showSubtitle
            name
            lightBox
            image {
              title
              description
              previewImage: gatsbyImage(
                layout: CONSTRAINED
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
                width: 600
              )
              image: gatsbyImage(
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
                width: 1600
                quality: 90
              )
            }
            __typename
          }
          ... on ContentfulImageGallery {
            contentful_id
            images {
              title
              description
              image: gatsbyImage(
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
                width: 2000
                quality: 90
              )
              previewImage: gatsbyImage(
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
                width: 450
                quality: 50
              )
            }
            __typename
          }
        }
      }
    }
  }
`;
