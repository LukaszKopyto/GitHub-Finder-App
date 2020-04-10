import React from 'react'
import PropTypes from 'prop-types'
import { Image } from '../images/Images'
import { CardWrapper } from '../cardWrapper/CardWrapper'
import { UserTitle } from '../userTitle/UserTitle'
import Button from '../button/Button'

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <CardWrapper>
      <Image src={avatar_url} alt={login} />
      <UserTitle>{login}</UserTitle>
      <Button to={`/user/${login}`}>More</Button>
    </CardWrapper>
  )
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
}

export default UserItem
