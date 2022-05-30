// You have an array of objects that stores firstName and lastName values of your friends as follows:



let users = [
    { firstName: "Nrupul", lastName: "Dev", place: "Banglore" },
    { firstName: "Prateek", lastName: "Shukla", place: "Banglore" },
    { firstName: "Yogesh", lastName: "Bhat", place: "Kolkata" },
];

let result = users.map(Names);

function Names(el, i, arr) {
    return el.firstName + " " + el.lastName
};

console.log(result);