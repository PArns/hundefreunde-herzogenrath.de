import * as React from "react";

import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import classNames from "classnames";

import Excerpt from "./excerpt";
import Tag from "./tag";

const BlogCard = ({ post, className, ...other }) => {
  const options = {
    renderNode: {
      ["embedded-entry-inline"]: (node) => {
        return <></>;
      },
      [INLINES.HYPERLINK]: (node) => {
        const content = node.content[0];
        return <>{content.value}</>;
      },
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        return <></>;
      },
    },
  };

  const boxClasses = classNames("rounded-lg border bg-white shadow-lg", className);

  return (
    <div className={boxClasses} {...other}>
      <div className="relative">
        <div>
          <a href={`/blog/${post.slug}/#main`}>
            <GatsbyImage
              image={getImage(post.image)}
              alt={post.title}
              className="h-56 w-full rounded-lg object-contain"
            />
          </a>
        </div>
        <a href={`/blog/${post.slug}/#main`}>
          <div className="absolute top-2 left-3">
            <h3 className="font-bold text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] md:mb-2 md:text-5xl">
              {post.title}
            </h3>
            <h4 className="font-semibold text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] md:text-3xl">
              {post.subTitle}
            </h4>
          </div>
        </a>
        <div className="absolute bottom-2 right-3 font-semibold text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] md:text-xl">
          {post.publishedAt}
        </div>

        {post.tags && (
          <div className="absolute bottom-1 left-2">
            {post.tags.map((tag) => (
              <Tag tag={tag} key={tag} />
            ))}
          </div>
        )}
      </div>
      <a href={`/blog/${post.slug}/#main`} className="h-max text-black">
        <Excerpt className="p-2">{renderRichText(post.body, options)}</Excerpt>
      </a>
    </div>
  );
};

export default BlogCard;
