import * as React from "react";
import { graphql, Link } from "gatsby";

import Seo from "../components/tools/seo";
import MainLayout from "../layouts/main";

import Kurse from "../sections/kurse";

import { HeartIcon } from "@heroicons/react/24/solid";

import FixedBackground from "../components/tools/fixedbackground";

import TatzenHeader from "../components/tools/tatzenheader";
import BlogCard from "../components/blog/blogcard";

import AboutUs from "../sections/about";
import Anfahrt from "../sections/anfahrt";

const IndexPage = ({ location, data }) => {
  const posts = data.posts.nodes;

  return (
    <MainLayout location={location}>
      <div className="my-10">
        <TatzenHeader>Unsere Kurse</TatzenHeader>
      </div>

      <Kurse className="container mx-auto mb-10" />

      <div className="w-full bg-gray-100 py-5">
        <div className="container mx-auto">
          <div className="my-10">
            <TatzenHeader>Aktuelles</TatzenHeader>
          </div>

          <div className="container mx-auto my-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {posts &&
              posts.map((post) => <BlogCard key={post.slug} post={post} />)}
          </div>

          <div className="my-10 text-right">
            <Link
              to={`/blog/#main`}
              className="rounded bg-sky-500 px-4 py-2 text-xl font-semibold text-white transition hover:bg-sky-700"
            >
              Weitere Neuigkeiten gibt es hier ...
            </Link>
          </div>
        </div>
      </div>

      <FixedBackground
        imageName="hundmitwelpe.jpg"
        className="grid place-content-center py-10 text-4xl font-bold text-white drop-shadow-lg md:py-16 md:text-6xl lg:py-20 lg:text-8xl xl:py-28 xl:text-9xl"
      >
        <div className="grid-row grid place-content-center">
          <div className="flex flex-row justify-center">
            Wir
            <span className="relative mx-1 h-12 w-12 text-red-500 md:h-16 md:w-16 lg:mx-2 lg:h-24 lg:w-24 xl:mx-6 xl:h-36 xl:w-36">
              <span className="absolute inline-flex h-full w-full ">
                <HeartIcon className="animate-ping" />
              </span>
              <span className="relative inline-flex h-full w-full">
                <HeartIcon />
              </span>
            </span>
            Hunde!
          </div>
        </div>
        <div className="text-center lg:-mt-6">
          <Link
            to="/anfahrt/#main"
            className="rounded-lg bg-sky-500 p-2 text-base hover:bg-sky-700 md:p-3 lg:text-2xl"
          >
            Besucht uns doch zu einer Probestunde!
          </Link>
        </div>
      </FixedBackground>

      <div className="bg-gray-100 py-10">
        <AboutUs className="container mx-auto" />
      </div>

      <Anfahrt className="container mx-auto py-10" />
    </MainLayout>
  );
};

export default IndexPage;

export const Head = () => {
  return <Seo />;
};

export const pageQuery = graphql`
  query BlogIndexQuery {
    posts: allContentfulBlogPost(sort: { publishedAt: DESC }, limit: 5) {
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
