const modal = document.getElementById('myModal');
const btn = document.getElementById('myBtn');
const span = document.getElementsByClassName('close')[0];

btn.onclick = function () {
    modal.style.display = 'block';
}

span.onclick = function () {
  modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// second card
const modal2 = document.getElementById('myModal2');
const btn2 = document.getElementById('myBtn2');
const span2 = document.getElementsByClassName('close2')[0];

btn2.onclick = function () {
  modal2.style.display = 'block';
}

span2.onclick = function () {
    modal2.style.display = 'none';
}

window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = 'none';
}
}
    //  third card
const modal3 = document.getElementById('myModal3');
const btn3 = document.getElementById('myBtn3');
const span3 = document.getElementsByClassName('close3')[0];

btn.onclick = function () {
  modal3.style.display = 'block';
}

span.onclick = function () {
  modal3.style.display = 'none';
}

window.onclick = function(event) {
  if (event.target == modal3) {
    modal3.style.display = 'none';
}
}
    //  fourth card
const modal4 = document.getElementById('myModal4');
const btn4 = document.getElementById('myBtn4');
const span4 = document.getElementsByClassName('close4')[0];

btn.onclick = function () {
  modal4.style.display = 'block';
}

span.onclick = function () {
  modal4.style.display = 'none';
}

window.onclick = function(event) {
  if (event.target == modal4) {
    modal4.style.display = 'none';
}
}
