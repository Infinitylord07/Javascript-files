const user ={
    username:"Saurabh",
    price : "599" ,
    welcome : function(){
        console.log(`${this.username} welcome to the website`);
        console.log(this)

    }
}
//user.welcome()
//user.username="Janhavi";
//user.welcome()

//console.log(this)


function chai(){
    const hr="Saurabh kushwaha"
    console.log(hr)
    console.log(this.hr) //this will not work heree
}
//chai()

const coffee=function(){
    let user1="naman"
    console.log(this.user)
}
//coffee()

const ice=()=>{
    let user2="Geeta"
    console.log(this.user2)

}
ice()
