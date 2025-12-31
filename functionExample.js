// const user={
//     username:"Bhumilnariya",
//     price:999,
//     isLoggeIn:true,
// }

const { get } = require("http")

// function result(anotherUser){
//     return `username is ${anotherUser.username} and that price is ${anotherUser.price}`
// }

// console.log(result({
//     username:"Phoenix",
//     price:567,
// }))

const array=[10,45,57,87]

function resultArray(getArray){
    return getArray[0]
}

// console.log(resultArray(array))
 console.log(resultArray([45435,5756,32432,56]))


function addTwoNumbers(val1,val2,...num1){
        return num1
}

console.log(addTwoNumbers(10,22,56,232))

console.log(addOne(5))

function addOne(num){
    return num +1
}






const addTwo=function (num){
    return num +1
}
console.log(addTwo(2))
