let scrollTimeout;

window.addEventListener("scroll", () => {
  const yellowBar = document.querySelector(".yellow-bar");
  const scrollPosition = window.scrollY;

  if (scrollPosition > 250) {
    scrollTimeout = setTimeout(
      () => yellowBar.classList.add("scrolled-nav"),
      50
    );
  } else {
    scrollTimeout = setTimeout(
      () => yellowBar.classList.remove("scrolled-nav"),
      200
    );
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const getMElements = document.querySelectorAll(".animation-container g");

  const opacityZeroElements = [];
  console.log(opacityZeroElements);

  getMElements.forEach((gElement) => {
    if (gElement.getAttribute("opacity") === "0") {
      opacityZeroElements.push(gElement);
    }
  });

  //tentativo fallimentare
  //   const randomNumber = Math.floor(Math.random() * opacityZeroElements.length);
  //   const randomElement = opacityZeroElements[randomNumber];

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  console.log(shuffleArray);

  const shuffledArray = shuffleArray(opacityZeroElements);
  let currentIndex = 0;

  const showM = () => {
    const currentElement = shuffledArray[currentIndex];

    if (currentElement.getAttribute("opacity") === "0") {
      currentElement.setAttribute("opacity", "1");
    } else {
      currentElement.setAttribute("opacity", "0");
    }

    currentIndex = (currentIndex + 1) % shuffledArray.length;
  };

  setInterval(showM, 200);
});
