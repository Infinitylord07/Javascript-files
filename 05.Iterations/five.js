const svdRifle=["java","python","c++","javascript","Golang"]
svdRifle.forEach((language) => {
    //console.log(language)
    
});


function printme(item){
    //console.log(item)
}
svdRifle.forEach(printme)

svdRifle.forEach((val1,index,arr)=>{
    //console.log(val1,index,arr)

})


const myObject=[{
    language: "Javascript",
    filename: "js"
},
{
    language:"Python",
    filename:"py"

},
{
    language:"c",
    filename:"exe"
}]

herew=myObject.forEach((item)=>{

    console.log(item.language)

})

const programming=myObject.map((val1)=>{
    return val1 .language;
})

console.log(programming)