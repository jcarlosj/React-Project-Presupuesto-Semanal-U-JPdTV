import React, { Fragment } from 'react';

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

export default AvailableBudget;