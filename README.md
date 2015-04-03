# shift-arguments
Shift javascript function arguments for better integration with different frameworks

    npm install shift-arguments

## Usage

**Delete arguments**

    function testFunc (result) {

    }

    function doSthAsync (callback) {
      callback('error', 'result');
    }

    doSthAsync(shiftArguments(testFunc, -1));

**Add empty arguments**

    function testFunc (error, result) {

    }

    function doSthAsync (callback) {
      callback('result');
    }

    doSthAsync(shiftArguments(testFunc, 1));
