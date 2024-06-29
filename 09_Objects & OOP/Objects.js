// function mulBy5(num) {
//     return num * 5
// }
// mulBy5.power = 2;

// console.log(mulBy5(5));
// console.log(mulBy5.power);
// console.log(mulBy5.prototype);


function createUser(userName, score){
    this.userName = userName
    this.score = score
}
createUser.prototype.increment = function (){
    this.score++
}
createUser.prototype.printMe = function (){
    console.log(`Score is ${this.score}`);
}

const user1 = new createUser("Raghu",100)
const user2 = new createUser("Ram",98)

user1.printMe()
user2.printMe()
