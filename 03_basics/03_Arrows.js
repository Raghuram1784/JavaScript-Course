const user = {
    userName : "Ram",
    price : 999,

    welcomeMessgae : function() {
        console.log(`${this.userName} ,welcome to website`);
        // console.log(this);
    }
}

// user.welcomeMessgae()
// user.userName = "Raghu"
// user.welcomeMessgae()

// console.log(this);



// const arrow = function() {
//     let userName = "Ram"
//     console.log(this.userName);
// }
//  arrow()


// const arrow = () => {
//     let userName = "Ram"
//     // console.log(this.userName);
//     console.log(this);
// }
//  arrow()






// const addTwo = (num1, num2) => {
//      return num1+num2
// }
// console.log(addTwo(14,3));




// const addTwo = (num1, num2) => num1+num2

// const addTwo = (num1, num2) => (num1+num2)

const addTwo = (num1, num2) => ({userName : "Ram"})

console.log(addTwo(14,3));