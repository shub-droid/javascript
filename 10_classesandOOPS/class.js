function setUsername(username){
    this.username=username;
    console.log("called")
}

function createUser(username,email,password){
    setUsername.call(this,username)

    this.email=email,
    this.password=password
}
//without call method use krne run karoge to yaha dekhna username print nhi hoga
const chai=new createUser('chai','chai@fb','123')
console.log(chai)
//"this" jaise use karge tb woh output object me bhi show karega
//kyuki baas call use krne se object run to hoga but context change nhi hoga
//"this" use krne se he context jayega 