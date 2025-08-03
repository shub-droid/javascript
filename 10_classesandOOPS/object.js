function multiply5(num){
    return num*5
}

multiply5.power=2

console.log(multiply5)
console.log(multiply5.power) //function bhi by the end of the day ek object he hai
console.log(multiply5.prototype)


//infact javascript me sb object hai array,string,function sb

function createUser(username,score){
    this.username=username;
    this.score=score;
}
createUser.prototype.increment=function(){
    this.score++;
    //this ka mtlab jis yani jisne bhi bulaya uska kaam krdo
    //yaha jaise chai,aur tea hai
}
createUser.prototype.printMe=function(){
    console.log(`score is ${this.score}`)
}


const chai=new createUser("chai",25)
const tea=new createUser("tea",250)

//aagr bina new keyword ke chalyoge to code run nhi karega.
//new keyword he help krta hai pehannane me kya context wagera hai

chai.printMe()

