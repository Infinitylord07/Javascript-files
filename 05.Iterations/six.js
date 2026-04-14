const coding = ["js", "ruby", "java", "python", "cpp"]


 const values = coding.forEach( (item) => {
     //console.log(item);
    return item
} )

 //console.log(values); //for-each loop does't store any values 

 const myNums=[1,2,3,4,5,6,7,8,9,10]

 const urban=myNums.filter((val1)=>{
    return val1>4
 })
 //console.log(urban)


 const anotherNum=[]

 myNums.forEach((num)=>{
    if(num>4){
    anotherNum.push(num)} //another way of doing the same work using for-each loop
 })

 //console.log(anotherNum)


 const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let bookStore= books.filter((luis)=>{
    return luis.genre=='History'
  })
  //console.log(bookStore)

  bookStore= books.filter((bk)=>{
    return bk.genre=="Fiction" && bk.edition>2000;
  })

  console.log(bookStore)