const landingListImages = [{
    thumbnail: "../images/finalfantasybackground.jpg",
    largeImage: "../../../dist/images/finalfantasybackground.jpg"
  },
  {
    thumbnail: "../images/karasangthumbnail.jpg",
    largeImage: "../images/karasang.jpg"
  },
  {
    thumbnail: "../images/wodspiresthumbnail.jpg",
    largeImage: "../images/wodspires.jpg"
  },
  {
    thumbnail: "../images/firecatthumbnail.jpg",
    largeImage: "../images/firecat.jpg"
  },
  {
    thumbnail: "../images/wodnagrandthumbnail.jpg",
    largeImage: "../images/wodnagrand.jpg"
  },
  {
    thumbnail: "../images/nagrandthumbnail.jpg",
    largeImage: "../images/nagrand.jpg"
  },
  {
    thumbnail: "../images/zangarmarshthumbnail.jpg",
    largeImage: "../images/zangarmarsh.jpg"
  },
  {
    thumbnail: "../images/valethumbnail.jpg",
    largeImage: "../images/vale.jpg"
  },
  {
    thumbnail: "../images/kunlaithumbnail.jpg",
    largeImage: "../images/kunlai.jpg"
  },
  {
    thumbnail: "../images/churningmiststhumbnail.jpg",
    largeImage: "../images/churningmists.jpg"
  },
  {
    thumbnail: "../images/dravanianforelandsthumbnail.jpg",
    largeImage: "../images/dravanianforelands.jpg"
  },
  // {
  //   thumbnail: "../images/rubyseathumbnail.jpg",
  //   largeImage: "../images/rubysea.jpg"
  // },
  // {
  //   thumbnail: "../images/seaofcloudsthumbnail.jpg",
  //   largeImage: "../images/seaofclouds.jpg"
  // },
  // {
  //   thumbnail: "../images/thelochsthumbnail.jpg",
  //   largeImage: "../images/thelochs.jpg"
  // },
  // {
  //   thumbnail: "../images/legiondalaranthumbnail.jpg",
  //   largeImage: "../images/legiondalaran.jpg"
  // }
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