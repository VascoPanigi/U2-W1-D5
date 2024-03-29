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
