import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Logo } from '../logo/Logo'
import { Title } from '../title/Title'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import MenuList from './MenuList'

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-item: center;
  height: 80px;
  padding: 0 15px;
  background: linear-gradient(135deg, rgb(0, 127, 255), rgb(0, 59, 255));
`

const Navbar = ({ title }) => {
  return (
    <Nav>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <Logo>
          <FontAwesomeIcon icon={faGithub} style={{ fontSize: 40 }} />
          <Title>{title}</Title>
        </Logo>
      </Link>
      <MenuList>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </MenuList>
    </Nav>
  )
}

Navbar.defaultProps = {
  title: 'GitHub Finder',
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Navbar
