import React, { Component } from 'react'
import { GlobalStyle } from './component/navbar/style'
import './App.css'
import Navbar from './component/navbar/Navbar'

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <div className='App'>
          <Navbar />
        </div>
      </>
    )
  }
}

export default App
