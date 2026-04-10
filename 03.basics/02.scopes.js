let a=10
const b =20
var c =30

if(true){
    let a=25
    const b=36
    //console.log(`Inner value of a and b is ${a} , ${b}`)
    //this is local scope value of a only applicable in this scope only
}

//console.log(a)
//console.log(b)
//console.log(c)


function one(){
    const username="Saurabh";
    function two(){
        const website="linkedin";
        console.log(username)
    }
    //console.log(website)
    two()
}
//one()


if(true){
    const fb="shaurya"
    if(true){
        const urban="Noida"
        //console.log(fb)
    }
    //console.log(urban)
}
//console.log(fb)


console.log(addOne(5))


function addOne(num){
    return num+1;

}
//console.log(addOne(5))

//console.log(addTwo(5))  //this can not be initialised due to function used in a constant variable

const addTwo=function(num){
    return num+2;
}
console.log(addTwo(5))

