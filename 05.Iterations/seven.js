const myNums=[1,2,3,4,5,6]

//const newNums= myNums.map((val)=> val+5)
//console.log(newNums)

const newNums= myNums.map((val)=>{
    return val+1
})
.map((val)=>{
    return val*10
})
.filter((val)=>{
    return val>40
})

console.log(newNums)