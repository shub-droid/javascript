const mynum=[1,2,3]

/*const myTotal=mynum.reduce( function(acc,curr){
    console.log(`acc:${acc}and current :${curr}`)
    return acc+curr
},0)*/


const myTotal=mynum.reduce( (acc,curr)=>acc+curr,0)
console.log(myTotal)


const shoppingCart=[
    {
        itemname:'js course',
        price:999
    },
    {
        itemname:'andriod dev',
        price:1000
    },
    {
        itemname:"data science",
        price:555
    },
    {
        itemname:'pythom',
        price:299
    }
]

const price=shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(price)