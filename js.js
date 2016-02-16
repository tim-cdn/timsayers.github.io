function calculate(){
var w = $('#wInput').val();
var h = $('#hInput').val();
var area = w * h;
document.getElementById("text").innerHTML = "Area = " + area;
}
