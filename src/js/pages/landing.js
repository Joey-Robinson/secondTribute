const landingListImages = [
  {
    thumbnail: "../../images/finalfantasybackground.jpg",
    largeImage: "../../src/images/finalfantasybackground.jpg"
  },
  {
    thumbnail: "../../images/firecat-tiltshift.jpg",
    largeImage: "../../src/images/firecat-tiltshift.jpg"
  },
  {
    thumbnail: "../../images/firecat.jpg",
    largeImage: "../../src/images/firecat.jpg"
  },
  {
    thumbnail: "../../images/space.jpg",
    largeImage: "../../src/images/space.jpg"
  },
  {
    thumbnail: "../../images/space.jpg",
    largeImage: "../../src/images/finalfantasybackground.jpg"
  },
  {
    thumbnail: "../../images/space.jpg",
    largeImage: "../../src/images/nagrand.jpg"
  },
  {
    thumbnail: "../../images/space.jpg",
    largeImage: "../../src/images/zangarmarsh.jpg"
  },
  {
    thumbnail: "../../images/space.jpg",
    largeImage: "../../src/images/vale.jpg"
  },
  {
    thumbnail: "../../images/space.jpg",
    largeImage: "../../src/images/kunlai.jpg"
  },
  {
    thumbnail: "../../images/space.jpg",
    largeImage: "../../src/images/churningmists.jpg"
  },
  {
    thumbnail: "../../images/space.jpg",
    largeImage: "../../src/images/dravanianforelands.jpg"
  },
  {
    thumbnail: "../../images/space.jpg",
    largeImage: "../../src/images/rubysea.jpg"
  },
  {
    thumbnail: "../../images/space.jpg",
    largeImage: "../../src/images/seaofclouds.jpg"
  },
  {
    thumbnail: "../../images/space.jpg",
    largeImage: "../../src/images/thelochs.jpg"
  },
  {
    thumbnail: "../../images/space.jpg",
    largeImage: "../../src/images/finalfantasybackground.jpg"
  }
];

// Had to add relative pathing from bundle.js
export const something = () => {
  landingListImages.sort(() => 0.25 - Math.random());
  const landingList = document.getElementById("landing-list");
  const newLandingList = landingListImages.map((image, index) => {
    return `<li><img src=${image.largeImage} alt="Landing Area Image ${index +
      1}"></li>`;
  });
  landingList.innerHTML = newLandingList.join(" ");
};

something();
