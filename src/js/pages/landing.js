const landingListImages = [{
    thumbnail: "../compressedimages/finalfantasybackgroundthumbnail.png",
    largeImage: "../compressedimages/finalfantasybackground.png"
  },
  {
    thumbnail: "../compressedimages/karasangthumbnail.png",
    largeImage: "../compressedimages/karasang.png"
  },
  {
    thumbnail: "../compressedimages/wodspires.png",
    largeImage: "../compressedimages/wodspires.png"
  },
  {
    thumbnail: "../compressedimages/firecatthumbnail.png",
    largeImage: "../compressedimages/firecat.png"
  },
  {
    thumbnail: "../compressedimages/wodnagrandthumbnail.png",
    largeImage: "../compressedimages/wodnagrand.png"
  },
  {
    thumbnail: "../compressedimages/nagrandthumbnail.png",
    largeImage: "../compressedimages/nagrand.png"
  },
  {
    thumbnail: "../compressedimages/zangarmarshthumbnail.png",
    largeImage: "../compressedimages/zangarmarsh.png"
  },
  {
    thumbnail: "../compressedimages/valethumbnail.png",
    largeImage: "../compressedimages/vale.png"
  },
  {
    thumbnail: "../compressedimages/kunlaithumbnail.png",
    largeImage: "../compressedimages/kunlai.png"
  },
  {
    thumbnail: "../compressedimages/churningmiststhumbnail.png",
    largeImage: "../compressedimages/churningmists.png"
  },
  {
    thumbnail: "../compressedimages/dravanianforelandsthumbnail.png",
    largeImage: "../compressedimages/dravanianforelands.png"
  },
  {
    thumbnail: "../compressedimages/rubyseathumbnail.png",
    largeImage: "../compressedimages/rubysea.png"
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