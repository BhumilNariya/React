const user={
    username:"Bhumil",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username},welcome to you!!`)
    }

}

console.log(user.welcomeMessage())
user.username="sam"
console.log(user.welcomeMessage())
console.log(this)


function chai(){
    let username="Bhumil"
    console.log(this.username)
}
chai()
const code=()=>{
    let username="Bhumil"
    console.log(this.username)
}

console.log(code())
/// ===============================******************************************=======================



const addOne=(num1,num2)=>{
    return num1+num2
}

const addTwo=(num1,num2)=> num1+num2
const addThree=(num1,num2)=> (num1+num2)

const addFour=(num1,num2)=>({username:"bhumil",price:999})

console.log(addOne(1,3))
console.log(addTwo(2,3))
console.log(addThree(4,5))
console.log(addFour())