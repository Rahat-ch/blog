import React, { Component } from 'react'
import { graphql } from 'gatsby';
import Layout from './layout'

//static query can be used anywhere
//but it does not except variables, can't use context

//page query
//must be used on pages

export default class postLayout extends Component {
  render () {
    const { markdownRemark } = this.props.data;


    return(
      <Layout>
      <div>
        <h1>{markdownRemark.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML = {{
          __html: markdownRemark.html
        }} />
      </div>
      </Layout>
    )
  }
}

export const query = graphql`
query PostQuery ($slug: String!){
markdownRemark(frontmatter: {
  slug: {
    eq: $slug
  }
}) {
  html
  frontmatter{
    title
    date
    slug
  }
}
}
`;
