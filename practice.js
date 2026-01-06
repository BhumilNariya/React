// const PromiseOne=new Promise(function (){
//     setTimeout(function (){
//         console.log("hello")
//     },1000)
// })

const { get } = require("http");
const { emitKeypressEvents } = require("readline");

// new Promise(function (reslove,reject){
//     setTimeout(function (){
//         console.log("bhumil")
//         reslove()
//     },1000)
// })
// .then(function (){
//     console.log("nariya")
// })

// const PromiseTwo=new Promise(function (resolve,reject){

//     let error=true;
//     if(!error){
//         resolve({username:"Bhumil",isLoggedIn:false})
//     }else{
//         reject("Error: Something went go  wrong!!")
//     }
    
// })
// .then(function (user){
//     console.log(user.username)
//     return user.username
// })
// .then(function(username){
//     console.log("username is :",username)
//     console.log("this time Problem is resloved")
// })
// .catch(function(e){
//     console.log("error")
//     console.log("this time problem is rejected")
// })
// .finally(function(){
//     console.log("the Promise either resloved and rejeced")
// })

const PromiseThree = new Promise(function (reslove, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      reslove({ username: "PHOENX", email: "PHOENIX@gmail.com" });
    } else {
      reject("ERROR:PHOENIX went to gone Wrong");
    }
  }, 1000);
});

async function consumePromiseThree(){
    try{
       const response=await PromiseThree
       console.log(response)
    }catch(error){
        console.log("error")
    }

}

// consumePromiseThree()

async function getAllUser(){
    try{
        const response= await fetch("https://jsonplaceholder.typicode.com/users")
        // console.log(response)
        
        const data= await response.json();
        console.log(data.server)
        

    }catch(error){
        console.log('Error: somethings went to  go wrong')
    }
}

// getAllUser()


fetch("https://api.github.com/users/BhumilNariya")
.then(function(response){
    let error=true;
   if(!error){
       return response.json()
   }
})
.then(function(response){
    console.log(response.bio)
    console.log(response.id)
})
.catch(function(error){
    console.log("Error:-",error)
})
.finally(function(){
    console.log("finally Block")
})


