"use strict";
let username = "Doris";
// console.log(username);
function getFullname(username) {
    return username;
}
// console.log(getFullname("Madueke Ethel-Doris"));
function addScores(a, b) {
    return a + b;
}
// console.log(addScores(96,89));
function stateOfOrigin(arr) {
    for (let states of arr) {
        //    console.log(states);
    }
}
stateOfOrigin(["abia", "anambra", "imo", "delta", "lagos"]);
const customer1 = {
    firstname: "Doris",
    lastname: "Amarachi",
    amount: 123000,
    gender: "female" /* GENDER.FEMALE */,
    recieptno: 546889,
};
const customer2 = {
    firstname: "Daniel",
    lastname: "Egele",
    amount: 183000,
    gender: "male" /* GENDER.MALE */,
    recieptno: 549677,
};
function displayCustomerInfo(users) {
    if (users.recieptno !== undefined) {
        return 'Thank you ${users.firstname} ${users.lastname} for your patronage';
    }
    return 'invalid customer details';
}
let user1 = displayCustomerInfo(customer1);
let user2 = displayCustomerInfo(customer2);
console.log(user1, user2);
