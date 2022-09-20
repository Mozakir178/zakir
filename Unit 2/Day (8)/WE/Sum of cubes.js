// Given an array of numbers find the sum of cubes if the number is divisible by 3 Sample Input - [1, 2, 3, 4, 5, 6] Sample Output - 243 (27+216)


let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let result = array.filter(Divicible).map(Cube).reduce(Sum);

function Divicible(el) {
    return el % 3 === 0
};

function Cube(el) {
    return el ** 3;
}

function Sum(ac, a) {
    return ac + a;
}
console.log(result);