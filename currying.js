/*

  INSTRUCTIONS

    Implement `add` function that passes the tests. Don't create any vars
    outside function's body and don't pollute the global scope.

    To run the tests, do:

    $ node currying.js

  NEXT LEVEL

    Provide the shortest implementation that does not leak to the global scope.

*/


function add() {
  // TODO
}

function test(a, b) {
  if (a == b) {
    console.log('OK');
  } else {
    console.log(a + ' != ' + b);
  }
}

test(add(1, 2), 3);
test(add(3)(4)(), 7);
test(add(3)(4)(5), 12);

var three = add(3);
var four = add(4);
test(three, 3);
test(four, 4);
test(three(5), 8);
test(three(6), 9);
test(three(four), 7);
test(three(four)(three(four)), 14);

test(add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15), 120);
test(add(1.5, 2), 3.5);

console.log('Length: ' + add.toString().length);

/*
  Test case was taken from http://habrahabr.ru/post/226325/ by @nmakarov.
  Be careful, the linked article contains implementation!
  More stuff by this author - https://github.com/nmakarov/excercises
*/
