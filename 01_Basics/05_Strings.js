const name = "Ram"
const count = 40

// console.log(name + count + " value");

console.log(`Hello my name is ${name} and my repo count is ${count}`);

const lang = new String('Javascript-js')

// console.log(lang[0]);
// console.log(lang.__proto__);
// console.log(lang.length);
// console.log(lang.toUpperCase());
// console.log(lang.toLowerCase());
// console.log(lang.charAt(5));
// console.log(lang.indexOf('s'));


const newString = lang.substring(0,5)
console.log(newString);



const anotherStr = lang.slice(4,8)
console.log(anotherStr);



const newStr1 = "   Raghu   "
console.log(newStr1);
console.log(newStr1.trim());
console.log(newStr1.trimStart());
console.log(newStr1.trimEnd());



const url = "https://Raghu.com/raghu20%ram"
console.log(url.replace('20%','-'));
console.log(url.includes('ram'));


console.log(lang.split('-'));




