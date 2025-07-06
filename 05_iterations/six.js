const coding=['js','java','cpp','pyhon']

/*onst values=coding.forEach((item)=>{
    console.log(item)
})
console.log(values)*/
// undefined a rha hai mtlab yeah koi value nhi de rha

const mynum=[1,2,3,4,5,6,7,8,9]


//const newnum=mynum.filter( (num)=> num>5 )
//console.log(newnum)
//yeah return krta hai
/*const newnum=mynum.filter( (num)=>{
    
    return num>5
} )
console.log(newnum)*/
//aagr {} use krte hai to scope open ho zaata hai issiliye we should use the return keyword

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

//const userbook=books.filter( (book)=> book.genre==='History' )
//const userbook=books.filter( (book)=> book.publish>=2000)
const userbook=books.filter( (book)=> book.genre==='History'&&book.publish>1980 )

console.log(userbook)