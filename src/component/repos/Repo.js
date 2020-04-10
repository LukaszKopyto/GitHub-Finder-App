import React from 'react'
import RepoItem from './RepoItem'
import PropTypes from 'prop-types'

const Repo = ({ repos }) => {
  return (
    <>
      <h3>Repos:</h3>
      {repos.map((repo) => (
        <RepoItem repo={repo} key={repo.id} />
      ))}
    </>
  )
}

Repo.propTypes = {
  repos: PropTypes.array.isRequired,
}

export default Repo
