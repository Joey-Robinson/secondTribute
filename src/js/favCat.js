import { favoriteCat } from './favoriteCat';

export const favCat = () => {
  const favorite = document.getElementById('favoritecat');
  const numberOne = favoriteCat.map((info) => {
    return `
      <section>
        <h1>Information About My Favorite Cat:</h1>
        <h4>Favorite Cat:</h4> ${info.name} <br />
        <h4>Favorite Cat Color:</h4> ${info.favoriteColor} <br />
        <h4>Weight:</h4> ${info.description.weight} <br />
        <h4>Eye Color:</h4> ${info.description.eyeColor} <br />
        <h4>Life Span:</h4> ${info.description.lifeSpan} <br />
        <h4>Social & Attention Needs:</h4> ${info.description.socialNeeds} <br />
        <h1>Information About Their Fur:</h1>
        <h4>Type of fur:</h4> ${info.coat.length} & ${info.coat.type} <br />
        <h4>Color of fur:</h4> ${info.coat.colors} <br />
        <h4>Possible patterns:</h4> ${info.coat.pattern} <br />
        <h4>Grooming Needs:</h4> ${info.coat.groomingNeeds} <br />
      </section>
      <div class="favoritecat">
        <div class="favoritecat-slideshow slideshow">
          <div class="favoritecat-slideshow__wrapper">
            <div class="favoritecat-slideshow__slideOne slide"></div>
            <div class="favoritecat-slideshow__slideTwo slide"></div>
            <div class="favoritecat-slideshow__slideThree slide"></div>
            <div class="favoritecat-slideshow__slideFour slide"></div>
            <div class="favoritecat-slideshow__slideFive slide"></div>
            <div class="favoritecat-slideshow__slideSix slide"></div>
            <div class="favoritecat-slideshow__slideSeven slide"></div>
            <div class="favoritecat-slideshow__slideEight slide"></div>
          </div>
        </div>
      </div>
    `
    });
    favorite.innerHTML = numberOne;
};

favCat();