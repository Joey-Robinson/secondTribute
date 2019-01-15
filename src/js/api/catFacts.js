export const catFacts = async () => {
  const response = await fetch("https://catfact.ninja/facts?limit=500");
  const data = await response.json();
  const catList = document.querySelector('.catfacts-list');
  const catData = data.data.map((text) => {
    return `<li><strong>${text.fact}</strong></li>`;
  });
  catList.innerHTML = catData.join(" ");
  console.log(data);
}

catFacts();