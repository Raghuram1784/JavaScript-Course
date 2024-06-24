let a =300

if(true){
    let a = 10
    const b =20
    // var c = 30
    // console.log("Inside: ",a);
}

// console.log(a);
// console.log(b);
// console.log(c);



function one(){
    const userName = "Ram"

    function two(){
        const website  = "GitHub"
        console.log(userName);
    }
    // console.log(website);
    two()
}
// one()



if(true){
    const userName = "Ram"
    if (userName === "Ram") {
        const website = " GitHub"
        console.log(userName + website);
    }
    // console.log(website);
}
// console.log(userName);






//************************************ Interesting ************************************

console.log(addOne(8));
function addOne(num){
    return num+1
}


// addTwo(5)
const addTwo = function(num){
    return num+2
}

