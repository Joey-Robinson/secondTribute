const landingListImages = [{
    thumbnail: "../images/finalfantasybackground.webp",
    largeImage: "../images/finalfantasybackground.webp"
  },
  {
    thumbnail: "../images/karasangthumbnail.webp",
    largeImage: "../images/karasang.webp"
  },
  {
    thumbnail: "../images/wodspiresthumbnail.webp",
    largeImage: "../images/wodspires.webp"
  },
  {
    thumbnail: "../images/firecatthumbnail.webp",
    largeImage: "../images/firecat.webp"
  },
  {
    thumbnail: "../images/wodnagrandthumbnail.webp",
    largeImage: "../images/wodnagrand.webp"
  },
  {
    thumbnail: "../images/nagrandthumbnail.webp",
    largeImage: "../images/nagrand.webp"
  },
  {
    thumbnail: "../images/zangarmarshthumbnail.webp",
    largeImage: "../images/zangarmarsh.webp"
  },
  {
    thumbnail: "../images/valethumbnail.webp",
    largeImage: "../images/vale.webp"
  },
  {
    thumbnail: "../images/kunlaithumbnail.webp",
    largeImage: "../images/kunlai.webp"
  },
  {
    thumbnail: "../images/churningmiststhumbnail.webp",
    largeImage: "../images/churningmists.webp"
  },
  {
    thumbnail: "../images/dravanianforelandsthumbnail.webp",
    largeImage: "../images/dravanianforelands.webp"
  },
  {
    thumbnail: "../images/rubyseathumbnail.webp",
    largeImage: "../images/rubysea.webp"
  }
];


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
        <img
          class="lazyload"
          data-src=${image.thumbnail} 
          alt="Landing Area Image ${index +1}"
        >
      </a>
      </li>`;
  });
  landingList.innerHTML = newLandingList.join(" ");
};

landing();