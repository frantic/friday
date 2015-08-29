# Instructions

Want to stretch your brain and practice some dark JavaScript forces? Here is the task - implement add function that passes the tests:

```javascript
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
```

# How to run

```bash
$ git clone https://github.com/frantic/currying
$ node nuts
```

Your task is to implement `add` function and make sure all
tests pass.


# Next level

Provide the shortest implementation that does not leak to the global scope.

Have fun :)
