const usermail="0" //if string is empty it contians false values
if(usermail){
    console.log("user got mail");
}
else{
    console.log("user didn't get any mail")
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

const emp_object={}
if(Object.keys(emp_object).length===0){
    console.log("empty object")
}


//NUll coalescing operator

val1= 34??45
val2=null??76??89

console.log(`the value of VAL1 is ${val1} and the value of val2 is ${val2}`)

//ternary operator

//condition?true:false


const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
