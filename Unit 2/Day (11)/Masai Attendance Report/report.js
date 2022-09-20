// write code here, dont change anything in HTML and css files
// refer to id's mentioned in html files carefully
// Follow the exact column order for tables,for eg: name should be filled under "name" column
// we are using form here, make sure you are using "submit" eventListener , or else you will get 0 marks

document.querySelector("form").addEventListener("submit", function data(event) {
    event.preventDefault();
    console.log("yes");

    let avatar = document.querySelector("#image").value;
    let name = document.querySelector("#name").value;
    let batch = document.querySelector("#batch").value;
    let dsa = document.querySelector("#dsa").value;
    let skill = document.querySelector("#cs").value;
    let codding = document.querySelector("#coding").value;
    let per = ((Number(dsa) + Number(skill) + Number(codding)) * 100) / 30;
    per = Math.round(per)
    console.log(per);

    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    let image = document.createElement("img");
    image.src = avatar;
    td1.append(image);

    var td2 = document.createElement("td");
    td2.innerText = name;
    var td3 = document.createElement("td");
    td3.innerText = batch;
    var td4 = document.createElement("td");
    td4.innerText = dsa;
    var td5 = document.createElement("td");
    td5.innerText = skill;
    var td6 = document.createElement("td");
    td6.innerText = codding;
    var td7 = document.createElement("td");
    td7.innerText = per;
    var td8 = document.createElement("td");
    if (per > 50) {
        td8.innerText = "regular";
    } else {
        td8.innerText = "Async";
    }

    let td9 = document.createElement("td");
    td9.setAttribute("class", "del");
    td9.innerText = "Delete";

    tr.append(td1, td2, td3, td4, td5, td6, td7, td8, td9);

    document.querySelector("tbody").append(tr);

    td9.addEventListener("click", del);

});

function del() {
    event.target.parentNode.remove();
}






// event.target.parentNode.remove();