var Div = document.getElementById('gp');
function hideGP(){
    Div.setAttribute('class', 'hidden');
    $(".gp").hide();
    document.getElementById("gp").style.visibility = "hidden";
}
function showGP(){
    Div.setAttribute('class', 'show');
    $(".gp").show();
    document.getElementById("gp").style.visibility = "visible";
}
