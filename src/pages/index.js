import React from "react"
import ScrollAnimation from "react-animate-on-scroll"
import "animate.css/animate.min.css"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Introduction from "../components/companyIntro"
import WhyChooseUs from "../components/whyChooseUs"
import Products from "../components/products"
import NewsCenter from "../components/newsCenter"
import Partners from "../components/partners"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Introduction />
    <WhyChooseUs />
    <Products />
    <NewsCenter />
    <Partners />
  </Layout>
)

export default IndexPage
