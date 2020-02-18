export const checkBudgetHelper = ( budget, availableBudget ) => {
    let classes;

    if( availableBudget < ( budget / 4 ) ) {        // Disponible < al 25% del Presupuesto
        classes = 'alert alert-danger';
    }
    else if( availableBudget < ( budget / 2 ) ) {   // Disponible < al 50% del Presupuesto
        classes = 'alert alert-warning';
    }
    else {                                          // Disponible > 50% del Presupuesto
        classes = 'alert alert-success';
    }

    return classes;
}