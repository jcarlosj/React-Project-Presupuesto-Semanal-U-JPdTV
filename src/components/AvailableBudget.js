import React, { Fragment } from 'react';

const AvailableBudget = ({ budget, availableBudget }) => {      // Destructuring props
    return(
        <Fragment>
            <div className="alert alert-primary">
                Presupuesto: { budget }
            </div>
            <div className="alert">
                Disponible: { availableBudget }
            </div>
        </Fragment>
    );
}

export default AvailableBudget;