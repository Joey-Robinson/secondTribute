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
  {
    thumbnail: "../images/rubyseathumbnail.jpg",
    largeImage: "../images/rubysea.jpg"
  }
];

// const landingListImages = [{
//     thumbnail: "../../../dist/images/finalfantasybackground.jpg",
//     largeImage: "../../../dist/images/finalfantasybackground.jpg"
//   },
//   {
//     thumbnail: "../../../dist/images/karasangthumbnail.jpg",
//     largeImage: "../../../dist/images/karasang.jpg"
//   },
//   {
//     thumbnail: "../../../dist/images/wodspiresthumbnail.jpg",
//     largeImage: "../../../dist/images/wodspires.jpg"
//   },
//   {
//     thumbnail: "../../../dist/images/firecatthumbnail.jpg",
//     largeImage: "../../../dist/images/firecat.jpg"
//   },
//   {
//     thumbnail: "../../../dist/images/wodnagrandthumbnail.jpg",
//     largeImage: "../../../dist/images/wodnagrand.jpg"
//   },
//   {
//     thumbnail: "../../../dist/images/nagrandthumbnail.jpg",
//     largeImage: "../../../dist/images/nagrand.jpg"
//   },
//   {
//     thumbnail: "../../../dist/images/zangarmarshthumbnail.jpg",
//     largeImage: "../../../dist/images/zangarmarsh.jpg"
//   },
//   {
//     thumbnail: "../../../dist/images/valethumbnail.jpg",
//     largeImage: "../../../dist/images/vale.jpg"
//   },
//   {
//     thumbnail: "../../../dist/images/kunlaithumbnail.jpg",
//     largeImage: "../../../dist/images/kunlai.jpg"
//   },
//   {
//     thumbnail: "../../../dist/images/churningmiststhumbnail.jpg",
//     largeImage: "../../../dist/images/churningmists.jpg"
//   },
//   {
//     thumbnail: "../../../dist/images/dravanianforelandsthumbnail.jpg",
//     largeImage: "../../../dist/images/dravanianforelands.jpg"
//   },
//   {
//     thumbnail: "../../../dist/images/rubyseathumbnail.jpg",
//     largeImage: "../../../dist/images/rubysea.jpg"
//   }
// ];




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