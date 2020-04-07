import React from 'react'
import UserItem from './UserItem'
import UsersWrapper from './UsersWrapper'
import Spinner from '../spinner/Spinner'
import propTypes from 'prop-types'

const Users = ({ users, loading }) => {
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

Users.propTypes = {
  users: propTypes.array.isRequired,
  loading: propTypes.bool.isRequired,
}

export default Users
