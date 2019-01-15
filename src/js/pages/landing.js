const landingListImages = [{
    thumbnail: "../../../dist/compressedimages/finalfantasybackgroundthumbnail.png",
    largeImage: "../../../dist/compressedimages/finalfantasybackground.png"
  },
  {
    thumbnail: "../compressedimages/karasangthumbnail.png",
    largeImage: "../compressedimages/karasang.png"
  },
  {
    thumbnail: "../compressedimages/wodspiresthumbnail.webp",
    largeImage: "../compressedimages/wodspires.webp"
  },
  {
    thumbnail: "../compressedimages/firecatthumbnail.webp",
    largeImage: "../compressedimages/firecat.webp"
  },
  {
    thumbnail: "../compressedimages/wodnagrandthumbnail.webp",
    largeImage: "../compressedimages/wodnagrand.webp"
  },
  {
    thumbnail: "../compressedimages/nagrandthumbnail.webp",
    largeImage: "../compressedimages/nagrand.webp"
  },
  {
    thumbnail: "../compressedimages/zangarmarshthumbnail.webp",
    largeImage: "../compressedimages/zangarmarsh.webp"
  },
  {
    thumbnail: "../compressedimages/valethumbnail.webp",
    largeImage: "../compressedimages/vale.webp"
  },
  {
    thumbnail: "../compressedimages/kunlaithumbnail.webp",
    largeImage: "../compressedimages/kunlai.webp"
  },
  {
    thumbnail: "../compressedimages/churningmiststhumbnail.webp",
    largeImage: "../compressedimages/churningmists.webp"
  },
  {
    thumbnail: "../compressedimages/dravanianforelandsthumbnail.webp",
    largeImage: "../compressedimages/dravanianforelands.webp"
  },
  {
    thumbnail: "../compressedimages/rubyseathumbnail.webp",
    largeImage: "../compressedimages/rubysea.webp"
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