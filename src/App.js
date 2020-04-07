import React, { Component } from 'react'
import { createGlobalStyle } from 'styled-components'
import './App.css'
import Navbar from './component/navbar/Navbar'
import Users from './component/users/Users'
import axios from 'axios'
import Search from './component/search/Search'

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

  //Search Github users
  searchUser = async (text) => {
    this.setState({ loading: true })
    const resp = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    )
    this.setState({
      users: resp.data.items,
      loading: false,
    })
  }

  render() {
    const { users, loading } = this.state
    return (
      <>
        <GlobalStyle />
        <Navbar />
        <Search searchUser={this.searchUser} />
        <Users loading={loading} users={users} />
      </>
    )
  }
}

export default App
