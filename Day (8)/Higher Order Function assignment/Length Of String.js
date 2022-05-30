// Given an array of strings print the length of each string

let arr = ["apple", "windows", "ubuntu"];

let result = arr.map(length);

function length(el) {
    return el.length;
}

console.log(result);