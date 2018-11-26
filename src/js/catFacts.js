export const catFacts = () => {
  fetch("https://catfact.ninja/facts?limit=10")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const catData = data.data.map((text) => {
        return `<li>${text.fact}</li>`;
      });
      catData.sort(() => 0.25 - Math.random());
      const facts = document.getElementById('catfacts');
      const factsSection = document.createElement('section');
      const factsList = document.createElement('ul');
      factsList.innerHTML = catData.join(" ");
      factsSection.appendChild(factsList);
      facts.appendChild(factsSection);
  });
}

catFacts();