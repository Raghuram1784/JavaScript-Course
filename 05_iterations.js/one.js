// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if(element === 6){
//         console.log("Number 6");
//     }
//     console.log(element);
    
// }



// for (let i = 1; i <= 10 ; i++) {
//     console.log(`Outer loop ${i}`);
//     for (let j = 1; j <= 10 ; j++) {
//         // console.log(`Inner loop ${j} and Outer loop ${i}`);
//         console.log(i + ' * '  + j + ' = ' + i*j);
//     }
// }


// const arr = ["IronMan", "spiderMan", "Thor", "Captain America", "Hulk"]
// console.log(arr.length);
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     console.log(element);
// }



//break and continue

// for (let i = 1; i <= 20; i++) {
//     if(i === 5){
//         console.log(`Detected 5`);
//         break
//     }
//     console.log(`Value of i is ${i}`);
    
// }

for (let i = 1; i <= 20; i++) {
    if(i === 5){
        console.log(`Detected 5`);
        continue
    }
    console.log(`Value of i is ${i}`);
    
}