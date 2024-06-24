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

// console.log(loginUserMessage("Ram"));



function calculateCartPrice(...num1){ //...num1 ----->Rest Operator
    return num1
}

// console.log(calculateCartPrice(2));
// console.log(calculateCartPrice(200, 300, 400, 500));





//************************************Functions with Objects****************************************

const user = {
    userName : "Ram",
    price : 456
}

function handleObject(anyObject){
    console.log(`UserName is ${anyObject.userName} and price is ${anyObject.price}`);
}

// handleObject(user)   or
handleObject({
    userName : "Sakshi",
    price : 999
})   




//************************************Functions with Arrays****************************************
const arr = [100, 200, 300 , 900]

function returnSecondValu(getArr){
    return getArr[1]
}

// console.log(returnSecondValu(arr));
console.log(returnSecondValu([100, 200, 300, 400]));