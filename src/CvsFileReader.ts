import fs from 'fs';
import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';

//* At dataConversion  we are returning a new arrays with a very specific structure */
//* To type this acordingly we can use a Typescript Tuple  */
type MatchData = [Date, string, string, number, number, MatchResult, string];

export class CvsFileReader {
    data: MatchData[] = [];
    constructor( public fileName: string ) { }

    read(): void {
        this.data = fs.readFileSync( this.fileName, {
            encoding: 'utf-8'
        } ).split( '\n' )
            .map( ( row: string ): string[] => {
                return row.split( "," );
                // We end up with an array of arrays where each element looks like ==>  [ '28/10/2018', 'Burnley', 'Chelsea', '0', '4', 'A', 'C Pawson' ],
            } )
            .map( ( row: string[] ): MatchData => {
                // We end up with all data parsed to more adecated data to work with in Typescript.
                return [
                    dateStringToDate( row[0] ),
                    row[1],
                    row[2],
                    parseInt( row[3] ),
                    parseInt( row[4] ),
                    row[5] as MatchResult,
                    row[6]
                ];
            } );
    }
}