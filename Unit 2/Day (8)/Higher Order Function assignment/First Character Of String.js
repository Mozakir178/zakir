// Given an array of string generate an array with their first characters

// Sample Input - ["Masai", "School"]

// Sample Output - ["M", "S"]

let arr = ["India", "England", "Austrelia", "Pakistan", "South Africa"];

let result = arr.map(firstletter);

function firstletter(el) {
    return el[0];
}

console.log(result);