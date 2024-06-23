const marvel = ["IronMan","SpiderMan","Thor"];
const dc = ["Flash","superMan","BatMan"];

// marvel.push(dc)
// const all = marvel.concat(dc);
// console.log(all);

// const allHeroes = [...marvel, ...dc]
// console.log(allHeroes);

const arr = [1,2,3,[4,5,6],7,[5,6,7,[2,4,5]]];
const arr2 = arr.flat(Infinity)
console.log(arr2);

console.log(Array.from("Raghu"));



let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));