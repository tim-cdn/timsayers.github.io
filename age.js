function onClick(){
	document.body.style.backgroundColor = "white";
	var age = $('#age').val();
	var choice = $('input[name=radioName]:checked', '#myForm').val()
	
	document.getElementById("response").innerHTML = "You are " + age + " years old. You can:";
	if(age < 16){
		document.getElementById("youcan").innerHTML = "You can't drive. You can't Vote. You can't rent a car.";
		if(choice == 1){
			document.getElementById("myCanvas").style.visibility = "visible";
			draw("green");
		}else if(choice == 2){
			document.getElementById("myCanvas").style.visibility = "hidden";
			document.body.style.backgroundColor = "green";
		}else{
		draw("green");
		document.getElementById("myCanvas").style.visibility = "visible";
		}
	}else if (age < 18){
		document.getElementById("youcan").innerHTML = "You can drive, but you can't vote or rent a car.";
		if(choice == 1){
			draw("red");
			document.getElementById("myCanvas").style.visibility = "visible";
		}else if(choice == 2){
			document.body.style.backgroundColor = "red";
		}else{
		draw("red");
		document.getElementById("myCanvas").style.visibility = "visible";
		}
	}else if(age < 25){
		document.getElementById("youcan").innerHTML = "You can't ren't a car. But you can Vote and drive car.";
		if(choice == 1){
			document.getElementById("myCanvas").style.visibility = "visible";
			draw("red");
		}else if(choice == 2){
			document.getElementById("myCanvas").style.visibility = "hidden";
			document.body.style.backgroundColor = "red";
		}else{
		draw("red");
		document.getElementById("myCanvas").style.visibility = "visible";
		}
	}else if(age >= 25){
		document.getElementById("youcan").innerHTML = "You can do anything that is legal.";
		if(choice == 1){
			document.getElementById("myCanvas").style.visibility = "visible";
			draw("red");
		}else if(choice == 2){
			document.getElementById("myCanvas").style.visibility = "hidden";
			document.body.style.backgroundColor = "red";
		}else{
		draw("red");
		document.getElementById("myCanvas").style.visibility = "visible";
		}
	}
}
function draw(colour){
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95,50,40,0,2*Math.PI);
ctx.stroke();
ctx.fillStyle = colour;
ctx.fill()
}