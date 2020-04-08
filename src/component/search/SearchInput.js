import styled from 'styled-components';
import { colors } from '../../utils/colors';

const SearchInput = styled.input`
  margin: 0 auto;
  height: 40px;
  width: 80vw;
  border: 1px solid ${colors.secondary};
  border-radius: 5px;
  display: block;
  margin-top: 40px;
  padding: 15px;
  font-size: 15px;
  font-weight: 300;
  color: ${colors.primary};
  &::placeholder {
    color: ${colors.secondary};
  }
`;

export default SearchInput;
