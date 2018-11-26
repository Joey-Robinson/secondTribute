export const catFacts = () => {
  fetch("https://catfact.ninja/facts?limit=10")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const catData = data.map((text) => {
        return `<li>${text.fact}</li>`;
      });
    });
    catData.sort(() => 0.25 - Math.random());
}