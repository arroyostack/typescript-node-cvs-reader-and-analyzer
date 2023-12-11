"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
const CvsFileReader_1 = require("./inheritance/CvsFileReader");
const utils_1 = require("./utils");
class MatchReader extends CvsFileReader_1.CvsFileReader {
    mapRow(row) {
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
    }
}
exports.MatchReader = MatchReader;
