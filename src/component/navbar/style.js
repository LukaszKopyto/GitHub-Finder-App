import styled, { createGlobalStyle } from 'styled-components'
import { colors } from '../../utils/colors'

export const GlobalStyle = createGlobalStyle`
  body {
    padding: 0px;
    margin: 0px;
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
`

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-item: center;
  height: 80px;
  padding: 0 15px;
  background: linear-gradient(135deg, rgb(0, 127, 255), rgb(0, 59, 255));
`

export const Logo = styled.section`
  width: 270px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${colors.white};
`

export const Title = styled.h1`
  font-size: 25px;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  font-weigth: 800;
  color: ${colors.white};
`
