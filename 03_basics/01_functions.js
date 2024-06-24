function myName() {
    console.log("R");
    console.log("A");
    console.log("G");
    console.log("H");
    console.log("U");
}
// myName()




// function addTwoNumbers(num1, num2){
//       console.log(num1 + num2);   
// }
// addTwoNumbers(3,5)
// addTwoNumbers(3,"5")
// addTwoNumbers(3,"a")
// addTwoNumbers(3,null)





function addTwoNumbers(num1, num2){
      return num1 + num2   
}                                                                                
const result = addTwoNumbers(3,5)
// console.log("Result : ",result);


function loginUserMessage(userName){
    if(userName === undefined ){ // !username
        console.log("Please enter a username");
        return
    }
  return `${userName} just logged in`
}

// console.log(loginUserMessage());
// console.log(loginUserMessage(""));

console.log(loginUserMessage("Ram"));