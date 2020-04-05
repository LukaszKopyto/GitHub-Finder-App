import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { createGlobalStyle } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0px;
    margin: 0px;
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-item: center;
  height: 80px;
  padding: 0 15px;
  background: linear-gradient(135deg, rgb(0, 127, 255), rgb(0, 59, 255));
`

const Logo = styled.section`
  width: 270px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`

const Title = styled.h1`
  font-size: 25px;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  font-weigth: 800;
  color: white;
`

class Navbar extends Component {
  static defaultProps = {
    title: 'GitHub Finder',
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
  }

  render() {
    return (
      <>
        <GlobalStyle />
        <Nav>
          <Logo>
            <FontAwesomeIcon icon={faGithub} style={{ fontSize: 40 }} />
            <Title>{this.props.title}</Title>
          </Logo>
        </Nav>
      </>
    )
  }
}

export default Navbar
