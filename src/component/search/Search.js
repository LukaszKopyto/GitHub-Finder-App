import React, { useState } from 'react'
import SearchInput from './SearchInput'
import SearchButton from './SearchButton'
import PropTypes from 'prop-types'

const Search = ({ searchUser, showClear, clearUsers, setAlert }) => {
  const [text, setText] = useState('')

  const handleOnChange = (e) => setText(e.target.value)

  const handleOnSubmit = (e) => {
    e.preventDefault()
    if (text === '') {
      setAlert('Please enter something', 'light')
    } else {
      searchUser(text)
      setText('')
    }
  }

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <SearchInput
          type='text'
          name='text'
          placeholder='Search Users...'
          value={text}
          onChange={handleOnChange}
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
  )
}

Search.propTypes = {
  searchUser: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
}

export default Search
