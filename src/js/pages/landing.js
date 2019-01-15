const landingListImages = [{
    thumbnail: "../../../dist/compressedimages/finalfantasybackgroundthumbnail.png",
    largeImage: "../../../dist/compressedimages/finalfantasybackground.png"
  },
  {
    thumbnail: "../../../dist/compressedimages/karasangthumbnail.png",
    largeImage: "../../../dist/compressedimages/karasang.png"
  },
  {
    thumbnail: "../../../dist/compressedimages/wodspires.png",
    largeImage: "../../../dist/compressedimages/wodspires.png"
  },
  {
    thumbnail: "../../../dist/compressedimages/firecatthumbnail.png",
    largeImage: "../../../dist/compressedimages/firecat.png"
  },
  {
    thumbnail: "../../../dist/compressedimages/wodnagrandthumbnail.png",
    largeImage: "../../../dist/compressedimages/wodnagrand.png"
  },
  {
    thumbnail: "../../../dist/compressedimages/nagrandthumbnail.png",
    largeImage: "../../../dist/compressedimages/nagrand.png"
  },
  {
    thumbnail: "../../../dist/compressedimages/zangarmarshthumbnail.png",
    largeImage: "../../../dist/compressedimages/zangarmarsh.png"
  },
  {
    thumbnail: "../../../dist/compressedimages/valethumbnail.png",
    largeImage: "../../../dist/compressedimages/vale.png"
  },
  {
    thumbnail: "../../../dist/compressedimages/kunlaithumbnail.png",
    largeImage: "../../../dist/compressedimages/kunlai.png"
  },
  {
    thumbnail: "../../../dist/compressedimages/churningmiststhumbnail.png",
    largeImage: "../../../dist/compressedimages/churningmists.png"
  },
  {
    thumbnail: "../../../dist/compressedimages/dravanianforelandsthumbnail.png",
    largeImage: "../../../dist/compressedimages/dravanianforelands.png"
  },
  {
    thumbnail: "../../../dist/compressedimages/rubyseathumbnail.png",
    largeImage: "../../../dist/compressedimages/rubysea.png"
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