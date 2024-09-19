# json-friendly-cleaner

![npm](https://img.shields.io/npm/v/json-friendly-cleaner?color=green) ![license](https://img.shields.io/npm/l/json-friendly-cleaner?color=blue) ![npm downloads](https://img.shields.io/npm/dm/json-friendly-cleaner)

`json-friendly-cleaner` is a lightweight and flexible utility that removes unwanted values such as `null`, `undefined`, `false`, or any specified values from JSON objects or arrays. It works perfectly on nested objects. This package is perfect for cleaning up API responses, user input, or any other JSON data.

## Features

- **Remove `null` values** easily with a single function.
- **Exclude specific values** like `undefined`, `false`, `""`, or any custom value.
- **Supports removing multiple values** at once (e.g., `null`, `false`, `undefined`).
- Works with both **objects and arrays**.
- Written in **pure JavaScript** and has **zero dependencies**.
- Small and **efficient**, perfect for production use in APIs and data processing.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)


## Installation

You can install the `json-friendly-cleaner` package via npm:

```bash
npm install json-friendly-cleaner
```

## Usage
Below are examples of how to use the `json-friendly-cleaner` library in your project.


### Removing null values from a JSON object

```bash
// ES Module syntax
import { removeNulls } from 'json-friendly-cleaner';

const data = {
    name: "John",
    age: null,
    address: {
        city: "New York",
        zip: null,
        country: "USA"
    },
    hobbies: [null, "sports", null]
};

const cleanedData = removeNulls(data);
console.log(cleanedData);

// Output:
// {
//   name: 'John',
//   address: { city: 'New York', country: 'USA' },
//   hobbies: ['sports']
// }
```




### Removing a specific value (e.g., undefined)

```bash
import { removeValues } from 'json-friendly-cleaner';

const dataWithValues = {
    name: "John",
    age: undefined,
    isActive: false,
    hobbies: [null, "sports", false, undefined, ""]
};

const cleanedDataWithValues = removeValues(dataWithValues, undefined);
console.log(cleanedDataWithValues);

// Output:
// {
//   name: 'John',
//   isActive: false,
//   hobbies: [null, 'sports', false, '']
// }

```




### Removing multiple values (e.g., undefined and false)

```bash
import { removeValues } from 'json-friendly-cleaner';

// If using CommonJS syntax, use:
// const { removeValues } = require('json-friendly-cleaner');

const multipleValuesData = {
    name: "John",
    age: undefined,
    isActive: false,
    hobbies: [null, "sports", false, undefined, ""]
};

const cleanedMultipleValuesData = removeValues(multipleValuesData, [undefined, false]);
console.log(cleanedMultipleValuesData);

// Output:
// {
//   name: 'John',
//   hobbies: [null, 'sports', '']
// }
```
## Notes

The library supports both ES Modules and CommonJS syntax.
To use require, make sure your project is set up to use CommonJS, or rename your files with a .cjs extension if you are using Node.js with ES modules.
