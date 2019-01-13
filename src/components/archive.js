import React from 'react'
import PropTypes from 'prop-types'
import {StaticQuery, graphql} from 'gatsby'
import { Link } from 'gatsby'

const POST_ARCHIVE_QUERY = graphql `
  query BlogPostArchive{
    allMarkdownRemark(limit: 5, sort: {
    order:DESC,
    fields: [frontmatter___date]
  }){
    edges {
      node {
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

const Archive = ({children}) => (<StaticQuery query={POST_ARCHIVE_QUERY} render={({allMarkdownRemark}) => (<> < aside > <h3>Archive</h3>
    {
    allMarkdownRemark.edges.map(edge => (<li key={edge.node.frontmatter.slug}>
      <Link to = {`/posts${edge.node.frontmatter.slug}`}>{edge.node.frontmatter.title}</Link> <p>{edge.node.frontmatter.date}</p>
      {/* <p>{edge.node.timeToRead} min read</p> */}
    </li>))
  } < /aside>

      </ >)}/>)

export default Archive
