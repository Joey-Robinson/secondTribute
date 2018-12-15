// window.onscroll = function () {
//   scrollFunction()
// };

// export function scrollFunction() {
//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     document.getElementById("header").style.fontSize = "30px";
//   } else {
//     document.getElementById("header").style.fontSize = "90px";
//   }
// }

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