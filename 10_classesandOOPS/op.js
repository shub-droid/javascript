/*const user={
    username:"shubham",
    logIncount:8,
    SignedIn:true,
    getUserDetails:function(){
        //console.log("Got User Details")
        console.log(`username:${this.username}`)
        //yaha this current context ko leta hai 
    }
}

console.log(user.SignedIn);
console.log(user.getUserDetails());
*/


// Constructor Function

//const promiseOne=new Promise();
//const Date=new Date();
// her new keyword is used to make constructor function

function User(Username,loginCount,isLoggedIn){
    this.Username=Username,
    this.loginCount=loginCount,
    this.isLoggedIn=isLoggedIn
    return this
}

//const userOne=User('hitesh',12,true)
//console.log(userOne)

//const userTwo=User('hitesh',13,false)
//console.log(userTwo)

//jaise he userTwo defined hua usne userOne ko bhi override kr diya issiliye we use new keyword
const userOne= new User("Shubham",12,false)
console.log(userOne)

const userTwo=new User("Mallick",54,false)
console.log(userTwo)
// new keyword made us to do this aab dono ka aalag allag aayega
console.log(userOne.constructor)