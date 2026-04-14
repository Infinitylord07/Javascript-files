const ceasor= [1,2,3,4,5,6,7,8,9]

let fund=ceasor.reduce(function(acc,curr){
    
    //console.log(`acc:${acc} and current value ${curr}`)
    
    return acc+curr
    
},0)
//console.log(fund)
//let fund= ceasor.reduce((acc,curr)=>acc+curr,0)

//console.log(fund)

const newObject=[{
    course:"webdev",
    price:1999
},
{
    course: "ML",
    price:5999
},
{
    course: "data science",
    price: 4999
}]
 let StudyCourse= newObject.reduce((acc,currvalue)=>acc+currvalue.price,0);

 //console.log(StudyCourse)

 let mood= newObject.filter((val)=>val.course)
 console.log(mood)