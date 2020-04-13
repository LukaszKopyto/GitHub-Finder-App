import React, { useContext } from 'react'
import UserItem from './UserItem'
import UsersWrapper from './UsersWrapper'
import Spinner from '../spinner/Spinner'
import GithubContex from '../../context/github/githubContext'

const Users = () => {
  const githubContex = useContext(GithubContex)

  const { loading, users } = githubContex

  if (loading) {
    return <Spinner />
  } else {
    return (
      <UsersWrapper>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </UsersWrapper>
    )
  }
}

export default Users
