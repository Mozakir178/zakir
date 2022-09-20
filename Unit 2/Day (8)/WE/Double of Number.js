// Given an array of numbers generate an array containing the double value of the numbers



let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let double = array.map(Double);

function Double(el) {
    return el * 2;
}


console.log(double)