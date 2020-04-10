import styled from 'styled-components'
import { colors } from '../../utils/colors'

const Badge = styled.div`
  display: ${(props) => (props.display === 'inline' ? 'inline' : 'block')};
  color: ${colors.dark};
  border: 1px solid ${colors.secondary};
  border-radius: 5px;
  padding: 10px 15px;
  margin-right: 15px;
  width: ${(props) => (props.display === 'inline' ? '40%' : null)};
  &:hover {
    border: 1px solid ${colors.primary};
    color: ${colors.primary};
    font-weight: 500;
  }
`

export default Badge
