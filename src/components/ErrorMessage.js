import React from 'react';

const ErrorMessage = ({ message }) => (        // Return Implicito ^ Destructurin del props
    <p className="alert alert-danger error">{ message }</p>
);

export default ErrorMessage;