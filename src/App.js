import React, { useState } from 'react'
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
import GithubState from './context/github/githubState'

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

const App = () => {
  const [users, setUsers] = useState([])
  const [user, setUser] = useState({})
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState(null)

  //Search Github users
  const searchUser = async (text) => {
    setLoading(true)
    const resp = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    )
    setUsers(resp.data.items)
    setLoading(false)
  }

  //Get single Github user
  const getUser = async (username) => {
    setLoading(true)
    const resp = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    )
    setUser(resp.data)
    setLoading(false)
  }

  //Get user repos
  const getUserRepos = async (username) => {
    setLoading(true)
    const resp = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    )
    setRepos(resp.data)
    setLoading(false)
  }

  //Clear users from state
  const clearUsers = () => setUsers([])

  //Set alert
  const showAlert = (msg, type) => {
    setAlert({ msg, type })
    setTimeout(() => {
      setAlert(null)
    }, 3700)
  }

  return (
    <GithubState>
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
                    searchUser={searchUser}
                    clearUsers={clearUsers}
                    showClear={users.length > 0 ? true : false}
                    setAlert={showAlert}
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
                  getUser={getUser}
                  getUserRepos={getUserRepos}
                  user={user}
                  repos={repos}
                  loading={loading}
                />
              )}
            />
          </Switch>
        </Container>
      </Router>
    </GithubState>
  )
}

export default App
