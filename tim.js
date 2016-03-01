function load(){
}
function square(){
var s = $('#side').val();
var area = s * 2;
document.getElementById("text").innerHTML = "Square Area = " + area + " cm";
}

function rect(){
var w = $('#wr').val();
var h = $('#hr').val();
var area = w * h;
document.getElementById("rect").innerHTML = "Rectangle Area = " + area + " cm";
}

function circle(){
var pi = 3.141592654;
var r = $('#cr').val();
var area = pi * r * r;
document.getElementById("circle").innerHTML = "Circle Area = " + area + " cm";
}

function triangle(){
var w = $('#tb').val();
var h = $('#th').val();
var area = w * h / 2;
document.getElementById("tri").innerHTML = "Triangle Area = " + area + " cm";
}
function home(){
	var myWindow = window.open("area.html", "_self");	
}
function redirect(){
var myWindow = window.open("circle.html", "_self");	
}
function redirect2(){
var myWindow = window.open("rectangle.html", "_self");	
}
function redirect3(){
var myWindow = window.open("square.html", "_self");	
}
function redirect4(){
var myWindow = window.open("triangle.html", "_self");	
}
