"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CvsFileReader_1 = require("./CvsFileReader");
const MatchResult_1 = require("./MatchResult");
const MatchReader_1 = require("./MatchReader");
//1. & Create an object that satisfies the 'DataReader' interface.
const csvFileReader = new CvsFileReader_1.CvsFileReader('football.csv');
// 2. Create an instance of 'MatchReader' and pass it something satifying
// the data reader
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
let manUnitedWins = 0;
for (let match of matchReader.matches) {
    if (match[1] === 'Man United' && match[5] === MatchResult_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === MatchResult_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log(matchReader.matches);
