class user{
    constructor(username,password,email){
        this.username=username;
        this.email=email;
        this.password=password
    }
    encryptPassword(){
        return`${this.password}abc`
    }
    changeUsername(){
        return`${this.username.toUpperCase()}`
    }
}

const chai=new user("chai",'shubham','123')
console.log(chai)
console.log(chai.encryptPassword())
console.log(chai.changeUsername())

//behind the scene 
//will work the same

function user(username,password,email){
    this.username=username;
    this.email=email;
    this.password=password
}
user.prototype.encryptPassword=function(){
     return`${this.password}abc`
}
user.prototype.changeUsername=function(){
      return`${this.username.toUpperCase()}`
}