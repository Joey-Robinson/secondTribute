// export const catFacts = () => {
//   fetch("https://catfact.ninja/facts?limit=25")
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//     })
// }

// catFacts();

export const catFacts = async () => {
  const response = await fetch("https://catfact.ninja/facts?limit=25");
  const data = await response.json();
  console.log(data);
}

catFacts();