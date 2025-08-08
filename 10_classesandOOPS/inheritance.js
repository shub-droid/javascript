class User{
    constructor(username){
        this.username=username;

    }
    logMe(){
        console.log(`username is ${this.username}`)
    }
}
class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email=email;
        this.password=password
    }
    addCourse(){
        console.log(`this is the course created by ${this.username}`)
    }
}

const chai= new Teacher('chai','chai@gamil.com','1234')
chai.logMe()
chai.addCourse()


const masalaChai=new User('masalachai')
masalaChai.logMe()

console.log(chai instanceof User)