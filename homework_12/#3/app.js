let values = [];

function time () {
    values = [];
    let myTime = new Date();
     
      console.log(values);
      document.getElementById("hours").innerHTML= myTime.getHours().toString().length <2 ? '0' + myTime.getHours()+':' : myTime.getHours()+':';
      document.getElementById("minutes").innerHTML=myTime.getMinutes().toString().length <2 ? '0' + myTime.getMinutes()+':' : myTime.getMinutes()+':';
      document.getElementById("seconds").innerHTML=myTime.getSeconds().toString().length <2 ? '0' + myTime.getSeconds() : myTime.getSeconds();
}
setInterval(time, 1000);

document.getElementById("hours").style.color = "red";
document.getElementById("minutes").style.color = "green";
document.getElementById("seconds").style.color = "blue";