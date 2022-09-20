// Given an array of numbers print the product of all numbers



let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let product = array.reduce(Product, 1);

function Product(ac, a) {
    return ac * a;
}

console.log(product);