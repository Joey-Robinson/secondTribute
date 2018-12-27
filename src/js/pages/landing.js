const landingListImages = [{
    thumbnail: "../../src/images/finalfantasybackgroundthumbnail.jpg",
    largeImage: "../../src/images/finalfantasybackground.jpg"
  },
  {
    thumbnail: "../../src/images/karasangthumbnail.jpg",
    largeImage: "../../src/images/karasang.jpg"
  },
  {
    thumbnail: "../../src/images/wodspiresthumbnail.jpg",
    largeImage: "../../src/images/wodspires.jpg"
  },
  {
    thumbnail: "../../src/images/firecatthumbnail.jpg",
    largeImage: "../../src/images/firecat.jpg"
  },
  {
    thumbnail: "../../src/images/wodnagrandthumbnail.jpg",
    largeImage: "../../src/images/wodnagrand.jpg"
  },
  {
    thumbnail: "../../src/images/nagrandthumbnail.jpg",
    largeImage: "../../src/images/nagrand.jpg"
  },
  {
    thumbnail: "../../src/images/zangarmarshthumbnail.jpg",
    largeImage: "../../src/images/zangarmarsh.jpg"
  },
  {
    thumbnail: "../../src/images/valethumbnail.jpg",
    largeImage: "../../src/images/vale.jpg"
  },
  {
    thumbnail: "../../src/images/kunlaithumbnail.jpg",
    largeImage: "../../src/images/kunlai.jpg"
  },
  {
    thumbnail: "../../src/images/churningmiststhumbnail.jpg",
    largeImage: "../../src/images/churningmists.jpg"
  },
  {
    thumbnail: "../../src/images/dravanianforelandsthumbnail.jpg",
    largeImage: "../../src/images/dravanianforelands.jpg"
  },
  {
    thumbnail: "../../src/images/rubyseathumbnail.jpg",
    largeImage: "../../src/images/rubysea.jpg"
  },
  {
    thumbnail: "../../src/images/seaofcloudsthumbnail.jpg",
    largeImage: "../../src/images/seaofclouds.jpg"
  },
  {
    thumbnail: "../../src/images/thelochsthumbnail.jpg",
    largeImage: "../../src/images/thelochs.jpg"
  },
  {
    thumbnail: "../../src/images/legiondalaranthumbnail.jpg",
    largeImage: "../../src/images/legiondalaran.jpg"
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