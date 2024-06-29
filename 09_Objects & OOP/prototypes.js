// let myName = "Raghu    "
// console.log(myName.trueLength);
// // console.log(myName.trim().length);



let heroes = ["thor", "captainAmerica"]
let heroPower = {
    thor : "hammer",
    captainAmerica : "Shield",

    getSpiderPower: function(){
        console.log(`Captain power is ${this.captainAmerica}`);
    }
}

Object.prototype.ram = function(){
    console.log(`Ram is present in all Objects`);
}

Array.prototype.Raghu = function() {
    console.log(`Hi, hello!...`);
}
// //heroPower.ram()
// heroes.ram()
// heroes.Raghu()
// // heroPower.Raghu()   //------------->not possible






//************************************************* Inheritance **********************************************

const user = {
    myName : "Ram",
    email : "Ram@email.com"
}

const Teacher = {
    makeVideo : true
}

const teachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : 'JS assignment',
    fullTime : true,
    __proto__ : teachingSupport
}

Teacher.__proto__ = user

//modern syntax--------------------------------------------------------------------->>>>>>>

Object.setPrototypeOf(teachingSupport, Teacher)

let anotherUserName = "RAM      "
String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUserName.trueLength()
"Sakshi".trueLength()
"Raghu".trueLength()