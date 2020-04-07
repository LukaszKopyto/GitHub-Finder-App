import React, { Component } from 'react'
import { createGlobalStyle } from 'styled-components'
import './App.css'
import Navbar from './component/navbar/Navbar'
import Users from './component/users/Users'
import axios from 'axios'

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
  state = {
    users: [],
    loading: false,
  }

  async componentDidMount() {
    this.setState({ loading: true })
    const resp = await axios.get('https://api.github.com/users')
    this.setState({
      users: resp.data,
      loading: false,
    })
  }

  render() {
    const { users, loading } = this.state
    return (
      <>
        <GlobalStyle />
        <Navbar />
        <Users loading={loading} users={users} />
      </>
    )
  }
}

export default App
