/*
    This reduce() implementation takes a reducer function, an initial value for the accumulator, and an array of data
    to iterate over. For each item in the array, the reducer is called, passing it the accumulator and the current
    array element. The return value is assigned to the accumulator. When it's finished applying the reducer to
    all the values in the list, the accumulated value is returned.

    In the usage example, we call reduce and pass it the function, (acc, curr) => acc + curr, which takes the
    accumulator and the current value in the list and returns a new accumulated value.
    Next we pass an initial value, 0, and finally, the data to iterate over.
 */
const reduce = (reducer, initial, arr) => {
    // shared stuff
    let acc = initial;
    for (let i = 0, { length } = arr; i < length; i++) {
        // unique stuff in reducer() call
        acc = reducer(acc, arr[i]);
        // more shared stuff
    }
    return acc;
};

console.log(reduce((acc, curr) => acc + curr, 0, [1,2,3]));

/*
    In the filter() function, everything is shared except the fn() function that gets passed in as an argument.
    That fn()argument is called a predicate. A predicate is a function that returns a boolean value.

    We call fn() with the current value, and if the fn(curr) test returns true, we concat the curr value to the
    accumulator array. Otherwise, we just return the current accumulator value.
 */
const filter = (
    fn, arr
) => reduce((acc, curr) => (fn(curr) ?
    acc.concat([curr]) :
    acc), [], arr
);

const censor = words => filter(
    word => word.length !== 4,
    words
);
console.log(censor(['oops', 'gasp', 'shout', 'sun']));

const startsWithS = words => filter(
    word => word.startsWith('s'), // this is the fn that is passed to the filter and is used in reduce() as reducer()
    words
);
console.log(startsWithS(['oops', 'gasp', 'shout', 'sun']));