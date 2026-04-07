const Marvel=["Captain america","Thor","Iron man"]
const DC=["Superman","Batman","Flash","Wonderwoman"]

//Marvel.push(DC)
//console.log(Marvel)

//const all_heroes=Marvel.concat(DC)
//console.log(all_heroes)

const all_heroes=[...Marvel,...DC]
//console.log(all_heroes)

const newAnotherarray=[1,2,3,[4,5,6],7,8,9,[1,2,3,[4,3,2,1]]]
const changedArray= newAnotherarray.flat(Infinity)
//console.log(changedArray)


//console.log(Array.isArray("hitesh"))

//console.log(Array.from("SAURABH"))

let score1= 100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))