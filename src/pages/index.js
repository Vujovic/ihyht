import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Introduction from "../components/companyIntro"
import WhyChooseUs from "../components/whyChooseUs"
import NewsCenter from "../components/newsCenter"
import Partners from "../components/partners"

const IndexPage = () => (
  <Layout>
    <SEO title="主页" />
    <Hero />
    <Introduction />
    <WhyChooseUs />
    <NewsCenter />
    <Partners />
  </Layout>
)

export default IndexPage
