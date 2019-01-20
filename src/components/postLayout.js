import React, { Component } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import { graphql } from 'gatsby'
import Layout2 from './layout2'

//static query can be used anywhere
//but it does not except variables, can't use context

//page query
//must be used on pages

const PostContent = styled.div`
  font-size: 0.8rem;
  font-family: sans-serif;
  width: 100%;

  h1 {
    color: #6c62ff;
  }

  h2 {
    max-width: 100%;
    color: #6c62ff;
  }
`

export default class postLayout extends Component {
  render() {
    const { markdownRemark } = this.props.data

    return (
      <Layout2>
        <PostContent>
          <h1>{markdownRemark.frontmatter.title}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: markdownRemark.html,
            }}
          />
        </PostContent>
      </Layout2>
    )
  }
}

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        slug
      }
    }
  }
`
