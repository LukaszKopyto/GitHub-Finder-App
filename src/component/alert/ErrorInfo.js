import styled from 'styled-components';
import { colors } from '../../utils/colors';

const ErrorInfo = styled.div`
  border: 2px solid ${colors.error};
  border-radius: 5px;
  width: 80vw;
  font-size: 20px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  line-height: 30px;
  margin: 20px auto -15px;
  padding: 9px 15px;
  display: flex;
  align-item: center;
  background: ${colors.error};
  color: ${colors.white};
`;

export default ErrorInfo;
