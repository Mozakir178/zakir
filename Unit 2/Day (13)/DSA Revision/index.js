document.querySelector('form').addEventListener("submit", data);
// let info;
// if (JSON.parse(localStorage.getItem('info')) == null) {
//     info = [];
// } else {
//     info = JSON.parse(localStorage.getItem('info'))
// }

let info = JSON.parse(localStorage.getItem('addedData')) || [];
addData(info);


function data(event) {

    event.preventDefault();
    document.querySelector('tbody').innerHTML = "";

    let title = document.getElementById('title').value;
    let link = document.getElementById('link').value;
    let diff = document.getElementById('difficulty').value;
    let el = {
        title: title,
        link: link,
        difficulty: diff
    }
    info.push(el);

    let queArr = JSON.stringify(info);
    localStorage.setItem("addedData", queArr);
    addData(info);
    // console.log(persosnData);

}


function addData(info) {

    // let person = JSON.stringify(info);

    // localStorage.setItem('info', person);

    info.forEach(dataAdd);

    function dataAdd(el, index) {
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        td1.innerText = el.title;
        const td2 = document.createElement('td');
        td2.innerText = el.link;
        const td3 = document.createElement('td');
        td3.innerText = el.difficulty;
        const td4 = document.createElement('td');
        if (td3.innerText == "Easy") {
            td4.innerText = "Revision Not Required"
        } else if (td3.innerText == "Medium") {
            td4.innerText = "Revision Required"
        } else if (td3.innerText == "Hard") {
            td4.innerText = "Revision Required"
        }
        const td5 = document.createElement('td');
        td5.innerHTML = "DELETE";
        td5.style.backgroundColor = "red";
        tr.append(td1, td2, td3, td4, td5);;
        document.querySelector('tbody').append(tr);
        td5.addEventListener('click', function() {
            del(el, index);
        });
    }

}

function del(el, index) {
    document.querySelector('tbody').innerHTML = "";
    info.splice(index, 1)
    console.log(el);

    let queArr = JSON.stringify(info);
    localStorage.setItem("addedData", queArr);
    console.log(info);
    addData(info);
    window.location.reload();

}

// document.querySelector('input[type=submit]').addEventListener("click", dothis)

// function dothis(event) {

//     // let personData = JSON.parse(localStorage.getItem('info'))

//     personData.map(add);



// }