"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CvsFileReader_1 = require("./CvsFileReader");
const MatchResult_1 = require("./MatchResult");
const reader = new CvsFileReader_1.CvsFileReader('football.csv');
reader.read();
const dateOfFirstMatch = reader.data[0][0];
let manUnitedWins = 0;
for (let match of reader.data) {
    if (match[1] === 'Man United' && match[5] === MatchResult_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === MatchResult_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
// console.log( reader.read() );
console.log(dateOfFirstMatch, 'aqui!!!');
