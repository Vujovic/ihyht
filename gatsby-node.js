const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allStrapiNews {
          edges {
            node {
              Link
              Title
            }
          }
        }
      }
    `).then(results => {
      results.data.allStrapiNews.edges.forEach(edge => {
        actions.createPage({
          path: edge.node.Link,
          component: path.resolve('./src/templates/newsArticle.js'),
          context: {
            link: edge.node.Link,
            title: edge.node.Title,
          },
        })
      })
      resolve()
    })
  })
}
