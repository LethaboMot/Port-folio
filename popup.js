var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// second card
var modal2 = document.getElementById("myModal2");
var btn = document.getElementById("myBtn2");
var span = document.getElementsByClassName("close2")[0];

btn.onclick = function() {
    modal2.style.display = "block";
}

span.onclick = function() {
    modal2.style.display = "none";
}

window.onclick = function(event) {
        if (event.target == modal2) {
            modal2.style.display = "none";
        }
    }
    //  third card
var modal3 = document.getElementById("myModal3");
var btn = document.getElementById("myBtn3");
var span = document.getElementsByClassName("close3")[0];

btn.onclick = function() {
    modal3.style.display = "block";
}


span.onclick = function() {
    modal3.style.display = "none";
}

window.onclick = function(event) {
        if (event.target == modal3) {
            modal3.style.display = "none";
        }
    }
    //  fourth card
var modal4 = document.getElementById("myModal4");
var btn = document.getElementById("myBtn4");
var span = document.getElementsByClassName("close4")[0];

btn.onclick = function() {
    modal4.style.display = 'block';
};

span.onclick = function ()
{
    modal4.style.display = 'none';
};

window.onclick = function(event) {
    if (event.target === modal4) {
    modal4.style.display = "none";
    };
}
