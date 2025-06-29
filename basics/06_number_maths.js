 const score=400
 console.log(score)

 const balance=new Number(100)
 console.log(balance)

 console.log(balance.toString().length)
 console.log(balance.toFixed(1))

 const othernumber=123.8966

 console.log(othernumber.toPrecision(3)) //check output and play with inputs

 const hundreds=1000000
 console.log(hundreds.toLocaleString()) //us standandard commas
 console.log(hundreds.toLocaleString('en-IN'))  // for india style commas in number

 // ************MATHS*************
 console.log("Here Starts The MAths section")

 console.log(Math)
 console.log(Math.abs(-4)) //negative into postiive 

 console.log(Math.round(4.6))

 console.log(Math.ceil(4.2))
 console.log(Math.floor(4.2))
 console.log(Math.min(1,2,4,8,0))

 console.log(Math.random()) //alawys between 0 and 1 deciman

 console.log(Math.floor(Math.random()*10) +1) //always above one 

 const min=10
 const max=10

 console.log(Math.floor(Math.random() *(max-min+1)+min)) //for a range and conaining a min number 
