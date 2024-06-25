//Immediate Invoked Function Expression(IIFE)

(function run (){
    console.log(`DB Connected`);
})();


( () => {
    console.log(`DB Connected TWO`);
})();


( (name) => {
    console.log(`DB Connected TWO ${name}`);
})("Ram")

