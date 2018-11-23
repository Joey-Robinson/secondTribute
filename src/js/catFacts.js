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
          <h4>Favorite Cat</h4>: ${info.name} <br />
          <h4>Favorite Cat Color</h4>: ${info.favoriteColor} <br />
          <h4>Weight</h4>: ${info.description.weight} <br />
          <h4>Eye Color</h4>: ${info.description.eyeColor} <br />
          <h4>Life Span</h4>: ${info.description.lifeSpan} <br ?>
          <h4>Social & Attention Needs</h4>: ${info.description.socialNeeds} <br />

          <h1>Information About Their Fur:</h1>
          Type of fur: ${info.coat.length} & ${info.coat.type} <br />
          Color of fur: ${info.coat.colors} <br />
          Possible patterns: ${info.coat.pattern} <br />
          Grooming Needs: ${info.coat.groomingNeeds} <br />

          <h1>Living With A Maine Coon:</h1>
          Living With: ${info.livingWith} <br />
          History: ${info.history}
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