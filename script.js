window.onload = function (){
 
 var ninjas = ["shawn", "cry", "yoshi", "ryu", "ryu", "yoshi"];

 var refinedNinjas = new Set(ninjas);
 console.log(refinedNinjas);
 ninjas = [...refinedNinjas];
 console.log(ninjas)
}