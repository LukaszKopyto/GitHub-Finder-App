import styled from 'styled-components'

const MenuList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  & li {
    display: inline-flex;
    text-align: center;
    padding: 10px;
    width: 70px;
  }
  & a {
    color: white;
    text-decoration: none;
    font-weight: 300;
  }
  & :hover {
    font-weight: 500;
  }
`
export default MenuList
