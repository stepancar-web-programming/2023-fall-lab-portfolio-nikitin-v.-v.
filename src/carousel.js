const arrayCarousel = [
  "img/la/la1.jpg",
  "img/la/la2.jpg",
  "img/la/la3.jpg",
  "img/la/la5.jpg",
  "img/la/la6.jpg",
  "img/la/la7.jpg",
  "img/la/la8.jpg",
  "img/la/la8.jpg",
  "img/la/la9.jpg",
];

counter = 0;

const setImage = () => {
  document.getElementById("carousel-image").src = arrayCarousel[counter];
  counter = (counter + 1) % arrayCarousel.length;
};

const setNextImage = () => {
  counter = (counter + 1) % arrayCarousel.length;
  setImage();
};

const setPreviousImage = () => {
  counter = (counter - 2 + arrayCarousel.length) % arrayCarousel.length;
  setImage();
};

setInterval(setImage, 10000);
