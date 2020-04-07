import React from 'react'
import UserItem from './UserItem'
import UsersWrapper from './UsersWrapper'
import Spinner from '../spinner/Spinner'
import PropTypes from 'prop-types'

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

Users.PropTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
}

export default Users
