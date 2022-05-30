// Given an array of numbers print the square of those numbers

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let square = array.map(Square);

function Square(el) {
    return el ** 2;
}

console.log(square);