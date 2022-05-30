var array = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
    [26, 27, 28, 29, 30]
];

var n = array.length;;

function SpiralTraversal(array, n) {
    var array1 = [];

    var left = 0,
        right = n - 1,
        top = 0,
        bottom = n - 1;

    while (left <= right && top <= bottom) {

        for (var i = top; i <= bottom; i++) {
            array1.push(array[i][left]);
        }
        left++;
        for (var i = left; i <= right; i++) {
            array1.push(array[bottom][i]);

        }
        bottom--;
        for (var i = bottom; i >= top; i--) {
            array1.push(array[i][right]);

        }
        right--;
        for (var i = right; i >= left; i--) {
            array1.push(array[top][i]);

        }
        top++;
    }
    console.log(array1);

}

SpiralTraversal(array, n)
console.log("Yes")