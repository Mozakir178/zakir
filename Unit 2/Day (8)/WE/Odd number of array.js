// Given an array print all the odd number in the array:


let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let odd = array.filter(Odd);

function Odd(el) {
    return el % 2 === 1;
}

console.log(odd)