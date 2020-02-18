import React, { Fragment } from 'react';

import PropTypes from 'prop-types';

import { checkBudgetHelper } from '../helpers/check-budget.helper';

const AvailableBudget = ({ budget, availableBudget }) => {      // Destructuring props
    return(
        <Fragment>
            <div className="alert alert-primary">
                Presupuesto: { budget }
            </div>
            <div className={ checkBudgetHelper( budget, availableBudget ) }>
                Disponible: { availableBudget }
            </div>
        </Fragment>
    );
}

/** Verificación de Tipos usando PropTypes */
AvailableBudget .propTypes = {
    budget: PropTypes .number .isRequired, 
    availableBudget: PropTypes .number.isRequired
}

export default AvailableBudget;