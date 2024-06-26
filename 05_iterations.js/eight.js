const nums = [1, 2, 3]

// const total = nums.reduce(function (acc, currVal) {
//     console.log(`acc : ${acc} and currVal : ${currVal}`);
//     return acc + currVal
// }, 0)
// console.log(total);




// by using arrow operator------------------>>>>>>>
// const total = nums.reduce( (acc, currVal) => acc + currVal, 0)   
// console.log(total);



const shoppingCart = [
    {
        courseName : "Js course",
        price : 2999
    },
    {
        courseName : "py course",
        price : 999
    },
    {
        courseName : "swift course",
        price : 1999
    },
    {
        courseName : "MERN course",
        price : 4999
    },
]

const TotalAmount = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(TotalAmount);