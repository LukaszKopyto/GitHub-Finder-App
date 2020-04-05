import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Nav, Logo, Title } from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

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
