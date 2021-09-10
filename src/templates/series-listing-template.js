import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import HeroTop from '../components/common/HeroTop'
import HeroBanner from '../components/HeroBanner'
import Series from '../components/Series'
import SEO from '../components/Seo'
import Pagination from '../components/Pagination'

const SeriesIndex = ({ data, pageContext }) => {
  const {
    allMdx: { nodes: posts },
  } = data

  //console.log('POSTS:' + posts)
  // const { posts } = data.posts

  return (
    <Layout>
      <SEO title="Series " />
      {/* <Hero /> */}

      <HeroTop>
        <HeroBanner title="Series" info="" />
      </HeroTop>
      <main>
        {/* <Posts posts={posts} title="blog" /> */}
        <Series series={posts} title="series" />
        <Pagination pageContext={pageContext} pageSlug="series" />
      </main>
    </Layout>
  )
}

export default SeriesIndex

/* eslint no-undef: "off" */
export const seriesIndexQuery = graphql`
  query seriesIndexQuery($skip: Int!, $limit: Int!) {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/series/" } }
      sort: { fields: frontmatter___date, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      nodes {
        id
        excerpt
        frontmatter {
          title
          author
          category
          tags
          date(formatString: "MMMM, Do YYYY")
          slug
          cover {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`
