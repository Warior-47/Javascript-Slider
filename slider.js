const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image");
const bottom = document.querySelector(".bottom");

let slideNumbers = 1;
const length = images.length;

for (let i = 0; i < length; i++) {
  const div = document.createElement("div");
  div.className = "button";
  bottom.appendChild(div);
}

const buttons = document.querySelectorAll(".button");
buttons[0].style.backgroundColor = "white";

const resetBg = () => {
  buttons.forEach((button) => {
    button.style.backgroundColor = "transparent";
  });
};

buttons.forEach((button, i) => {
  button.addEventListener("click", () => {
    resetBg();
    slider.style.transform = `translateX(-${i * 800}px)`;
    slideNumbers = i + 1;
    button.style.backgroundColor = "white";
  });
});

const nextSlide = () => {
  slider.style.transform = `translateX(-${slideNumbers * 800}px)`;
  slideNumbers++;
};
const prevSlide = () => {
  slider.style.transform = `translateX(-${(slideNumbers - 2) * 800}px)`;
  slideNumbers--;
};
const getFirstSlide = () => {
  slider.style.transform = `translateX(0px)`;
  slideNumbers = 1;
};
const getLastSlide = () => {
  slider.style.transform = `translateX(-${(length - 1) * 800}px)`;
  slideNumbers = length;
};

const changeColor = ()=>{
  resetBg()
  buttons[slideNumbers-1].style.backgroundColor = "white";
}

right.addEventListener("click", () => {
  slideNumbers < length ? nextSlide() : getFirstSlide();
  changeColor()
});

left.addEventListener("click", () => {
  slideNumbers > 1 ? prevSlide() : getLastSlide();
  changeColor()
});

