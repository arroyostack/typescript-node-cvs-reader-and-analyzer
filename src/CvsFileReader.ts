import fs from 'fs';
import { dateStringToDate } from './utils';
import { MatchResult } from './MAtchResult';

export class CvsFileReader {
    data: string[][] = [];
    constructor( public fileName: string ) { }

    read() {
        const footballMatches = fs.readFileSync( this.fileName, {
            encoding: 'utf-8'
        } );

        const parsedFootballMatches = footballMatches.split( '\n' ).map( ( row: string ): string[] => {
            return row.split( "," );
            // We end up with an array of arrays where each element looks like ==>  [ '28/10/2018', 'Burnley', 'Chelsea', '0', '4', 'A', 'C Pawson' ],
        } );

        const dataConversion = parsedFootballMatches.map( ( row: string[] ): any => {
            return [
                dateStringToDate( row[0] ),
                row[1],
                row[2],
                parseInt( row[3] ),
                parseInt( row[4] ),
                row[5] as MatchResult
            ];
        } );

        return dataConversion;
    }
}