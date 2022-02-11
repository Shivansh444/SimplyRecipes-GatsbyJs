/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  // Fetching SitemetaDta using graph ql
  // this is  the site data
  siteMetadata: {
    title: "Simply Recipes",
    description: "nice and clean recipes site",
    author: "@shivanshbhat",
    person: { name: "shivansh", age: 21 },
    simpleData: ["item 1", "item 2"],
    complexData: [
      { name: "shivansh", age: 21 },
      { name: "Rishabh", age: 22 },
      { name: "Sumedha", age: 81 },
    ],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    //fetching file system using graph ql
    //first we download gatsby file-system
    // then we add the below code n our gatby-config, plugins 
    // then gives access to the folder/ file with path given too
    //now we can fetch the data in graphql via browser sandbox or any component
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        //whatfile you need to access put the path and name
        path: `${__dirname}/src/assets/images`,
      },
    }, {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `examples`,
        //whatfile you need to access put the path and name
        path: `${__dirname}/src/examples`,
      },
    },
  ],
}
