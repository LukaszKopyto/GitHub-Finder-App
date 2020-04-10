import React from 'react'
import PropTypes from 'prop-types'
import Badge from '../badge/badge'

const RepoItem = ({ repo }) => {
  return (
    <>
      <a href={repo.html_url} target='_blank' rel='noopener noreferrer'>
        <Badge as='p'>{repo.name}</Badge>
      </a>
    </>
  )
}

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
}

export default RepoItem
