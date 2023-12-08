"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CvsFileReader_1 = require("./CvsFileReader");
const MAtchResult_1 = require("./MAtchResult");
const reader = new CvsFileReader_1.CvsFileReader('football.csv');
let manUnitedWins = 0;
for (let match of reader.read()) {
    if (match[1] === 'Man United' && match[5] === MAtchResult_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === MAtchResult_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log(reader.read());
