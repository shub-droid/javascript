const marvel_heroes=['thor','ironman','spiderman']
const DC_heroes=['Batman','superman','flash']
//marvel_heroes.push(DC_heroes) //yeah existing array he return krta new array nhi
//console.log(marvel_heroes)
//yeah pura array ko as a element le jaata
//const concat=marvel_heroes.concat(DC_heroes)
//console.log(concat) 
// concat function array ko add nhi krta as a whole uske value ko add krta hai and returns a new array


//const all_new_heros=[...marvel_heroes,...DC_heroes]
//console.log(all_new_heros)

//const another_array=[1,2,[3,4],[5,6]]
//const real_another_array=another_array.flat(Infinity)
//console.log(real_another_array)
//concat format me le aata hai saare nested arrays ko


console.log(Array.isArray("Shubham"))
console.log(Array.from("Shubham"))
//array baana dega isko
console.log(Array.from({
    name:"Shubham"
}))
// yeah empty array return karega kyuki isko command nhi mila hai ke kisko array me push krna hai key or value ko
let Score1=100
let Score2=200
let Score3=300

console.log(Array.of(Score1,Score2,Score3))
// yeah multiple inputs se array form kr skte hai,array se bhi array form kr skta hai
