import React from 'react'
import styled from 'styled-components'
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

const ArchiveBlock = styled.aside`
  box-shadow: 0px 3px 100px rgba(25, 17, 34, 0.05);
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  margin-top: 1rem;
  a {
    color: #6C62FF;
    text-decoration: none;
    font-family: sans-serif;
  }
  h2{
    margin-bottom: 0;
  }
  p {
    font-size: 0.8rem;
  }
`;

const ArchiveList = styled.ul`
padding: 0;
margin: 0;
list-style: none;


`;

const Archive = ({children}) => (<StaticQuery query={POST_ARCHIVE_QUERY} render={({allMarkdownRemark}) => (<> < ArchiveBlock > <h3>Latest Posts</h3>
    <ArchiveList>
    {
    allMarkdownRemark.edges.map(edge => (<li key={edge.node.frontmatter.slug}>
      <Link to = {`/posts${edge.node.frontmatter.slug}`}>{edge.node.frontmatter.title}</Link> <p>{edge.node.frontmatter.date}</p>
      {/* <p>{edge.node.timeToRead} min read</p> */}
    </li>))
  } </ArchiveList>< /ArchiveBlock>

      </ >)}/>)

export default Archive
