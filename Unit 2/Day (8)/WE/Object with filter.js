// You have an array of objects that stores firstName and lastName and place values of your friends as follows:

// use filter along with map() method to iterate over the array and output the names who lives in Banglore Output should look like

let users = [
    { firstName: "Nrupul", lastName: "Dev", place: "Banglore" },
    { firstName: "Prateek", lastName: "Shukla", place: "Banglore" },
    { firstName: "Yogesh", lastName: "Bhat", place: "Kolkata" },
];

let result = users.filter(place).map(name);

function place(el) {
    return el.place === "Banglore";
}

function name(el) {
    return el.firstName;
}

console.log(result);