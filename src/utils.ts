export const dateStringToDate = ( date: string ): Date => {
    const dateParts = date
        .split( '/' )
        .map( ( date: string ): number => {
            return parseInt( date );
        } );

    return new Date( dateParts[2], dateParts[1] - 1, );
};

