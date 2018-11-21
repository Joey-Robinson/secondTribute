export const catFactCall = () => {
  fetch("https://catfact.ninja/facts?limit=50")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data.data);
    const catData = data.data.map((text) => {
      return `<li>${text.fact}</li>`;
    });
    const cats = document.getElementById('cats');
    const catFactDiv = document.createElement('div');
    const catFactList = document.createElement('ul');
    catFactList.innerHTML = catData.join(" ");
    catFactDiv.classList.add('cats-factsDiv');
    catFactDiv.appendChild(catFactList);
    cats.appendChild(catFactDiv);
  });
};

catFactCall();