import fs from 'fs';
import { CvsFileReader } from './CvsFileReader';
import { MatchResult } from './MAtchResult';

const reader = new CvsFileReader( 'football.csv' );

let manUnitedWins: number = 0;

for ( let match of reader.read() ) {
    if ( match[1] === 'Man United' && match[5] === MatchResult.HomeWin ) {
        manUnitedWins++;
    } else if ( match[2] === MatchResult.AwayWin ) {
        manUnitedWins++;
    }
}

console.log( reader.read() );
