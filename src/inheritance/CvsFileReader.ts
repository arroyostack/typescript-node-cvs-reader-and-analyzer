import fs from 'fs';

//* This is the first refactor of CDVFileReader class. */

export abstract class CvsFileReader<T> {
    data: T[] = [];
    constructor( public fileName: string ) { }
    // Helper function.
    abstract mapRow( row: string[] ): T;

    read(): void {
        this.data = fs.readFileSync( this.fileName, {
            encoding: 'utf-8'
        } ).split( '\n' )
            .map( ( row: string ): string[] => {
                return row.split( "," );
                /*  We end up with an array of arrays where each element looks like ==>
                  [ '28/10/2018', 'Burnley', 'Chelsea', '0', '4', 'A', 'C Pawson' ], */
            } )
            .map( this.mapRow );
    }
}