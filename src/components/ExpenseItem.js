import React from 'react';

import PropTypes from 'prop-types';

const ExpenseItem = ({ expense }) => (      // Destructuring Props & Return implicito
    <li>
        <p>{ expense .description } <span className="spent">{ expense .amount }</span></p>
    </li> 
);

/** Verificación de Tipos usando PropTypes */
ExpenseItem .propTypes = {
    expense: PropTypes .object .isRequired
}

export default ExpenseItem;