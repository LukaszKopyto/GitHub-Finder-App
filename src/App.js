import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';
import './App.css';
import Navbar from './component/navbar/Navbar';
import Users from './component/users/Users';
import axios from 'axios';
import Search from './component/search/Search';
import Alert from './component/alert/Alert';

export const GlobalStyle = createGlobalStyle`
  body {
    padding: 0px;
    margin: 0px;
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
`;

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null,
  };

  //Search Github users
  searchUser = async (text) => {
    this.setState({ loading: true });
    const resp = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({
      users: resp.data.items,
      loading: false,
    });
  };

  //Clear users from state
  clearUsers = () => this.setState({ users: [], loading: false });

  //Set alert
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
    setTimeout(() => {
      this.setState({ alert: null });
    }, 3700);
  };

  render() {
    const { users, loading, alert } = this.state;
    return (
      <>
        <GlobalStyle />
        <Navbar />
        <Alert alert={alert} />
        <Search
          searchUser={this.searchUser}
          clearUsers={this.clearUsers}
          showClear={users.length > 0 ? true : false}
          setAlert={this.setAlert}
        />
        <Users loading={loading} users={users} />
      </>
    );
  }
}

export default App;
