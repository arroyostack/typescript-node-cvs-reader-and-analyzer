# CSV Reader and Analyzer Football Matches with TypeScript and Node.js

[![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18.16.0-green?logo=node.js)](https://nodejs.org/)
[![@types/node](https://img.shields.io/badge/@types%2Fnode-20.10.4-blue)](https://www.npmjs.com/package/@types/node/v/20.10.4)
[![concurrently](https://img.shields.io/badge/concurrently-8.2.2-blue)](https://www.npmjs.com/package/concurrently/v/8.2.2)
[![nodemon](https://img.shields.io/badge/nodemon-3.0.2-blue)](https://www.npmjs.com/package/nodemon/v/3.0.2)

## Overview

This repository serves as a companion for the tutorial on building a CSV reader and analyzer with TypeScript and Node.js. The tutorial covers various key concepts and practices in TypeScript and Node.js development. Below is a quick recap of the important topics covered in the tutorial:

### Enum and Tuples

- Created an enum to represent insight into match results.
- Explored the use of tuples to describe a single row of a CSV file.
- Demonstrated the practical application of tuples for type conversions.

### Inheritance and Generics

- Introduced an abstract class, `CSVFileReader`, as a generic class.
- Briefly discussed generics and their role in configuring types dynamically.
- Showcased the usage of generics when extending `CSVFileReader` in the `MatchReader` class.

### Composition

- Explored composition as an alternative to inheritance.
- Illustrated examples of composition in the `MatchReader` and `SummaryNotes` classes.
- Highlighted the benefits of composition over inheritance.

## Conclusion

This tutorial provides a practical comparison between inheritance and composition, emphasizing the advantages of composition in certain scenarios. While the project was extensive, the goal was to offer a hands-on experience with TypeScript and Node.js development.
