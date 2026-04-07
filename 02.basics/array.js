let myArry=[1,2,3,4,5,6]
//console.log(typeof (myArry))
//console.log(myArry[1])

const myArry2= new Array(1,2,3,4,5,6)
//console.log(myArry2[4])

myArry.push(7);
//console.log(myArry)

myArry2.push(13)
//console.log(myArry2)

myArry.pop()
//console.log(myArry)

myArry2.pop()
//console.log(myArry2)

//myArry.unshift(5)
//console.log(myArry)

//myArry.shift()
//console.log(myArry)

//console.log(myArry.includes(4));
//console.log(myArry.indexOf(5))

/*const newArry=myArry.join()
console.log(myArry)
console.log(typeof newArry)*/

const myn1=myArry.slice(1,3);
console.log("A",myn1)
console.log("B",myArry)

const myn2=myArry.splice(1,3)
console.log(myn2)
console.log("C",myArry)



