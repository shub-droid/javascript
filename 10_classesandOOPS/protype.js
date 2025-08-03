let myName='hitesh      '
let myChannel="chai   "



//Goal ke method banana hai jo true length dede us string ka


let myHero=['thor','spiderman']

let heropower={
    thor: "hammer",
    spiderman:"sling",

getSpiderPower:function (){
    console.log(`spider power is ${this.spiderman}`)
}
}


Object.prototype.shubham=function(){
    console.log(`Shubham is omni potent`)
}
// yaha hmne ek property baana de jo sbke paas chali gyi kyuki by the end of the day hai to sb object he
//heropower.shubham()

//myHero.shubham()

Array.prototype.heyMallick=function(){
    console.log("Hello I am shubham created by Array Prototype"
    )
}
myHero.heyMallick()
//heropower.heyMallick()
// is object ke paas yeah function waala prototype nhi aayega kyuki hmn woh power array ko diya tha.


//inheritance

let anotherUserName="chaiAurCode    "

String.prototype.trueLength=function(){
    console.log(`${this}`)
    console.log(`True Lenght is: ${this.trim().length}`)
}
anotherUserName.trueLength()





 