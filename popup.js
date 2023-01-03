const popup = document.getElementById('myPopup');
const btn = document.getElementById('myBtn');
const span = document.getElementsByClassName('close')[0];

const popup1 = document.getElementById('myPopup1');
const btn1 = document.getElementById('myBtn1');
const span1 = document.getElementsByClassName('close1')[0];

const popup2 = document.getElementById('myPopup2');
const btn2 = document.getElementById('myBtn2');
const span2 = document.getElementsByClassName('close2')[0];

const popup3 = document.getElementById('myPopup3');
const btn3 = document.getElementById('myBtn3');
const span3 = document.getElementsByClassName('close3')[0];

const projects = [{
  card: 1,
  name: 'Tonic',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since th',
  image: './img/images/Nature',
  technologies: ['html', 'JavaScript', 'css'],
  source: 'https://github.com/LethaboMot',
  link: 'https://lethabomot.github.io/Port-folio/',
},
{
  card: 2,
  name: 'Multi-Post Stories ',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since th',
  image: 'img/Nature',
  technologies: ['html', 'JavaScript', 'css'],
  source: 'https://github.com/LethaboMot',
  link: 'https://lethabomot.github.io/Port-folio/',
},
{
  card: 3,
  name: 'Facebook',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the',
  image: 'img/Nature',
  technologies: ['html', 'JavaScript', 'css'],
  source: 'https://github.com/LethaboMot',
  link: 'https://lethabomot.github.io/Port-folio/',
},
{
  card: 4,
  name: 'Uber Navigation Stories',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since th',
  image: 'img/Nature',
  technologies: ['html', 'JavaScript', 'css'],
  source: 'https://github.com/LethaboMot',
  link: 'https://lethabomot.github.io/Port-folio/',
},
];

btn.onclick = function () {
  popup.style.display = 'block';
};

span.onclick = function () {
  popup.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target === popup) {
    popup.style.display = 'none';
  }
};

// second card

btn1.onclick = function () {
  popup1.style.display = 'block';
};

span1.onclick = function () {
  popup1.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target === popup1) {
    popup1.style.display = 'none';
  }
};

// third card

btn2.onclick = function () {
  popup2.style.display = 'block';
};

span2.onclick = function () {
  popup2.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target === popup2) {
    popup2.style.display = 'none';
  }
};
//  fourth card

btn3.onclick = function () {
  popup3.style.display = 'block';
};

span3.onclick = function () {
  popup3.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target === popup3) {
    popup3.style.display = 'none';
  }
};

projects.forEach(project => {
  for (let i = 0; i < peojects.length; i++) {
  text += projects[i] + "<br>";
}
});
