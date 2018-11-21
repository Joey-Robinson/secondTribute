export const catFactCall = () => {
  fetch("https://catfact.ninja/facts?limit=250")
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
    catFactDiv.innerHTML = catData.join(" ");
    cats.appendChild(catFactDiv);
  });
};

catFactCall();