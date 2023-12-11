import fs from 'fs';
import { CvsFileReader } from './CvsFileReader';
import { MatchResult } from './MatchResult';
import { MatchReader } from './MatchReader';


//1. & Create an object that satisfies the 'DataReader' interface.
const csvFileReader = new CvsFileReader( 'football.csv' );

// 2. Create an instance of 'MatchReader' and pass it something satifying
// the data reader
const matchReader = new MatchReader( csvFileReader );
matchReader.load();

let manUnitedWins: number = 0;

for ( let match of matchReader.matches ) {
    if ( match[1] === 'Man United' && match[5] === MatchResult.HomeWin ) {
        manUnitedWins++;
    } else if ( match[2] === MatchResult.AwayWin ) {
        manUnitedWins++;
    }
}

console.log( matchReader.matches );

