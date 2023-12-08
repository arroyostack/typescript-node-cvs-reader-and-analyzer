"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
const fs_1 = __importDefault(require("fs"));
class CsvFileReader {
    constructor(fileName) {
        this.fileName = fileName;
        this.data = [];
    }
    read() {
        const footballMatches = fs_1.default.readFileSync('football.csv', {
            encoding: 'utf-8'
        });
        const parsedFootballMatches = footballMatches.split('\n').map((row) => {
            return row.split(",");
            // We end up with an array of arrays where each element looks like ==>  [ '28/10/2018', 'Burnley', 'Chelsea', '0', '4', 'A', 'C Pawson' ],
        });
        return parsedFootballMatches;
    }
}
exports.CsvFileReader = CsvFileReader;
