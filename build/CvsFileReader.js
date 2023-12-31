"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CvsFileReader = void 0;
const fs_1 = __importDefault(require("fs"));
//* We are returning a new arrays with a very specific structure */
//* To type this acordingly we can use a Typescript Tuple  */
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
            /* We end up with an array of arrays where each element looks like ==>
             [ '28/10/2018', 'Burnley', 'Chelsea', '0', '4', 'A', 'C Pawson' ], */
        });
    }
}
exports.CvsFileReader = CvsFileReader;
