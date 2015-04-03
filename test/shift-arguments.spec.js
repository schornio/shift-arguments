'use strict';
/* jslint node: true */
/* global describe, it */

var expect = require('expect.js');

var shiftArguments = require(__dirname + '/../index');

describe('shiftArguments', function () {

  it('should remove arguments', function () {
    var testArugument = { result: 'result' };

    var testFunc = function (result) {
      expect(arguments.length).to.be(1);
      expect(result).to.be(testArugument);
    };

    var shiftedTestFunc = shiftArguments(testFunc, -1);
    shiftedTestFunc('error', testArugument);
  });

  it('should add empty arguments', function () {
    var testArugument = { result: 'result' };

    var testFunc = function (error, result) {
      expect(arguments.length).to.be(2);
      expect(error).to.be(null);
      expect(result).to.be(testArugument);
    };

    var shiftedTestFunc = shiftArguments(testFunc, 1);
    shiftedTestFunc(testArugument);
  });

});
