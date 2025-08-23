

/*console.log(Math.PI);
Math.PI=5;
console.log(Math.PI)*/
//here clearly we cant overrde the pi value


//const descripter=Object.getOwnPropertyDescriptor(Math,"PI")
//console.log(descripter);

const chai={
    name:"ginger_chai",
    price:250,
    isAvailable:true
}
console.log(Object.getOwnPropertyDescriptor(chai,"name"))
Object.defineProperty(chai,'name',{
    writable:false,
    enumerable:false
})
// aab hmne properties change kr diya apne object ka
console.log(Object.getOwnPropertyDescriptor(chai,"name"))