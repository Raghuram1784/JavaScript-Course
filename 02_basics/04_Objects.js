// const instaUser = new Object()
const instaUser = {}

instaUser.id ="12345"
instaUser.name = "Sakshiiiiiii"
instaUser.isLoogedIn = false

// console.log(instaUser);

const user = {
    email : "Raghu@gmail.com",
    fullName : {
          userFullName : {
            firstName : "Raghu",
            lastName : "ram",
          }
    }
}

// console.log(user.fullName);

const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "a" , 4: "b"}

// const obj3 = {obj1 ,obj2}
// const obj3 =  Object.assign(obj1 , obj2)
// const obj3 =  Object.assign({} ,obj1 , obj2)
const obj3 =  {...obj1, ...obj2}
// console.log(obj3);





// console.log(instaUser)
// console.log(Object.keys(instaUser))
// console.log(Object.values(instaUser))
// console.log(Object.entries(instaUser))
// console.log(instaUser.hasOwnProperty("name"))




const course = {
  courseName : "Javascript Series",
  price : "999",
  courseInstructor : "Hitesh"
}
//Another way of writing -----course.courseInstructor
const {courseInstructor : instructor} = course 
// console.log(courseInstructor);
console.log(instructor);



//***************************************json structure*****************************************

// {
//   "name" : "Ram",
//   "courseName" : "JavaScript series",
//   "price" : "free"
// }


//***************************************API's structure*****************************************

// [
//   {},
//   {},
//   {},  
// ]
