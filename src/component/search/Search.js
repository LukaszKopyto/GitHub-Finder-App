import React, { Component } from 'react'
import SearchInput from './SearchInput'
import SearchButton from './searchButton'
import PropTypes from 'prop-types'

class Search extends Component {
  state = {
    text: '',
  }

  static propTypes = {
    searchUser: PropTypes.func.isRequired,
  }

  handleOnChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value,
    })
  }

  handleOnSubmit = (e) => {
    e.preventDefault()
    this.props.searchUser(this.state.text)
    this.setState({ text: '' })
  }

  render() {
    return (
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
    )
  }
}

export default Search
