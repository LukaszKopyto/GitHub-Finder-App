import React, { Component } from 'react';
import SearchInput from './SearchInput';
import SearchButton from './searchButton';
import PropTypes from 'prop-types';

class Search extends Component {
  state = {
    text: '',
  };

  static propTypes = {
    searchUser: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,
  };

  handleOnChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    if (this.state.text === '') {
      this.props.setAlert('Please enter something', 'light');
    } else {
      this.props.searchUser(this.state.text);
      this.setState({ text: '' });
    }
  };

  render() {
    const { showClear, clearUsers } = this.props;
    return (
      <>
        <form onSubmit={this.handleOnSubmit}>
          <SearchInput
            type='text'
            name='text'
            placeholder='Search Users...'
            value={this.state.text}
            onChange={this.handleOnChange}
          />
          <SearchButton type='submit' value='submit' width='80vw'>
            Submit
          </SearchButton>
        </form>
        {showClear && (
          <SearchButton second={true} width='80vw' onClick={clearUsers}>
            Clear
          </SearchButton>
        )}
      </>
    );
  }
}

export default Search;
