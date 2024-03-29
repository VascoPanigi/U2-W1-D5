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

  const randomNumber = Math.floor(Math.random() * opacityZeroElements.length);
  const randomElement = opacityZeroElements[randomNumber];

  const showM = () => {
    if (randomElement.getAttribute("opacity") === "0") {
      randomElement.setAttribute("opacity", "1");
    } else {
      randomElement.setAttribute("opacity", "0");
    }
  };

  setInterval(showM, 200);
});
