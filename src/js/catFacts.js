export const catFacts = () => {
  fetch("https://catfact.ninja/facts?limit=25")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const catData = data.data.map((text) => {
        return `<li><u>${text.fact}</u></li>`;
      });
      catData.sort(() => 0.25 - Math.random());
      const facts = document.getElementById('catfacts');
      const factsSection = document.createElement('section');
      const factsList = document.createElement('ul');
      factsList.innerHTML = `<h1>Random Cat Facts:</h1> ${catData.join(" ")}`;
      factsSection.appendChild(factsList);
      facts.appendChild(factsSection);
  });
}

catFacts();