// Had to add relative pathing from bundle.js
export const something = () => {
  const landingListImages = [{
    thumbnail: '../../images/finalfantasybackground.jpg',
    largeImage: '../../src/images/finalfantasybackground.jpg'
  }, {
    thumbnail: '../../images/firecat-tiltshift.jpg',
    largeImage: '../../src/images/firecat-tiltshift.jpg'
  }, {
    thumbnail: '../../images/firecat.jpg',
    largeImage: '../../src/images/firecat.jpg'
  }, {
    thumbnail: '../../images/space.jpg',
    largeImage: '../../src/images/space.jpg'
  }, {
    thumbnail: '../../images/space.jpg',
    largeImage: '../../src/images/finalfantasybackground.jpg'
  }, {
    thumbnail: '../../images/space.jpg',
    largeImage: '../../src/images/nagrand.jpg'
  }, {
    thumbnail: '../../images/space.jpg',
    largeImage: '../../src/images/zangarmarsh.jpg'
  }, {
    thumbnail: '../../images/space.jpg',
    largeImage: '../../src/images/vale.jpg'
  }, {
    thumbnail: '../../images/space.jpg',
    largeImage: '../../src/images/kunlai.jpg'
  }, {
    thumbnail: '../../images/space.jpg',
    largeImage: '../../src/images/finalfantasybackground.jpg'
  }, {
    thumbnail: '../../images/space.jpg',
    largeImage: '../../src/images/finalfantasybackground.jpg'
  }, {
    thumbnail: '../../images/space.jpg',
    largeImage: '../../src/images/finalfantasybackground.jpg'
  }, {
    thumbnail: '../../images/space.jpg',
    largeImage: '../../src/images/finalfantasybackground.jpg'
  }, {
    thumbnail: '../../images/space.jpg',
    largeImage: '../../src/images/finalfantasybackground.jpg'
  }, {
    thumbnail: '../../images/space.jpg',
    largeImage: '../../src/images/finalfantasybackground.jpg'
  }];

  const landingList = document.getElementById("landing-list");
  const newLandingList = landingListImages.map((image, index) => {
    return `<li><img src=${image.largeImage}></li>`
  })
  landingList.innerHTML = newLandingList.join(" ");
}

something();