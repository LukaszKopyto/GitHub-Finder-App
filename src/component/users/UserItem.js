import React, { Component } from 'react'
import { Image } from '../images/Images'
import { CardWrapper } from '../cardWrapper/CardWrapper'
import { UserTitle } from '../userTitle/UserTitle'
import { Button } from '../button/Button'

class UserItem extends Component {
  state = {
    id: 1,
    login: 'mojombo',
    avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
    html_url: 'https://github.com/mojombo',
  }

  render() {
    const { id, login, avatar_url, html_url } = this.state
    return (
      <CardWrapper>
        <Image src={avatar_url} alt={login} />
        <UserTitle>{login}</UserTitle>
        <Button href={html_url}>More</Button>
      </CardWrapper>
    )
  }
}

export default UserItem
