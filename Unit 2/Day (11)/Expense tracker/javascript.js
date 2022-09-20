document.querySelector("form").addEventListener("submit",

    function form() {
        event.preventDefault();

        let month = document.getElementById("month").value;
        let inc = document.getElementById("income").value;
        let exp = document.getElementById("expense").value;

        let box = document.createElement("div");


        let a = document.createElement("h1");
        a.innerHTML = month;

        let b = document.createElement("h4");
        b.innerHTML = "Income - " + inc;
        let c = document.createElement("h4");
        c.innerHTML = "Expenses - " + exp;

        let d = document.createElement("h4");
        if (inc > exp) {
            d.innerHTML = "Save";
            d.style.color = "green";
        } else if (inc < exp) {
            d.innerHTML = "Dept";
            d.style.color = "red";
        } else if (inc == exp) {
            d.innerHTML = "BreakEven";
            d.style.color = "orange";
        }

        let e = document.createElement("button");
        e.innerHTML = "Delete";
        // e.style.color = "red";




        box.append(a, b, c, d, e);

        document.getElementById("report").append(box);

        e.addEventListener("click", cut);


    });




function cut() {
    event.target.parentNode.remove();
}