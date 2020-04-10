import styled from 'styled-components'

export const CardWrapper = styled.div`
  min-width: 250px;
  max-width: 350px;
  border: 1px solid gainsboro;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px auto;
  &:hover {
    box-shadow: 0px 5px 15px 1px rgba(220, 220, 220, 0.3);
  }
`
