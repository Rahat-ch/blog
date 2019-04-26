import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

import { rhythm } from '../utils/typography'

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <div
            style={{
              display: `flex`,
              marginBottom: rhythm(2.5),
            }}
          >
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
                borderRadius: `100%`,
              }}
            />
            <p>
              My name is <strong>{author}</strong>. I blog about my journey through web development and try to share the knowledge I gain. 
              <br />
              <a href={`https://twitter.com/${social.twitter}`} target='_blank'>
                Follow me on Twitter
              </a>
              {' '}
              ●
              {' '}
              <a href={`https://www.linkedin.com/in/rahatc/`} target='_blank'>
                Connect on LinkedIn
              </a>
              {' '}
              ●
              {' '}
              <a href={`https://rahat.dev`} target='_blank'>
                My Portfolio
              </a>
            </p>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Bio
