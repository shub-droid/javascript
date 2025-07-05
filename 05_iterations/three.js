//for of


const arr=[1,2,3,4,5]
for (const num of arr) {
    console.log(num)
    
}
const greetings="hello worlds"
for (const greet of greetings) {
    console.log(`each character is ${greet}`)
}


//Maps
//saare value unique he hote hai

const map=new Map()
map.set('IN',"India")
map.set("US","united states of india")
map.set("Fr","France")

console.log(map)

for (const [key,value] of map) {
    console.log(key,":-",value)
    
}


const myobject={
    "game1":'NFS',
    "game2":'Spiderman'
}
for (const [key,value] of myobject) {
    console.log(key,value)
}
//map is format se iteratable nhi hai
for (const key in map) {
    console.log(key)
}//map ko hm iterate nhi kr skte 