function addNumbers(n1, n2) {
  // console.log(n1+n2);
  return n1 + n2;
}

const result = addNumbers(2, 3);
// console.log(result);

function loginUserMessage(username) {
  return `${username} just Loggedin`;
}

// console.log(loginUserMessage("Bhumil"))


function calculateCartPrice(val1,val2,...num1){
    return num1
}

// console.log(calculateCartPrice(20,300,400,6000,4543423,67))

const user={
    username:'Bhumil',
    price:9000,
}

function handleObject(anotherUser){
        console.log(`${anotherUser.username} loggedin and Price is ${anotherUser.price}`)
}
// handleObject(user)
handleObject({
    username:"phoenix",
    price:200
})

const resultArray=[10,20,50,565,678]

function SimpleArray(getArray){
    return getArray[0]
}

// console.log(SimpleArray(resultArray))
console.log(SimpleArray(["Bhumil","Phoenix","Sam"]))
