const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allStrapiNews {
          edges {
            node {
              link
              title
            }
          }
        }
      }
    `).then(results => {
      results.data.allStrapiNews.edges.forEach(edge => {
        actions.createPage({
          path: edge.node.link,
          component: path.resolve('./src/templates/newsArticle.js'),
          context: {
            link: edge.node.link,
            title: edge.node.title,
          },
        })
      })
      resolve()
    })
  })
}
