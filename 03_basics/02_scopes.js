let global=300 //yeah global scope hai
if(true){
    let a=10
    const b=12
    var c=13
    console.log("INNER :  ",a)
    //iske andaar jo hai woh block scope hai
}
//yeah curly waale brackets ko he kehle hai scopes

console.log(c)
// yaha 13 nhi print hona chahiye the kyuki woh to scope ke andaar hai aur calling bahar hai issiliye hm var use nhi krte



/*browser se agaar scope check krte hai woh aalag hai aur yaha node wala scope alag hai */


function one(){
    const username="hitesh"

    function two(){
        const website='youtube'
        console.log(username)
    }
    console.log(website)
    two()
}
one()

//andaar wala function bahar waale variable ko use kr skta hai paar bahar waaala nhi kr skta andaar wale variable ko



//+++++++++ Interesting +++++++++
addone(5)
function addone(num){
    return num+1
}

addone(5)

addTwo(5) //yeah run nhi hoga kyuki yeah neeche define hua hai or using upaar ho rha 
const addTwo=function(num){
    return num+2
}
