// <, >, <=, >=, !=, ==, ===
// 2<4, 4>2, 2<=4, 4>=2, 3!=2 ,2=="2", 2===2        ---------->output : true

// if(2 == "2"){
//     console.log("Executed");  --------->output : Exectued
// }

// if(2 === "2"){
//     console.log("Executed");
// }



const balance = 1000

if(balance < 500){
    console.log("less than");
}else if(balance < 750){
    console.log("less than 750");
}else if(balance < 900){
    console.log("less than 900");
}else{
    console.log("less than 1200");
}


// && if both conditions are true then the o/p will be printed
// || if any one condition is true then the o/p will be printed