import * as React from "react";

import { graphql } from "gatsby";

import Seo from "../../components/tools/seo";
import MainLayout from "../../layouts/main";

import TatzenHeader from "../../components/tools/tatzenheader";
import BlogCard from "../../components/blog/blogcard";
import Tag from "../../components/blog/tag";
import Pagination from "../../components/blog/pagination";

import Container from "../../components/layout/container";

const Title = "Neuigkeiten rund um die Hundefreunde";

const BlogIndex = ({ data, pageContext, location }) => {
  const showAllPosts = pageContext.tag === "*";

  const blogPostData = showAllPosts ? data.posts.nodes : data.taggedPosts.nodes;
  const tagData = data.tags.distinct;

  return (
    <MainLayout location={location}>
      <div className="container mx-auto">
        <div className="mb-5 mt-10">
          <TatzenHeader>Aktuelles rund um die Hundefreunde</TatzenHeader>
        </div>

        <Container>
          <div className="flex flex-wrap gap-2 py-2 md:gap-4 md:pt-4 lg:flex-nowrap">
            <div className="w-max">
              {blogPostData.map((post) => (
                <BlogCard
                  post={post}
                  key={post.slug}
                  className="mb-10 last:mb-5"
                />
              ))}

              {showAllPosts && pageContext.pageCount > 1 && (
                <div className="flex rounded-lg bg-white">
                  <Pagination
                    urlPrefix="/blog/"
                    limit={pageContext.limit}
                    skip={pageContext.skip}
                    currentPage={pageContext.currentPage}
                    pageCount={pageContext.pageCount}
                    totalCount={pageContext.totalCount}
                  />
                </div>
              )}
            </div>

            <div className="hidden h-fit lg:flex">
              <div className="w-[350px] rounded-lg border bg-white p-2 shadow-lg">
                <h4 className="mb-1 font-semibold">Blog Tag-Cloud</h4>
                {tagData.map((tag) => (
                  <Tag tag={tag} key={tag} />
                ))}

                {!showAllPosts && (
                  <Tag
                    tag="Alle anzeigen"
                    key="Alle anzeigen"
                    uri="/blog/#main"
                  />
                )}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </MainLayout>
  );
};

export default BlogIndex;

export const Head = () => {
  return <Seo title={Title} />;
};

export const pageQuery = graphql`
  query BlogIndexQuery($skip: Int!, $limit: Int!, $tag: String!) {
    taggedPosts: allContentfulBlogPost(
      sort: { publishedAt: DESC }
      filter: { tags: { glob: $tag } }
    ) {
      nodes {
        title
        subTitle
        slug
        tags
        publishedAt(formatString: "dddd, D. MMMM YYYY", locale: "de")
        image {
          gatsbyImage(
            layout: CONSTRAINED
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
            width: 1540
            height: 224
            quality: 90
          )
        }
        body {
          raw
        }
      }
    }
    posts: allContentfulBlogPost(
      sort: { publishedAt: DESC }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        title
        subTitle
        slug
        tags
        publishedAt(formatString: "dddd, D. MMMM YYYY", locale: "de")
        image {
          gatsbyImage(
            layout: CONSTRAINED
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
            width: 800
            quality: 50
          )
        }
        body {
          raw
        }
      }
    }
    tags: allContentfulBlogPost {
      distinct(field: { tags: SELECT })
    }
  }
`;
