document.getElementById('roll').addEventListener('click', winners);

function winners(event) {
    let a = Math.floor(Math.random() * 6) + 1;
    let b = Math.floor(Math.random() * 6) + 1;
    let c = Math.floor(Math.random() * 6) + 1;

    document.getElementById('member-1').innerHTML = a;
    document.getElementById('member-2').innerHTML = b;
    document.getElementById('member-3').innerHTML = c;

    // let win = Math.max(a, b, c);
    // let min = Math.min(a, b, c);

    if (a > b && b > c) {
        document.getElementById('member-1').style.backgroundColor = "green";
        document.getElementById('member-2').style.backgroundColor = "yellow";
        document.getElementById('member-3').style.backgroundColor = "red";
        document.getElementById('winner').innerHTML = "MEMBER A IS WINNER"
        console.log(a, b, c)
    }

    if (a > b && b < c) {
        document.getElementById('member-1').style.backgroundColor = "green";
        document.getElementById('member-3').style.backgroundColor = "yellow";
        document.getElementById('member-2').style.backgroundColor = "red";
        document.getElementById('winner').innerHTML = "MEMBER A IS WINNER"
        console.log(a, b, c)
    }
    if (a < b && a > c) {
        document.getElementById('member-2').style.backgroundColor = "green";
        document.getElementById('member-1').style.backgroundColor = "yellow";
        document.getElementById('member-3').style.backgroundColor = "red";
        document.getElementById('winner').innerHTML = "MEMBER B IS WINNER"
        console.log(a, b, c)
    }
    if (a < b && a == c) {
        document.getElementById('member-2').style.backgroundColor = "green";
        document.getElementById('member-1').style.backgroundColor = "blue";
        document.getElementById('member-3').style.backgroundColor = "blue";
        document.getElementById('winner').innerHTML = "MEMBER B IS WINNER"
        console.log(a, b, c)
    }
    if (a < b && a < c) {
        document.getElementById('member-2').style.backgroundColor = "green";
        document.getElementById('member-3').style.backgroundColor = "yellow";
        document.getElementById('member-1').style.backgroundColor = "red";
        document.getElementById('winner').innerHTML = "MEMBER B IS WINNER"
        console.log(a, b, c)
    }

    if (c > a && a > b) {
        document.getElementById('member-3').style.backgroundColor = "green";
        document.getElementById('member-1').style.backgroundColor = "yellow";
        document.getElementById('member-2').style.backgroundColor = "red";
        document.getElementById('winner').innerHTML = "MEMBER C IS WINNER"
        console.log(a, b, c)
    }
    if (c > b && b > a) {
        document.getElementById('member-3').style.backgroundColor = "green";
        document.getElementById('member-2').style.backgroundColor = "yellow";
        document.getElementById('member-1').style.backgroundColor = "red";
        document.getElementById('winner').innerHTML = "MEMBER C IS WINNER"
        console.log(a, b, c)
    }

    if (a == b && b > c) {
        document.getElementById('member-1').style.backgroundColor = "blue";
        document.getElementById('member-2').style.backgroundColor = "blue";
        document.getElementById('member-3').style.backgroundColor = "red";
        document.getElementById('winner').innerHTML = "DRAW BETWEEN A AND B"
        console.log(a, b, c)
    }
    if (a == c && c > b) {
        document.getElementById('member-1').style.backgroundColor = "blue";
        document.getElementById('member-3').style.backgroundColor = "blue";
        document.getElementById('member-2').style.backgroundColor = "red";
        document.getElementById('winner').innerHTML = "DRAW BETWEEN A AND C"
        console.log(a, b, c)

    }
    if (c == b && b > a) {
        document.getElementById('member-3').style.backgroundColor = "blue";
        document.getElementById('member-2').style.backgroundColor = "blue";
        document.getElementById('member-1').style.backgroundColor = "red";
        document.getElementById('winner').innerHTML = "DRAW BETWEEN B AND C"
        console.log(a, b, c)

    }
    if (a == b && b == c) {
        document.getElementById('member-1').style.backgroundColor = "blue";
        document.getElementById('member-2').style.backgroundColor = "blue";
        document.getElementById('member-3').style.backgroundColor = "blue";
        document.getElementById('winner').innerHTML = "ITS A DRAW"
        console.log(a, b, c)

    }

    if (a > b && b == c) {
        document.getElementById('member-1').style.backgroundColor = "green";
        document.getElementById('member-2').style.backgroundColor = "blur";
        document.getElementById('member-3').style.backgroundColor = "blur";
        document.getElementById('winner').innerHTML = "MEMBER A IS WINNER"
        console.log(a, b, c)
    }
    if (c > b && b == a) {
        document.getElementById('member-3').style.backgroundColor = "green";
        document.getElementById('member-2').style.backgroundColor = "blue";
        document.getElementById('member-1').style.backgroundColor = "blue";
        document.getElementById('winner').innerHTML = "MEMBER C IS WINNER"
        console.log(a, b, c)
    }
    if (a < b && c == a) {
        document.getElementById('member-3').style.backgroundColor = "blue";
        document.getElementById('member-2').style.backgroundColor = "green";
        document.getElementById('member-1').style.backgroundColor = "blue";
        document.getElementById('winner').innerHTML = "MEMBER C IS WINNER"
        console.log(a, b, c)
    }

}