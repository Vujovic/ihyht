import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <div
      style={{
        backgroundColor: "#fff",
        height: "2000px",
        position: "relative",
        zIndex: "20",
      }}
    >
      <h1>We do stuff</h1>
    </div>
  </Layout>
)

export default IndexPage
