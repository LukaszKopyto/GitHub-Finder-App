import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import ErrorInfo from './ErrorInfo'
import AlertContext from '../../context/alert/alertContext'

const Alert = () => {
  const alertContext = useContext(AlertContext)

  const { alert } = alertContext

  return (
    alert !== null && (
      <ErrorInfo>
        <FontAwesomeIcon
          icon={faInfoCircle}
          style={{ fontSize: 30, marginRight: 15 }}
        />
        {'   '}
        {alert.msg}
      </ErrorInfo>
    )
  )
}

export default Alert
