// singleton object :literal se aagr declare krte hai to singleton nhi bnta
// constructor se aagr kaaremge to banega singleton

//Object Literals

const mysym=Symbol("Key1")
console.log("Object Literal")
const Jsuser={
    name:"Shubham",
    "Full Name":"Shubham MAllick",
    [mysym]:"Hello" ,//this is the correct way to use symbol as key
    age:18,
    location:"Chakulia",
    email:"hijjjsh@gmail.com",
    lastlogindays:['monday','saturday']
}
console.log(Jsuser.email)
console.log(Jsuser['email'])  //yeah bhi ek tarika hai access krne ka
console.log(Jsuser['Full Name']) //is tarah ke key ko hm dot se access nhi kr skte

console.log(Jsuser[mysym])
console.log(typeof(Jsuser[mysym]))

//Object.freeze(Jsuser)
// to Freeze the Object now we cant change the value inside the objects,no error will be thrown still no changes
Jsuser.greetings=function(){
   console.log('Hello from Function')
}


Jsuser.greetings2=function(){
    console.log('hello from ${this.name}')
}

console.log(Jsuser.greetings())
console.log(Jsuser.greetings2())