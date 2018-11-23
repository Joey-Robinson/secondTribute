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
    const fav = document.createElement('ul');
    const numberOne = favoriteCat.map((info) => {
      return `
        <li>
          <h1>test</h1>
          Favorite Cat: ${info.name} <br />
          Favorite Cat Color: ${info.favoriteColor} <br />
          Weight: ${info.description.weight} <br />
          Eye Color: ${info.description.eyeColor} <br />
          Life Span: ${info.description.lifeSpan} <br ?>
          Social & Attention Needs: ${info.description.socialNeeds} <br />
          Living With: ${info.livingWith} <br />
          <br />
          History: ${info.history}
        </li>
      `
    });
    fav.innerHTML = numberOne;
    // fav.appendChild(numberOne);
    catFactDiv.appendChild(fav);
    catFactList.innerHTML = catData.join(" ");
    catFactDiv.classList.add('cats-factsDiv');
    catFactDiv.appendChild(catFactList);
    cats.appendChild(catFactDiv);
  });
};

catFactCall();