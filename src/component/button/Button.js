import styled from 'styled-components'
import { colors } from '../../utils/colors'
import { Link } from 'react-router-dom'

const Button = styled(Link)`
  background: ${colors.primary};
  padding: 10px 30px;
  display: block;
  width: ${(props) => props.width || null};
  color: ${colors.white};
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  font-size: 15px;
  margin: 20px auto;
  border-radius: 5px;
  &:hover {
    box-shadow: 0px 5px 10px 1px rgba(0, 59, 255, 0.6);
  }
`
export default Button
