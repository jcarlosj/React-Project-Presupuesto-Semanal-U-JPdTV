import React from 'react';

const ExpenseList = ({ expenses }) => {     // Destructuring props
    return(
        <form className="expenses-list">
            <h3>Listado de Gastos</h3>
            { console .log( 'ExpenseList', expenses ) }
        </form>
    );
}

export default ExpenseList;