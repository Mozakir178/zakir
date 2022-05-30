let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 6, 12, 15, 14, 16, 11];
let n = array.length;
var obj = {};
let repeating, missing;

for (let i = 1; i <= n; i++) {
    obj[i] = 0;
}

for (let i = 0; i < n; i++) {
    obj[array[i]] += 1;
}
console.log(obj)

for (let i in obj) {
    if (obj[i] > 1) {
        repeating = i;
    }
    if (obj[i] < 1)
        missing = i;
}
console.log(repeating, missing)