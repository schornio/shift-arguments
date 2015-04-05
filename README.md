# shift-arguments
[![Build Status](https://travis-ci.org/schornio/shift-arguments.svg?branch=master)](https://travis-ci.org/schornio/shift-arguments)

Shift javascript function arguments for better integration with different frameworks

    npm install shift-arguments

## Usage

**Delete arguments**

    var shiftArguments = require('shift-arguments');

    function testFunc (result) {

    }

    function doSthAsync (callback) {
      callback('error', 'result');
    }

    doSthAsync(shiftArguments(testFunc, -1));

**Add empty arguments**

    var shiftArguments = require('shift-arguments');

    function testFunc (error, result) {

    }

    function doSthAsync (callback) {
      callback('result');
    }

    doSthAsync(shiftArguments(testFunc, 1));

## Examples

**Promise to callback**

    var Promise = require('bluebird');
    var shiftArguments = require('shift-arguments');

    var fs = Promise.promisifyAll(require("fs"));

    function getConfig(callback) {
      fs.readFileAsync("myfile.json")
        .then(JSON.parse)
        .then(shiftArguments(callback, 1))
        .catch(callback);
    }

    getConfig(function(error, config)) {
      //Handle error and result as expected
    });
