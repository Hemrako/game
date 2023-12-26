var t=0;
var c=0;
var d;
var dets;
let music= new Audio("bg.mp3");

function timereduc(){
var close=setInterval(
     
    function(){
        if(t>=0){
    
    document.querySelector(".n").innerHTML=t
    t=t-1;
}else{
        clearInterval(close)
        
        if(d=="3s"){
            d=3;

        }else if (d=="5s"){
        
            d=5;

        }else if (d=="10s"){
        
            d=10;

        }





        var r=Math.floor(c/d);
              dets.target.style.color="black";
        document.querySelector("h2").textContent=`You click ${r} per second.`
        t=0;
    }
}
   ,1000)


}

document.querySelector(".click").addEventListener("click",function(){
if(t>=1){
c=c+1;
document.querySelector(".ni").innerHTML=c}
})

document.querySelector(".nav").addEventListener("click",function(dets){
d=dets.target.textContent;
    
if(t==0){
      dets.target.style.color="blue";
    c=0
if(d=="3s"){
    music.play();
    t=3;
    document.querySelector(".ni").innerHTML=c
    timereduc();
}else if (d=="5s"){
    music.play();
    t=5;
    document.querySelector(".ni").innerHTML=c
    timereduc(); 
}else if (d=="10s"){
    music.play();
    t=10;
    document.querySelector(".ni").innerHTML=c
    timereduc(); 
}
    
}
}
)



