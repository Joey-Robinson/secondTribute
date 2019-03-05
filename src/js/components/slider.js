const sliderImage = document.querySelectorAll('.slide')
const arrowLeft = document.querySelector('.arrow__left')
const arrowRight = document.querySelector('.arrow__right')
let current = 0;

const reset = () => {
  for (let i = 0; i < sliderImage.length; i++) {
    sliderImage[i].style.display = 'none'
  }
}

export const startSlide = () => {
  reset()
  sliderImage[0].style.display = 'block'
}

const slideLeft = () => {
  reset()
  sliderImage[current - 1].style.display = 'block'
  current--
}

const slideRight = () => {
  reset()
  sliderImage[current + 1].style.display = 'block'
  current++
}

arrowRight.addEventListener("click", () => {
  if (current === sliderImage.length - 1) {
    current = -1
  }
  slideRight()
})

arrowLeft.addEventListener("click", () => {
  if (current === 0) {
    current = sliderImage.length
  }
  slideLeft()
})

startSlide()