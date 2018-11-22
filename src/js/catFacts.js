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
      return `<li>${info.name} ${info.description}</li>`
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