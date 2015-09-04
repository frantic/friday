/*

  INSTRUCTIONS

    Write a function that turns arabic numbers to roman numerals.
    Don't create any vars outside function's body and don't pollute
    the global scope.

    To run the tests, do:

    $ node --harmony roman.js

  NEXT LEVEL

    Make an implementation that uses least possible number
    of *unique* characters in function's body (ES6 and \n are OK)

*/


var toRoman = function (arabic) {
  return 'TODO';
}

function test(expected, actual) {
  if (expected === actual) {
    console.log('OK');
  } else {
    console.log(expected + ' !== ' + actual);
  }
}

test('I', toRoman(1));
test('VI', toRoman(6));
test('IX', toRoman(9));
test('XLII', toRoman(42));
test('XCI', toRoman(91));
test('MCMXCIX', toRoman(1999));

var functionBody = toRoman.toString().replace(/[\n ]/g, '') // Allow new lines and spaces for readability

console.log('');
console.log('Used unique symbols: ' + new Set(toRoman.toString().split('')).size);
console.log('Length: ' + toRoman.toString().length);
