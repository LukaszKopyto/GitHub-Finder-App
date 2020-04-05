import React, { Component } from 'react'
import { createGlobalStyle } from 'styled-components'
import './App.css'
import Navbar from './component/navbar/Navbar'

export const GlobalStyle = createGlobalStyle`
  body {
    padding: 0px;
    margin: 0px;
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
`

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Navbar />
      </>
    )
  }
}

export default App
