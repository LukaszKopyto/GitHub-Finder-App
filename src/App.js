import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import Navbar from './component/navbar/Navbar'
import User from './component/users/User'
import Alert from './component/alert/Alert'
import About from './component/pages/About'
import Container from './component/container/Container'
import GithubState from './context/github/githubState'
import AlertState from './context/alert/AlertState'
import Home from './component/pages/Home'
import NotFound from './component/pages/NotFound'

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
  return (
    <GithubState>
      <AlertState>
        <Router>
          <GlobalStyle />
          <Navbar />
          <Container>
            <Alert />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/user/:login' component={User} />
              <Route component={NotFound} />
            </Switch>
          </Container>
        </Router>
      </AlertState>
    </GithubState>
  )
}

export default App
