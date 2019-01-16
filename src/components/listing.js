import React from 'react'
import styled from 'styled-components'
import { Link, StaticQuery, graphql } from 'gatsby'

import SEO from '../components/seo'

const LISTING_QUERY = graphql`
query BlogPostListing{
allMarkdownRemark(limit: 5, sort: {
order:DESC,
fields: [frontmatter___date]
}){
edges {
  node {
    excerpt
    timeToRead
    frontmatter {
      title
      slug
      date(formatString: "MMMM DD, YYYY")
  }
}
}
}
}
`

const Post = styled.article`
  box-shadow: 0px 3px 100px rgba(25, 17, 34, 0.05);
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  margin-top: 1rem;
  a {
    color: #6C62FF;
    text-decoration: none;
  }
  h2{
    margin-bottom: 0;
  }
  p {
    font-size: 0.8rem;
    font-family: sans-serif;
  }
  .read-more{
    text-decoration: underline;
  }
`;


const Listing = () => (
<StaticQuery
  query = {LISTING_QUERY}
  render= {({allMarkdownRemark}) => (
    allMarkdownRemark.edges.map(({node}) => (
      <Post key={node.frontmatter.slug}>
        <Link to = {`/posts${node.frontmatter.slug}`}>
          <h2>{node.frontmatter.title}</h2>
        </Link>
        <p>{node.frontmatter.date} • {node.timeToRead} minute read </p>
        <p>{node.excerpt}</p>
        <Link class="read-more" to = {`/posts${node.frontmatter.slug}`}>Read More</Link>
      </Post>
    ))
  )}
/>
)

export default Listing


{/* <div>
  <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
  <h1>Hi people</h1>
  <p>Welcome to your new Gatsby site.</p>
  <p>Now go build something great.</p>

  <Link to="/page-2/">Go to page 2</Link>
  </div> */}
