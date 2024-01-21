const arrayCarousel = [
  'img/la/la1.jpg',
  'img/la/la2.jpg',
  'img/la/la3.jpg',
  'img/la/la5.jpg',
  'img/la/la6.jpg',
  'img/la/la7.jpg',
  'img/la/la8.jpg',
  'img/la/la8.jpg',
  'img/la/la9.jpg'
];

let counter = 0;

function setImage(){
  document.getElementById('carousel-image').src = arrayCarousel[counter];
  counter = (counter + 1) % arrayCarousel.length;
  setNextImage();
  setPreviousImage(); 
}

function setNextImage(){
  counter = (counter + 1) % arrayCarousel.length;
  setImage();
}

function setPreviousImage(){
  counter = (counter - 2 + arrayCarousel.length) % arrayCarousel.length;
  setImage();
}

setInterval(setImage, 10000);