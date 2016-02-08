function load(){
	document.getElementById("text").innerHTML = "5";
document.body.style.backgroundColor = "red";	
	window.setTimeout(time,1000);
}
function time(){
	document.getElementById("text").innerHTML = "4";	
document.body.style.backgroundColor = "blue";	
	window.setTimeout(time2,1000);
}
function time2(){
	document.getElementById("text").innerHTML = "3";	
document.body.style.backgroundColor = "orange";	
	window.setTimeout(time3,1000);
}
function time3(){
	document.getElementById("text").innerHTML = "2";	
document.body.style.backgroundColor = "grey";	
	window.setTimeout(time4,1000);
}
function time4(){
	document.getElementById("text").innerHTML = "1";
document.body.style.backgroundColor = "green";	
	window.setTimeout(redirect,1000);
}
function redirect(){
var myWindow = window.open("redirect.html", "_self");	
}



