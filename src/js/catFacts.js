import { favoriteCat } from './favoriteCat';

export const catFactCall = () => {
  fetch("https://catfact.ninja/facts?limit=10")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const catData = data.data.map((text) => {
      return `<li>${text.fact}</li>`;
    });
    catData.sort(() => 0.25 - Math.random());
    const cats = document.getElementById('cats');
    const catFactDiv = document.createElement('div');
    const catFactList = document.createElement('ul');
    const favDiv = document.createElement('div');
    favDiv.classList.add('cats-favDiv');
    const fav = document.createElement('ul');
    const numberOne = favoriteCat.map((info) => {
      return `
        <li>
          <h1>Information About My Favorite Cat:</h1>
          <h4>Favorite Cat:</h4> ${info.name} <br />
          <h4>Favorite Cat Color:</h4> ${info.favoriteColor} <br />
          <h4>Weight:</h4> ${info.description.weight} <br />
          <h4>Eye Color:</h4> ${info.description.eyeColor} <br />
          <h4>Life Span:</h4> ${info.description.lifeSpan} <br ?>
          <h4>Social & Attention Needs:</h4> ${info.description.socialNeeds} <br />

          <h1>Information About Their Fur:</h1>
          <h4>Type of fur:</h4> ${info.coat.length} & ${info.coat.type} <br />
          <h4>Color of fur:</h4> ${info.coat.colors} <br />
          <h4>Possible patterns:</h4> ${info.coat.pattern} <br />
          <h4>Grooming Needs:</h4> ${info.coat.groomingNeeds} <br />

          <h1>Living With A Maine Coon:</h1>
          <h4>Living With:</h4> ${info.livingWith} <br />
          <h4>History:</h4> ${info.history}
        </li>
      `
    });
    fav.innerHTML = numberOne;
    favDiv.appendChild(fav);
    catFactList.innerHTML = `<h1>Cat Facts:</h1> ${catData.join(" ")}`;
    catFactDiv.classList.add('cats-factsDiv');
    catFactDiv.appendChild(catFactList);
    cats.appendChild(catFactDiv);
    cats.appendChild(favDiv);
  });
};

catFactCall();