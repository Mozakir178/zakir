// Given an array of strings print the sum of lengths if the characters in the string are odd
// Sample Input - ["A", "Good", "Problem"]
// Sample Output - 8



let arr = ["I", "am", "solving", "this", "problem", "with", "function"];

let result = arr.filter(odd).reduce(length, 0);

function odd(el) {
    return el.length % 2 == 1;
}

function length(ac, a) {
    return ac + a.length;
}

console.log(result);