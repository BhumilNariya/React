//generate hex code
const randomColor=function(){
    const hex="1234567890ABCDEF";
    let color="#"

    for (let i = 0; i < 6; i++) {
        color +=hex[Math.floor(Math.random()*16)]
        
    }
    return color
}



let intervalId;
const StartChangingColor=function (){
    
    intervalId=setInterval(changeColor,1000)
    
    function changeColor(){
        document.body.style.backgroundColor=randomColor();
    }
}
const StopChangingColor=function (){
    clearInterval(intervalId)
}



document.querySelector("#start").addEventListener("click",StartChangingColor)
document.querySelector("#stop").addEventListener("click",StopChangingColor)

const insert=document.querySelector("#insert")

window.addEventListener("keydown",(e)=>{
    insert.innerHTML=`
        <div>
         <table>
  <tr>
    <th>key</th>
    <th>keycode</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
  
</table> 
        </div>
    `
})