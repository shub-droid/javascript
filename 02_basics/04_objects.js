/*const tinderuser={  }
tinderuser.id='123abc'
tinderuser.name='Shubham'
tinderuser.isloggedIn=false

const regular_user={
    email:"Some@gmail.com",
    fullname:{
        username:{
            firstname:"Shubham",
            Lastname:"Mallick"
        }
    }
}
console.log(regular_user.fullname.username.firstname)

const obj={
    1:'a',
    2: 'b'
}
const obj2={3:'c',4:'d'}
const obj3={obj,obj2}
console.log(obj3)

const obj4=Object.assign({},obj,obj2)
// {} for empty object wrna kisi object ne daal deta hai
const obj5={...obj,...obj2} 
//Yeah spread operator hai same as array combine krta hai to objects ko


const user=[
    {
        id:1,
        Name:'Shubham'
    },
    {
        id:1,
        Name:'Shubham'
    },
    {
        id:1,
        Name:'Shubham'
    },
]
console.log(user[1].Name)



console.log(Object.keys(tinderuser))
// iska data type array ata hai
console.log(Object.values(tinderuser))

onsole.log(tinderuser.hasOwnProperty("isloggedIn"))
//return true and false based on have that properties or not */

//Destructuring of Objects
console.log("Destructuring")

const course={
    coursename:"js in hindi",
    price:"999",
    courseinstructure:"hitesh"
}
const{courseinstructure:instructor}=course
console.log(instructor)
// isko he kehde hai destructuring mtlab hm chota kr dete 



