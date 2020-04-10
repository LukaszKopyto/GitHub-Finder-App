import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import Navbar from './component/navbar/Navbar'
import Users from './component/users/Users'
import User from './component/users/User'
import axios from 'axios'
import Search from './component/search/Search'
import Alert from './component/alert/Alert'
import About from './component/pages/About'
import Container from './component/container/Container'

export const GlobalStyle = createGlobalStyle`
  body {
    padding: 0px;
    margin: 0px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
`

class App extends Component {
  state = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    alert: null,
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

  //Get single Github user
  getUser = async (username) => {
    this.setState({ loading: true })
    const resp = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    )
    this.setState({
      user: resp.data,
      loading: false,
    })
  }

  //Get user repos
  getUserRepos = async (username) => {
    this.setState({ loading: true })
    const resp = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    )
    this.setState({
      repos: resp.data,
      loading: false,
    })
  }

  //Clear users from state
  clearUsers = () => this.setState({ users: [], loading: false })

  //Set alert
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } })
    setTimeout(() => {
      this.setState({ alert: null })
    }, 3700)
  }

  render() {
    const { users, user, repos, loading, alert } = this.state
    return (
      <Router>
        <GlobalStyle />
        <Navbar />
        <Container>
          <Alert alert={alert} />
          <Switch>
            <Route
              exact
              path='/'
              render={(props) => (
                <>
                  <Search
                    searchUser={this.searchUser}
                    clearUsers={this.clearUsers}
                    showClear={users.length > 0 ? true : false}
                    setAlert={this.setAlert}
                  />
                  <Users loading={loading} users={users} />
                </>
              )}
            />
            <Route path='/about' component={About} />
            <Route
              path='/user/:login'
              render={(props) => (
                <User
                  {...props}
                  getUser={this.getUser}
                  getUserRepos={this.getUserRepos}
                  user={user}
                  repos={repos}
                  loading={loading}
                />
              )}
            />
          </Switch>
        </Container>
      </Router>
    )
  }
}

export default App
