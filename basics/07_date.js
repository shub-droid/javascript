let myDate=new Date()
console.log(myDate)

console.log(myDate.toString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())


let myCreateDate=new Date(2025,0,23,5,3)

let myTimeStamp=Date.now()

console.log(myTimeStamp)
console.log(myCreateDate.getTime())
console.log(Math.floor(Date.now()/1000))


let newdate=new Date()
console.log(newdate);

//importand method
console.log("Importand Method")

console.log(newdate.toLocaleString(
    'default',{
        weekday:"long"
    }
))
