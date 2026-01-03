const clock=document.getElementById("clock")
const date=document.getElementById("date")

setInterval(function (){
    let date=new Date();
    clock.innerHTML=date.toLocaleTimeString();
},1000)
 let time=new Date();
 date.innerHTML=time.toLocaleDateString();