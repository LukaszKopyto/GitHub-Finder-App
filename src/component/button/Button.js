import styled from 'styled-components'
import { colors } from '../../utils/colors'

export const Button = styled.a`
  background: ${colors.primary};
  padding: 10px 30px;
  text-decoration: none;
  color: ${colors.white};
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  text-transform: uppercase;
  font-size: 15px;
  margin: 0 0 20px;
  border-radius: 5px;
  &:hover {
    box-shadow: 0px 5px 10px 1px rgba(0, 59, 255, 0.6);
  }
`
