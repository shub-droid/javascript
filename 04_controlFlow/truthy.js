/*const username="h@hitesh.ai"
//const userName=""
if(username){
    console.log("got user name")
} else{
    console.log("Dont have the email")
}*/


//falsy values
/* false,0,-0,Bigint 0n,"",null,undefined,NaN

//truthy value
"0","false"," "(yaha space hai),[],{},function(){}
*/

const emptyObj={}

if(Object.keys(emptyObj).length===0){
    console.log("object is empty")
}

//Nullish Coalescing Operator(??):null undefined

let val1;
//val1=5 ?? 10
//val1=null ?? 10
//val1=undefined ?? 15
val1=null ?? 10 ??20 //pehla ayega baas
console.log(val1)

//Terniary operator

//condition ? true:false

const iceTeaPrice=100

iceTeaPrice<=80 ?console.log("Less than 80"):console.log("it is greater thn 80")
