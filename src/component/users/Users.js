import React from 'react'
import UserItem from './UserItem'
import UsersWrapper from './UsersWrapper'

const Users = ({ users }) => {
  return (
    <UsersWrapper>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </UsersWrapper>
  )
}

export default Users
