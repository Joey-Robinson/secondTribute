const landingListImages = [{
    thumbnail: "../images/finalfantasybackgroundthumbnail.png",
    largeImage: "../images/finalfantasybackground.png"
  },
  {
    thumbnail: "../images/karasangthumbnail.png",
    largeImage: "../images/karasang.png"
  },
  {
    thumbnail: "../images/wodspires.png",
    largeImage: "../images/wodspires.png"
  },
  {
    thumbnail: "../images/firecatthumbnail.png",
    largeImage: "../images/firecat.png"
  },
  {
    thumbnail: "../images/wodnagrandthumbnail.png",
    largeImage: "../images/wodnagrand.png"
  },
  {
    thumbnail: "../images/nagrandthumbnail.png",
    largeImage: "../images/nagrand.png"
  },
  {
    thumbnail: "../images/zangarmarshthumbnail.png",
    largeImage: "../images/zangarmarsh.png"
  },
  {
    thumbnail: "../images/valethumbnail.png",
    largeImage: "../images/vale.png"
  },
  {
    thumbnail: "../images/kunlaithumbnail.png",
    largeImage: "../images/kunlai.png"
  },
  {
    thumbnail: "../images/churningmiststhumbnail.png",
    largeImage: "../images/churningmists.png"
  },
  {
    thumbnail: "../images/dravanianforelandsthumbnail.png",
    largeImage: "../images/dravanianforelands.png"
  },
  {
    thumbnail: "../images/rubyseathumbnail.png",
    largeImage: "../images/rubysea.png"
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
          data-src="${image.thumbnail}"
          alt="Landing Area Image ${index +1}"
        >
      </a>
      </li>`;
  });
  landingList.innerHTML = newLandingList.join(" ");
};

landing();