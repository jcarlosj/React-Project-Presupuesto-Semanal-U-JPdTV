import React from 'react';
import ExpenseItem from './ExpenseItem';

import PropTypes from 'prop-types';

const ExpenseList = ({ expenses }) => {     // Destructuring props
    return(
        <form className="expenses-list">
            <h3>Listado de Gastos</h3>
            { expenses .map( expense => ( 
                <ExpenseItem 
                    key={ expense .id }
                    expense={ expense } 
                /> 
            ))} 
        </form>
    );
}

ExpenseList .propTypes = {
    expenses: PropTypes .array .isRequired
}

export default ExpenseList;