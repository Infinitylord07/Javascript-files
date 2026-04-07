const mySum1=Symbol("key1")
const obj_js ={
    name: "Saurabh",
    "full name":"Saurabh kushwaha",
    [mySum1]:"key1", //this is the only way to represent the symbol otherwise it will take input as a string
    city: "Noida",
    Age: 21,
    email: "aryasaurabh@google.com",
    lastlogged: ["monday", "wednesday"]

}

//console.log(obj_js.email)
//console.log(obj_js["full name"])

//console.log(typeof mySum1)

//console.log(obj_js[mySum1])

obj_js.email="skyscraper@google.com"


//Object.freeze(obj_js) //for lock the object so that no further changes allowed
//obj_js.email="gaobaba@google.com"

//console.log(obj_js)

obj_js.greeting= function(){
    console.log("hello js learner");
}
obj_js.greeting2= function(){
    console.log(`hello js learner,${this["full name"]}`);
}

console.log(obj_js.greeting());
console.log(obj_js.greeting2());