const favoriteCat = {
  name: "Maine Coon",
  favoriteColor: "Cream",
  eyes: "Odd-Eyed",
  furPattern: "Tabby",
  description: {
    weight: "8-10lbs for females. More than 12lbs for males.",
    eyeColor: "Copper, Green, Gold, Odd-Eyed",
    lifeSpan: "9-13 Years",
    socialNeeds: "Moderate to High"
  },
  coat: {
    length: "Long",
    type: "Straight",
    colors: "White, Black, Blue, Red, Cream, Brown, Silver, Tortoiseshell, Bluecream, Golden",
    pattern: "Solid Color, Tortoiseshell, Bicolor, Tricolor/Calico, Tabby, Smoke, Shaded",
    groomingNeeds: "High"
  }
}

export const favoriteCatFunction = () => {
  const favoriteCatPrimary = document.querySelector('.favoritecat-primary');
  const favoriteCatFacts = document.querySelector('.favoritecat-facts');
  favoriteCatPrimary.innerHTML += `
    <h1>Facts About My Favorite Cat:</h1>
    <h3>Favorite Type Of Cat: ${favoriteCat.name}</h3>
    <h3>Favorite Color: ${favoriteCat.favoriteColor}</h3>
    <h3>Favorite Eye Color: ${favoriteCat.eyes}</h3>
    <h3>Favorite Fur Color: ${favoriteCat.furPattern}</h3>
  `;
  favoriteCatFacts.innerHTML = `
    <h3>Typical Weight: ${favoriteCat.description.weight}</h3>
    <h3>Different Eye Colors: ${favoriteCat.description.eyeColor}</h3>
    <h3>Lifespan: ${favoriteCat.description.lifeSpan}</h3>
    <h3>Social Needs: ${favoriteCat.description.socialNeeds}</h3>
  `;
}

favoriteCatFunction();

{
  /* <h3>What I like about them:</h3>
  <div>
    <ul>
      <li>They're Floofy</li>
      <li>They're Soft</li>
      <li>They're adorable</li>
      <li>They're amazing</li>
      <li>They're Cute</li>
    </ul>
  </div> */
}