// Given an array of numbers, return the elements that have even index (starting the count at 0) and are even
// Use Higher-order functions
// Sample Input - [2, 4, 5, 3, 6, 8]
// Sample Output - [2, 5 , 6]

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let result = arr.filter(even);

function even(el, i) {
    return i % 2 === 0;
}

console.log(result);