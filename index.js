 function hide(){
        document.getElementById('gp').hidden = true;
    }
    function show(){
        document.getElementById('gp').hidden = false;
    }
 function toggle_visibility(id) 
    {
        var e = document.getElementById(id);
        if ( e.style.display == 'block' )
            e.style.display = 'none';
        else
            e.style.display = 'block';
    }
