//generate hex code

const randomColor=function(){
    const hex="0987654321ABCDEF";
    let color ="#";
    for (let i = 0; i <6; i++) {
     color +=hex[Math.floor(Math.random()*16)]
    }
    return color;
}
let intervalId
const startingChangingColor=function (){

        if(!intervalId){
            intervalId= setInterval(changeColor,1000)
        }

    function changeColor(){
        document.body.style.backgroundColor=randomColor();
    }

}
const stopChangingColor=function (){
    clearInterval(intervalId)

}
document.querySelector("#start").addEventListener("click",startingChangingColor)
document.querySelector("#stop").addEventListener("click",stopChangingColor)