window.onscroll = (() => {
  resizeHeaderOnScroll();
});

export const resizeHeaderOnScroll = () => {
  const distanceY = window.pageYOffset || document.documentElement.scrollTop,
    shrinkOn = 200,
    headerEl = document.getElementById('header');

  if (distanceY > shrinkOn) {
    headerEl.classList.add("smaller");
  } else {
    headerEl.classList.remove("smaller");
  }
}

export const closeHeader = () => {
  const close = document.getElementById('close');
  close.addEventListener("click", () => {
    const header = document.getElementById('wrapper');
    if (header.style.display === 'block') {
      header.style.display = 'none';
    } else {
      header.style.display = 'block';
    }
  })
}

closeHeader();

export const changeIcon = () => {
  const close = document.getElementById("close");
  close.addEventListener("click", () => {
    if (close.innerHTML === "x") {
      close.innerHTML = "+";
    } else {
      close.innerHTML = "x";
    };
  });
};

changeIcon();