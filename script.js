window.onload = () => {
  // Variables
  const previousButton = document.querySelector(".icon-previous");
  const nextButton = document.querySelector(".icon-next");
  const slideOne = document.querySelector(".first-slide");
  const slideTwo = document.querySelector(".second-slide");
  var curSlide = 1;
  var elem = slideOne;
  // Functions
  function changeSlide() {
    if (curSlide == 1) {
      curSlide = 2;
      elem = slideOne;
    } else {
      curSlide = 1;
      elem = slideTwo;
    }
    let id = null;
    let left = 0;
    clearInterval(id);
    id = setInterval(slideLeft, 5);
    function slideLeft() {
      if (left == 100) {
        clearInterval(id);
        elem.style.left = -100 + "%";
        elem.style.right = 100 + "%";
      } else {
        left++;
        elem.style.left = left + "%";
      }
    }
  }
  // Event Listeners

  [previousButton, nextButton].forEach((button) => {
    button.addEventListener("click", changeSlide);
  });
};
