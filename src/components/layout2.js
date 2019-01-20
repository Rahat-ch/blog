import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import styled from 'styled-components'
import media from 'styled-media-query'

import Header from './header'
import Archive from './archive'
import './layout.css'

const MainLayout = styled.main`
  max-width: 90%;
  margin: 0 auto;
`
const Footer = styled.footer`
  margin-left: 40%;
  a {
    color: #6c62ff;
    text-decoration: none;
  }
`

const Layout2 = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery1 {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <MainLayout>
          <div>{children}</div>
          <Archive />
          <Footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </Footer>
        </MainLayout>
      </>
    )}
  />
)

Layout2.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout2
