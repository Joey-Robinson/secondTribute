export const catFacts = () => {
  fetch("https://catfact.ninja/facts?limit=25")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
}

catFacts();