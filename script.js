window.onload = () => {
  // Variables
  const previousButton = document.querySelector(".icon-previous");
  const nextButton = document.querySelector(".icon-next");
  const slideOne = document.querySelector(".first-slide");
  const slideTwo = document.querySelector(".second-slide");

  var curSlide = 1;

  // Functions
  function changeSlide() {
    if (curSlide == 1) {
      curSlide = 2;
      slideOne.style.display = "none";
      slideTwo.style.display = "block";
    }
    if (curSlide == 2) {
      curSlide = 1;
      slideTwo.style.display = "none";
      slideOne.style.display = "block";
    }
  }
  // Event Listeners

  [previousButton, nextButton].forEach((button) => {
    button.addEventListener("click", changeSlide);
  });
};
