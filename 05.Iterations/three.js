//we will gonna learn about for-of loop

/*
const num=[1,2,3,4,5]
for (const element of num) {
    console.log(element)
    
}
*/

const greetings="welcome to javascript!"
for (const greet of greetings) {
    //console.log(greet)
    
}

const knight={
    1:"swordsman",
    2:"archer",
    3:"hammer weilder"
}

/*
for (const element of knight) {
    //console.log(element)
    //here the for of loop won't work because object isn't iterable on for of loop 
    
}

*/

for (const key in knight) {
    //console.log(`${key} stands for the soldiers who carry ${knight[key]}`)
}

const programming=["javascript","python","java","c++"]
for (const key in programming) {
    //console.log(programming[key])
    
    
    
}


const map= new Map()
map.set('IN',"INDIA")
map.set('USA',"united states of america")
map.set('RSA',"RUSSIA")

for (const [key,value] of map) {
    console.log(key, ':-', value)
    
}