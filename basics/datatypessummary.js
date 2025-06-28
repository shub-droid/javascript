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