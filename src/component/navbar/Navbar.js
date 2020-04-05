import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Logo } from '../logo/Logo'
import { Title } from '../title/Title'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-item: center;
  height: 80px;
  padding: 0 15px;
  background: linear-gradient(135deg, rgb(0, 127, 255), rgb(0, 59, 255));
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
      <Nav>
        <Logo>
          <FontAwesomeIcon icon={faGithub} style={{ fontSize: 40 }} />
          <Title>{this.props.title}</Title>
        </Logo>
      </Nav>
    )
  }
}

export default Navbar
