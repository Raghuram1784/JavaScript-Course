// const email = "ram@email.com"  // o/p------>Got user email
// const email = ""     // o/p------>Don't have user email
const email = []       // o/p------>Got user email

// if(email){
//     console.log("Got user email");
// }
// else{
//     console.log("Don't have user email");
// }




// ********Falsy Values********
//false, 0, -0, BigInt--->0n, "", null, undefined, Nan


// ********Truthy Values********
// "0", 'false', " "-->space b/w double codes, [], {}, function(){}

// if(email.length === 0){
//     console.log("Array is empty");
// }



const empObj = {}

if(Object.keys(empObj).length === 0){
    console.log("Object is empty");
}

// ****************************** Nullish Coalescing Operator (??) : null undefined *******************************

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
val1 = null ?? 10 ?? 15


console.log(val1);


// ****************************** Ternary Operator*******************************
// condition ? true : false

const teaPrice = 100
teaPrice <= 80 ? console.log("Less than 80") : console.log("more than 80")


