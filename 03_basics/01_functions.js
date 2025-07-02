/*function addtwoNumbers(number1,number2){
    console.log(number1 + number2)
}

const result =addtwoNumbers(2,3)

console.log("Result",result)*/
// output iska undefined aayega kyuki console krta aur return argument dena same nhi hota



/*function addtwoNumbers(number1,number2)
{
    return number1+number2
}

const result=addtwoNumbers(3,5)
//console.log("Result",result)



function loginusermesage(username){
    if(username===undefined){
        console.log("please enter the username")
        return
    }
    return '${username} just logged in'
}

console.log(loginusermesage('shubham'))
*/

function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(100,400,300))
// that ... is a rest operator multiple values lene me help krta hai
function calculateCartPrice2(val1,val2,...num1){
    return num1
}
console.log(calculateCartPrice2(100,200,800,1000))
//initial 2 to value ban gye baaki sb baan gye tumhare rest operator me



const user={
    name:"Shubham",
    price:200
}
function handleObject(anyobject){
    console.log('username is ${anyobject.username}')
}
handleObject({
    username:'shubham',
    price:399
})

const mynewarray=[200,200,400,600]
function secondValue(getArray){
    console.log(getArray[2])
}
secondValue(mynewarray)