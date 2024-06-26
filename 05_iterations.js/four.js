// const obj = {
//     js : 'javascript',
//     cpp : 'c++',
//     rb : 'ruby',
//     swift : 'swift by apple'
// }
// for (const key in obj) {
//     console.log(`${key} shortcut is for ${obj[key]}`);
// }



// const programming = ["js", "ruby", "c++", "java", "python"]
// for (const key in programming) {
//     console.log(programming[key]);
// }



const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")  
map.set('IN', "India")
for (const key in map) { 
    console.log(key);     //--------->>>map is not iterable so it wont gives any output
}
