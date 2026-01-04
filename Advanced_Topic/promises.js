const promiseOne=new Promise(function(reslove,reject){
    setTimeout(function(){
        console.log("Asyncccc!!")
        reslove()
    },1000)

})

promiseOne.then(function(){
    console.log("Promise Task")
})

new Promise(function (reslove, reject) {
  setTimeout(function () {
    console.log("Aysnc2222");
    reslove();
  }, 1000);
}).then(function () {
  console.log("Promise Task2222");
});

const PromiseTwo = new Promise(function (reslove, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      reslove({ username: "Bhumil", email: "Bhumil@gmail.com" });
    } else {
      reject("ERROR:Someting went to gone Wrong");
    }
  }, 1000);
});

PromiseTwo.then(function (user) {
  console.log(user);
  return user.username;
})
  .then(function (username) {
    console.log("username is :  ", username);
  })
  .catch(function (error) {
    console.log("Error");
  })
  .finally(() => {
    console.log("The Promise Either Reslove Or Reject");
  });

const PromiseThree = new Promise(function (reslove, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      reslove({ username: "PHOENX", email: "PHOENIX@gmail.com" });
    } else {
      reject("ERROR:PHOENIX went to gone Wrong");
    }
  }, 1000);
});

async function consumePromiseThree() {
  try {
    const response = await PromiseThree;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseThree();

// async function gellAllUser() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     // console.log(response)
    
//     // const data =  response.json();    convert to json required to time so put await 
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("E: ", error);
//   }
// }

// gellAllUser();


fetch("https://api.github.com/users/BhumilNariya")
.then((response)=>{
    return response.json()
})
.then((username)=>{
    console.log("username :- ",username.id)
    console.log("Bio :- ",username.bio)
    console.log("Blog :- ",username.blog)
    console.log("Location :- ",username.location)
})
.catch(function(error){
    console.log(error)
})
