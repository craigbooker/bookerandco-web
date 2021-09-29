import React from 'react'
import HeroSpacer from '../components/common/HeroSpacer'
import Hero from '../components/common/Hero'
import StyledHero from '../components/StyledHero'
import HeroBanner from '../components/HeroBanner'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import ServicesList from '../components/common/ServicesList'
import Title from '../components/Title'

import {
  about,
  aboutCenter,
  aboutImg,
  aboutInfo,
} from '../assets/css/about.module.css'

const Services = ({ data }) => {
  return (
    <Layout>
      <SEO title="About " />
      {/* <HeroSpacer /> */}
      <StyledHero>
        <HeroBanner title="services" info="" />
      </StyledHero>
      {/* <Hero /> */}
      <ServicesList />
      <br />
    </Layout>
  )
}

export default Services
