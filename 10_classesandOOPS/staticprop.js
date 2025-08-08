class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`this is the user ${this.username}`)
    }
    static createId(){
        return Math.random()
    }
}

const shubham =new User("shubham")
console.log(shubham.createId())
// yaha static keyword ke liye shubham createId ko access nhi kr payega