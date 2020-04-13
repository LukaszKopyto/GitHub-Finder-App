import React, { useState, useContext } from 'react'
import SearchInput from './SearchInput'
import SearchButton from './SearchButton'
import GithubContext from '../../context/github/githubContext'
import AlertContext from '../../context/alert/alertContext'

const Search = () => {
  const githubContext = useContext(GithubContext)
  const alertContext = useContext(AlertContext)

  const { users, clearUsers, searchUsers } = githubContext

  const [text, setText] = useState('')

  const handleOnChange = (e) => setText(e.target.value)

  const handleOnSubmit = (e) => {
    e.preventDefault()
    if (text === '') {
      alertContext.setAlert('Please enter something', 'light')
    } else {
      searchUsers(text)
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
      {users.length > 0 && (
        <SearchButton second={true} width='80vw' onClick={clearUsers}>
          Clear
        </SearchButton>
      )}
    </>
  )
}

export default Search
