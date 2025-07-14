const promiseOne=new Promise(function(resolve,reject){
    //Do an Asynch task
    //DB calls,cypto,network
    setTimeout(function(){
        console.log('Async task is complete')
        resolve()
        //yaha resolve connect hua 
    },1000)
})

promiseOne.then(function(){
    console.log('promise consumed')
})
// aab yaha hoga pehle promiseOne execute usne baad yeah waala function
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async Task 2')
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolve")
})

const promiseThree= new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({
            username:"Shubham",
            Tittle:"Mallick"
        })
    },1000)
})

promiseThree.then(function(user){
    console.log(user)
})
const promisefour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({
                username:"Shubham",
                password:"6200409065"
            })
        }
        else{
            reject('Error: Something went wrong')
        }
    },1000)
})
promisefour.then((user)=>{
    console.log(user)
    return user.username
}).then((username)=>{
    console.log(username)
}).catch(function(error){
      console.log(error)
}).finally(()=>{
    console.log("The Promise is either reject or resolve")
})// yeah finally block hamesa run krta hai
//console.log(user) yeah krne se error throw kr rha tha
