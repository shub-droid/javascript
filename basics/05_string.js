const name="Shubham"
const repocount= 50

console.log(name + repocount)
//old way to concatinate the string 

console.log("hello my name is ${name} and my repo count is ${repocount}")
//newer way to concatinate the string using placeholder.

const gamename=new String('super mario')
console.log(gamename[0])

console.log(gamename.length)
console.log(gamename.toUpperCase())

//important method

const newString=gamename.substring(0,4)
console.log(newString)

const anotherString=gamename.slice(-8,4)
console.log(anotherString)  //here we can pass negative method but in substring we cant 

const newString1="   new   "
console.log(newString1)
console.log(newString1.trim())

const url ="https://shubham.com/hitesh%20mallick"

console.log(url.replace('%20','-'))

console.log(url.includes("mallick"))

console.log(gamename.split(' ')) //split the string according to the space and returns array 
