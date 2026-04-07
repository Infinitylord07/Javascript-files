//const TinderUser= new Object();
//console.log(TinderUser)

const TinderUser={}

TinderUser.id="123abc"
TinderUser.name="Janhavi"
TinderUser.loggedIn=false
//console.log(TinderUser)

const regularUSER={
    email: "tommy@google.com",
    fullname: {
        userFullname:{
            firstName: "Saurabh",
            lastName: "Kushwaha"
        }
    }
}

//console.log(regularUSER.fullname.userFullname)

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj3={5:"e",6:"f"}

const obj4={obj1,obj2}
//console.log(obj4)

const obj5=Object.assign({},obj1,obj2,obj3)
//console.log(obj5)
const obj6={...obj1,...obj2,...obj3} //this is also the easy way to spread the nested objects 
//console.log(obj6)

//console.log(TinderUser)
//console.log(Object.keys(TinderUser))
//console.log(Object.values(TinderUser))
//console.log(Object.entries(TinderUser))

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]