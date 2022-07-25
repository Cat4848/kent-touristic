/*
window.onload = function(){
    var counter = document.getElementById("counter");
    counter.innerHTML = function(){
        var timer = new Date() + 600000;
    }
}
*/
var test = new Date();
var startTime = test.setMinutes(test.getMinutes() + 10, 0);

var remainingTime = new Date();
remainingTime = startTime - new Date(); 


setInterval(function(){

document.getElementById("minutes").innerHTML = remainingTime.getMinutes();
document.getElementById("seconds").innerHTML = test.getSeconds();
 
}, 1000);




console.log(remainingTime);