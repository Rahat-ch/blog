import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import logo from '../images/mee.png'

const HeaderWrapper = styled.div`
  ${'' /* background: #f6f6f6; */}
  margin-bottom: 1.45rem;
`;

const HeaderContainer = styled.div`
width: 100%;
padding: 1rem;
margin-left: 25%;
h1{
  padding-bottom: 1rem;
  color: #6C62FF;
}

`;

const HeaderItems = styled.div`
  display: flex;
img {
  margin-bottom: 0;
  margin-left: 0;
  border-radius: 50%;

}

h4{
  width: 50%;
  margin-top: 1rem;
  margin-left: 1rem;
}

a{
  color: #6C62FF;
  text-decoration: none;
}
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <Link to="/"
      style={{
        color: `white`,
        textDecoration: `none`,
      }}>
      <h1 style={{ margin: 0 }}>
        Rahat Codes
      </h1>
      </Link>
      <HeaderItems>
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        <img style ={{
          width: '100px',
        }} src = {logo} alt="My Logo"/>
      </Link>
      <h4> A personal blog by Rahat Chowdhury <br/> Follow Rahat: <br /> <a href ="https://twitter.com/Rahat_Music" target="_blank">Twitter </a> • <a href ="https://www.linkedin.com/in/rahatc/" target="_blank">Linkedin</a></h4>

      </HeaderItems>
    </HeaderContainer>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,

}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
