let username:string = "Doris";
// console.log(username);
function getFullname(username:string){
    return username
}
// console.log(getFullname("Madueke Ethel-Doris"));

function addScores(a:number,b:number):number{
    return a + b
}
// console.log(addScores(96,89));

function stateOfOrigin(arr:string[]){
    for(let states of arr){
    //    console.log(states);
       
    }
}
stateOfOrigin(["abia","anambra","imo","delta","lagos"]);

//Interface

interface Customer{
firstname: string;
lastname:string;
amount:number;
gender: GENDER;
recieptno:number;
}

const customer1: Customer = {
    firstname: "Doris",
    lastname: "Amarachi",
    amount: 123000,
    gender: GENDER.FEMALE,
    recieptno: 546889,
}

const customer2: Customer = {
    firstname: "Daniel",
    lastname: "Egele",
    amount: 183000,
    gender: GENDER.MALE,
    recieptno: 549677,
}

function displayCustomerInfo(users:Customer){
    if(users.recieptno !== undefined){
        return 'Thank you ${users.firstname} ${users.lastname} for your patronage'
    }
    return 'invalid customer details'
}
let user1 = displayCustomerInfo(customer1);
let user2 = displayCustomerInfo(customer2);
console.log(user1, user2);
