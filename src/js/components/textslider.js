export const textSlider = () => {
  let current = 0
  const slides = document.getElementsByTagName("p")

  setInterval(() => {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.opacity = 0
    }
    current = (current != slides.length - 1) ? current + 1 : 0
    slides[current].style.opacity = 1
  }, 7500);
}

textSlider()