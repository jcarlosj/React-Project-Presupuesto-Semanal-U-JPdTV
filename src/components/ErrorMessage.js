import React from 'react';

import PropTypes from 'prop-types';

const ErrorMessage = ({ message }) => (        // Return Implicito ^ Destructurin del props
    <p className="alert alert-danger error">{ message }</p>
);

/** Verificación de Tipos usando PropTypes */
Error .propTypes = {
    message: PropTypes .string .isRequired
}

export default ErrorMessage;