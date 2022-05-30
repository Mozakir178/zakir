// Given an array of numbers find the sum of odd elements Sample Input - [1, 2, 3, 4] Sample Output - 4


let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let sumofodd = array.filter(Odd).reduce(Sum);

function Odd(el) {
    return el % 2 === 1;
}

function Sum(ac, a) {
    return ac + a;
}

console.log(sumofodd)