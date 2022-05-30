// Given an array of string generate an array whose first or last character is a
// Sample Output - ["assignment", "media"]

let Input = ["assignment", "problem", "media", "upload"];

let result = Input.filter(A);

function A(el) {
    return (el[0] === "a" || el[el.length - 1] === "a");
}

console.log(result);