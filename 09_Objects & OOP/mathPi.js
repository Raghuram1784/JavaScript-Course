// const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descriptor);

// console.log(Math.PI);
// Math.PI = 6
// console.log(Math.PI);



const course = {
    name : "Full Stack",
    price: 35000,
    isAvailable : true,

    newCourse: function(){
        console.log("newCourses not there");
    }
}
// console.log(course);
console.log(Object.getOwnPropertyDescriptor(course, "name"));




Object.defineProperty(course, 'name', {
    // writable: false,
    // enumerable: false,
    enumerable: true,
})
console.log(Object.getOwnPropertyDescriptor(course, "name"));

for (let [key, value] of Object.entries(course)) {
    if (typeof value != 'function') {
        console.log(`${key} : ${value}`);
    }
    
}