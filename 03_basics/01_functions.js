/*function addtwoNumbers(number1,number2){
    console.log(number1 + number2)
}

const result =addtwoNumbers(2,3)

console.log("Result",result)*/
// output iska undefined aayega kyuki console krta aur return argument dena same nhi hota



function addtwoNumbers(number1,number2)
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
