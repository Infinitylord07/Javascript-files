// Immediately invoked code



function chai(){
    console.log("DB connected ")
}
//chai()

(function milk(){
    console.log("DB connected two");  //named iife
})();


(()=>{
    console.log("linked database authentically") //simple iife
}) ();

//this is also the one type of representation of arrow functions without any name

((name)=>{
    console.log(`${name} linked database authentically`)
}) ('Saurabh')



