module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "portfolio",
  },
  plugins:
  [
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        jsxPragma: `jsx`,
        allExtensions: true,
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "christophernoble.ca",
      },
    },
  ],
  
};
