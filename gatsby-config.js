require("dotenv").config({
  path: ".env",
});

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "Hundefreunde Herzogenrath",
    siteUrl: "https://hundefreunde-herzogenrath.de",
    description: "Hundefreunde Herzogenrath e.V."
  },
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      spaceId: process.env.CONTENTFUL_SPACE_ID,
      downloadLocal: true,
    },
  },
  "gatsby-plugin-image",
  "gatsby-plugin-sharp",
  "gatsby-transformer-sharp",
  "gatsby-plugin-postcss",
  "gatsby-plugin-sitemap",
  "gatsby-plugin-no-sourcemaps",
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "images",
      path: "./src/images/",
    },
    __key: "images",
  },
  {
    resolve: "gatsby-plugin-gatsby-cloud",
    options: {
      allPageHeaders: ["x-frame-options : SAMEORIGIN"],
    },
  },]
};