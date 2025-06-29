// Primitive are 7 categories are call by values
// 7 Types: String,Number,Boolearn,null,undefined,symbol(for unique value),big int


const id=Symbol('123')
const anotherID=Symbol('123')

console.log(id==anotherID)

//Reference Type : Non primitive
//Arrays,Objects,functions
const heros=["shaktiman","batman","doga"]
let shubham={
    name:"hitesh",
    age:"19"
}
//null ka typeof ka output object aata hai
//function ka data type objet function bola jaata hai
/* Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object  */

//Stack Memory(Primitive),Heap Memory(Non-Primitive)

let myname="Aman"
let myname2=myname

console.log(myname)
console.log(myname2)

//copy of the data is done in stack memory
let user={
    name:"Shubham",
    age:19
}
console.log(user.name)

let user2=user
user2.name="Kishan"
console.log(user2.name)
console.log(user.name)   //answer is comming out to be kishan because in JS heap memory the same instance is shared between them so change in one leads to change in other