import React from 'react';

const ExpenseItem = ({ expense }) => (      // Destructuring Props & Return implicito
    <li>
        <p>{ expense .description } <span className="spent">{ expense .amount }</span></p>
    </li> 
)

export default ExpenseItem;