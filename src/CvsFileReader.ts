import fs from 'fs';


//* We are returning a new arrays with a very specific structure */
//* To type this acordingly we can use a Typescript Tuple  */

export class CvsFileReader {
    data: string[][] = [];
    constructor( public fileName: string ) { }

    read(): void {
        this.data = fs.readFileSync( this.fileName, {
            encoding: 'utf-8'
        } ).split( '\n' )
            .map( ( row: string ): string[] => {
                return row.split( "," );
                /* We end up with an array of arrays where each element looks like ==> 
                 [ '28/10/2018', 'Burnley', 'Chelsea', '0', '4', 'A', 'C Pawson' ], */
            } );

    }
}