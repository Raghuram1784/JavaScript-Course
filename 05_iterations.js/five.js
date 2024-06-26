const coding = ["js", "ruby", "c++", "java", "python"]

// coding.forEach( function (val){
//     console.log(val);
// })




// coding.forEach( (val) => {
//     console.log(val);
// })



// function print(item){
//     console.log(item);
// }
// coding.forEach(print)



// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })

//***************************************************** imp **********************************************************

const myCode = [
    {
        languageName : "javaScript",
        languageFileName : "js"
    },
    {
        languageName : "java",
        languageFileName : "java"
    },
    {
        languageName : "python",
        languageFileName : "py"
    },
]
myCode.forEach( (val) => {
    console.log(val.languageName);
})