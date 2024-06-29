// const promiseOne = new Promise(function(resolve, reject){
//        setTimeout(function()  {
//            console.log('Async task is complete');
//            resolve()
//        }, 1000);
// })
// promiseOne.then(function(){
//     console.log("promise consumed")
// })



//secondPromise------------>
// new Promise(function(resolve, reject){
//     setTimeout(function()  {
//         console.log('Async task2 is complete');
//         resolve()
//     }, 1000);
// }).then(function(){
//     console.log("Async 2 resolved");
// })




// const promiseThree = new Promise(function(resolve, reject){
//        setTimeout(function()  {
//            resolve({userName: "Ram", email: "Ram@email.com"})
//        }, 1000);
// })
// promiseThree.then(function(user){
//     console.log(user)
// })



// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true;
//         // let error = false;
//         if(!error){
//             resolve({userName: "Raghu", PassWord: "12345"})
//         }else{
//             reject('ERROR: Something Went Wrong')
//         }
//     },1000)
// })
// promiseFour.then((user) => {
//     console.log(user);
//     return user.userName
// }).then((userName) => {
//     console.log(userName);
// }).catch(function(error) {
//     console.log(error);
// }).finally(() => console.log("The promise is either resolved or rejected"))






//***************************************Async Await method *******************************************

// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true;
//         // let error = false;
//         if(!error){
//             resolve({userName: "Javascript", PassWord: "123"})
//         }else{
//             reject('ERROR: JS Went Wrong')
//         }
//     },1000)
// })

// async function consumePromiseFive() {
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }
// consumePromiseFive()





// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ",error);
//     }
// }
// getAllUsers()

// ********************************** Or *********************************
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))