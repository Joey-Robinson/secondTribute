const landingListImages = [{
    thumbnail: "../../../dist/images/finalfantasybackground.jpg",
    largeImage: "../../../dist/images/finalfantasybackground.jpg"
  },
  {
    thumbnail: "../../../dist/images/karasangthumbnail.jpg",
    largeImage: "../../../dist/images/karasang.jpg"
  },
  {
    thumbnail: "../../../dist/images/wodspiresthumbnail.jpg",
    largeImage: "../../../dist/images/wodspires.jpg"
  },
  {
    thumbnail: "../../../dist/images/firecatthumbnail.jpg",
    largeImage: "../../../dist/images/firecat.jpg"
  },
  {
    thumbnail: "../../../dist/images/wodnagrandthumbnail.jpg",
    largeImage: "../../../dist/images/wodnagrand.jpg"
  },
  {
    thumbnail: "../../../dist/images/nagrandthumbnail.jpg",
    largeImage: "../../../dist/images/nagrand.jpg"
  },
  {
    thumbnail: "../../../dist/images/zangarmarshthumbnail.jpg",
    largeImage: "../../../dist/images/zangarmarsh.jpg"
  },
  {
    thumbnail: "../../../dist/images/valethumbnail.jpg",
    largeImage: "../../../dist/images/vale.jpg"
  },
  {
    thumbnail: "../../../dist/images/kunlaithumbnail.jpg",
    largeImage: "../../../dist/images/kunlai.jpg"
  },
  {
    thumbnail: "../../../dist/images/churningmiststhumbnail.jpg",
    largeImage: "../../../dist/images/churningmists.jpg"
  },
  {
    thumbnail: "../../../dist/images/dravanianforelandsthumbnail.jpg",
    largeImage: "../../../dist/images/dravanianforelands.jpg"
  },
  {
    thumbnail: "../../../dist/images/rubyseathumbnail.jpg",
    largeImage: "../../../dist/images/rubysea.jpg"
  },
  {
    thumbnail: "../../../dist/images/seaofcloudsthumbnail.jpg",
    largeImage: "../../../dist/images/seaofclouds.jpg"
  },
  {
    thumbnail: "../../../dist/images/thelochsthumbnail.jpg",
    largeImage: "../../../dist/images/thelochs.jpg"
  },
  {
    thumbnail: "../../../dist/images/legiondalaranthumbnail.jpg",
    largeImage: "../../../dist/images/legiondalaran.jpg"
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
          src=${image.thumbnail} 
          alt="Landing Area Image ${index +1}"
        >
      </a>
      </li>`;
  });
  landingList.innerHTML = newLandingList.join(" ");
};

landing();