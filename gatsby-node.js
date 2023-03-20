const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;

  // ---------------------------------------------------------
  // Blog pages
  // ---------------------------------------------------------

  // Create index page for the blog (required for pagination)
  const postsPerPage = 5;
  const blogTemplate = path.resolve(`src/templates/blog/blog-overview.jsx`);

  const pageInfoQl = await graphql(`
    query blogPages {
      blog: allContentfulBlogPost(
        limit: ${postsPerPage}
        ) {
        pageInfo {
          pageCount
          totalCount
        }
      }
    }
  `);

  Array.from({ length: pageInfoQl.data.blog.pageInfo.pageCount }).forEach(
    (_, i) => {
      createPage({
        path: i === 0 ? `/blog` : `/blog/${i + 1}`,
        component: blogTemplate,
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          pageCount: pageInfoQl.data.blog.pageInfo.pageCount,
          currentPage: i + 1,
          totalCount: pageInfoQl.data.blog.pageInfo.totalCount,
          tag: "*",
        },
      });
    }
  );

  // Create tag pages dynamically
  const tagQl = await graphql(`
    query {
      tags: allContentfulBlogPost {
        distinct(field: { tags: SELECT })
      }
    }
  `);

  tagQl.data.tags.distinct.forEach((tag) => {
    createPage({
      path: `/blog/tags/${tag}`,
      component: blogTemplate,
      context: {
        limit: 999999,
        skip: 0,
        tag: tag,
      },
    });
  });

  createRedirect({
    fromPath: "/blog/tags/",
    toPath: "/blog/",
    isPermanent: true,
  });
};
