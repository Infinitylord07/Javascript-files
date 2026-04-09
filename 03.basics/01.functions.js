/*function addTwoNumber(a,b){
    console.log(a+b);
}

addTwoNumber(5,9)
*/

function twoSum(number1,number2){
   
    return number1+number2;
}
//console.log(twoSum(8,9));

function loggedIn(username="Sam"){
    if(!username){
        //console.log("please Enter a username");
        return;
    }
    
    return `${username},logged in successfully`
}
//console.log(loggedIn())


function calculatePriceCart(...num1){
    return num1;
}
//console.log(calculatePriceCart(200,400,600,800))

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));


