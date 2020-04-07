import React from 'react'
import spinner from './spinner.gif'
import SpinnerWrapper from './SpinnerWrapper'

const Spinner = () => (
  <>
    <SpinnerWrapper src={spinner} alt='Loading...' />
  </>
)

export default Spinner
