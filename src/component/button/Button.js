import styled from 'styled-components'
import { colors } from '../../utils/colors'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Button = styled(Link)`
  background: ${(props) => (props.second ? colors.secondary : colors.primary)};
  padding: 10px 30px;
  display: block;
  width: ${(props) => props.width || null};
  color: ${(props) => (props.second ? colors.dark : colors.white)};
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  font-size: 15px;
  margin: ${(props) => (props.left ? '20px 0 35px' : '20px auto')};
  border-radius: 5px;
  &:hover {
    box-shadow: 0px 5px 10px 1px rgba(0, 59, 255, 0.6);
  }
`

Button.propTypes = {
  left: PropTypes.string,
  second: PropTypes.string,
}

export default Button
