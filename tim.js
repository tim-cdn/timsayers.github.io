function load(){
	 document.getElementById("text").innerHTML = "Hello! Click the button to generate token!";
}

function onClick(){
	write(getRandomInt(1000, 9999));
for (i = 0; i < 10; i++) {  
   
}
}

function write(data){
      document.getElementById("text").innerHTML = data;	 
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

