/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const { data } = await graphql(`
    query {
      rooms: allContentfulRoom {
        edges {
          node {
            path
          }
        }
      }
    }
  `)
  data.rooms.edges.forEach(({ node }) => {
    createPage({
      path: `${node.path}`,
      component: path.resolve("./src/templates/room-template.js"),
      context: {
        slug: node.path,
      },
    })
  })
}
