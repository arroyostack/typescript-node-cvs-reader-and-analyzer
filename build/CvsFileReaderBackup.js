"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CvsFileReader = void 0;
const fs_1 = __importDefault(require("fs"));
const utils_1 = require("./utils");
class CvsFileReader {
    constructor(fileName) {
        this.fileName = fileName;
        this.data = [];
    }
    read() {
        this.data = fs_1.default.readFileSync(this.fileName, {
            encoding: 'utf-8'
        }).split('\n')
            .map((row) => {
            return row.split(",");
            // We end up with an array of arrays where each element looks like ==>  [ '28/10/2018', 'Burnley', 'Chelsea', '0', '4', 'A', 'C Pawson' ],
        })
            .map((row) => {
            // We end up with all data parsed to more adecated data to work with in Typescript.
            return [
                (0, utils_1.dateStringToDate)(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5],
                row[6]
            ];
        });
    }
}
exports.CvsFileReader = CvsFileReader;
