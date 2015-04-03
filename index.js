'use strict';
/* jslint node: true */

function shiftArguments(func, shift) {
  shift *= -1;
  
  return function() {
    var shiftedArguments = [];

    for (var i = shift; i < arguments.length; i++) {
      if(i < 0) {
        shiftedArguments.push(null);
        continue;
      }

      shiftedArguments.push(arguments[i]);
    }

    func.apply(null, shiftedArguments);
  };
}

module.exports = shiftArguments;
