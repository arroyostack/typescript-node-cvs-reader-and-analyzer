"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
const dateStringToDate = (date) => {
    const dateParts = date
        .split('/')
        .map((date) => {
        return parseInt(date);
    });
    return new Date(dateParts[2], dateParts[1] - 1);
};
exports.dateStringToDate = dateStringToDate;
