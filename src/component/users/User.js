import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Spinner from '../spinner/Spinner'
import Button from '../button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons'
import { Image } from '../images/Images'
import UserWrapper from './UserWrapper'
import Badge from '../badge/badge'
import Repo from '../repos/Repo'

class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login)
    this.props.getUserRepos(this.props.match.params.login)
  }

  static propTypes = {
    loading: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired,
    getUserRepos: PropTypes.func.isRequired,
  }

  render() {
    const {
      name,
      company,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable,
    } = this.props.user
    const { loading, repos } = this.props
    if (loading) return <Spinner />
    return (
      <>
        <Button to='/' second={'true'} width={'200px'} left={'true'}>
          Back to Search
        </Button>
        Hireable:{' '}
        {hireable ? (
          <FontAwesomeIcon icon={faCheck} style={{ color: 'orangered' }} />
        ) : (
          <FontAwesomeIcon icon={faTimes} style={{ color: 'orangered' }} />
        )}
        <UserWrapper>
          <div style={{ paddingRight: '50', width: '50%' }}>
            <Image src={avatar_url} alt={name} />
            <h1>{name}</h1>
            <p>Location: {location}</p>
          </div>
          <div>
            {bio && (
              <>
                <h2>Bio:</h2>
                <p>{bio}</p>
                <Button
                  as='a'
                  href={html_url}
                  second={'true'}
                  width={'300px'}
                  left={'true'}
                >
                  Visit Github profile
                </Button>
              </>
            )}
            <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2rem' }}>
              <li>
                {login && (
                  <>
                    <strong>Username: </strong>
                    {login}
                  </>
                )}
              </li>
              <li>
                {login && (
                  <>
                    <strong>Company: </strong>
                    {company}
                  </>
                )}
              </li>
              <li>
                {login && (
                  <>
                    <strong>Website: </strong>
                    <a href={blog} style={{ textDecoration: 'none' }}>
                      {blog}
                    </a>
                  </>
                )}
              </li>
            </ul>
          </div>
        </UserWrapper>
        <div>
          <Badge display='inline'>Followers: {followers}</Badge>
          <Badge display='inline'>Following: {following}</Badge>
          <Badge display='inline'>Public repos: {public_repos}</Badge>
          <Badge display='inline'>Public gists: {public_gists}</Badge>
        </div>
        <Repo repos={repos} />
      </>
    )
  }
}

export default User
