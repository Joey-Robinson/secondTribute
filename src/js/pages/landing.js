const landingListImages = [{
  thumbnail: "../images/finalfantasybackgroundthumbnail.webp",
  largeImage: "../images/finalfantasybackground.webp"
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
        <img class="lazyload" data-src="${image.thumbnail}">
      </picture>
      </a>
      </li>`;
  });
  landingList.innerHTML = newLandingList.join(" ");
};

landing();