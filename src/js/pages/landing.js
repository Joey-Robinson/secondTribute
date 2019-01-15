const landingListImages = [{
  thumbnail: "../images/finalfantasybackgroundthumbnail.jpg",
  largeImage: "../images/finalfantasybackground.jpg"
}];


// Had to add relative pathing from bundle.js
export const landing = () => {
  landingListImages.sort(() => 0.25 - Math.random());
  const landingList = document.getElementById("landing-list");
  const newLandingList = landingListImages.map((image, index) => {
    return `<li>
      <a 
        href=${image.largeImage}
        target="_blank"
        rel="noopener no referrer"
      >
      <picture>
        <source type="image/webp" srcset="${image.thumbnail}">
        <source type="image/jpeg" srcset="${image.thumbnail}">
        <img class="lazyload" data-src="${image.thumbnail}">
      </picture>
      </a>
      </li>`;
  });
  landingList.innerHTML = newLandingList.join(" ");
};

landing();