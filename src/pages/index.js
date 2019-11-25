import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Introduction from "../components/companyIntro"
import WhyChooseUs from "../components/whyChooseUs"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Introduction />
    <WhyChooseUs />
  </Layout>
)

export default IndexPage
