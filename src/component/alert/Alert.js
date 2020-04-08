import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import ErrorInfo from './ErrorInfo';

const Alert = ({ alert }) => {
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
  );
};

export default Alert;
