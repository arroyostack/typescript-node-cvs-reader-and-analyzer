import fs from 'fs';
import { CvsFileReader } from './CvsFileReader';
import { MatchResult } from './MatchResult';

const reader = new CvsFileReader( 'football.csv' );
reader.read();

const dateOfFirstMatch = reader.data[0][0];

let manUnitedWins: number = 0;

for ( let match of reader.data ) {
    if ( match[1] === 'Man United' && match[5] === MatchResult.HomeWin ) {
        manUnitedWins++;
    } else if ( match[2] === MatchResult.AwayWin ) {
        manUnitedWins++;
    }
}

// console.log( reader.read() );
console.log( dateOfFirstMatch, 'aqui!!!' );
