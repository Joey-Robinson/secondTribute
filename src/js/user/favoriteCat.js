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
  const favoriteCatFur = document.querySelector('.favoritecat-fur');

  favoriteCatPrimary.innerHTML = `
    <h4>Information About My Favorite Cat:</h4>
      <table>
        <tr>
          <td><h4>Favorite Cat:</h4> ${favoriteCat.name}</td>
        </tr>
        <tr>
          <td><h4>Favorite Fur Color:</h4> ${favoriteCat.favoriteColor}</td>
        </tr>
        <tr>
          <td><h4>Favorite Eye Color:</h4> ${favoriteCat.eyes}</td>
        </tr>
        <tr>
          <td><h4>Favorite Fur Pattern:</h4> ${favoriteCat.furPattern}</td>
        </tr>
      </table>
  `;
  favoriteCatFacts.innerHTML = `
    <h4>Random Facts About ${favoriteCat.name}'s</h4>
      <table>
        <tr>
          <td><h4>Weight:</h4> ${favoriteCat.description.weight}</td>
        </tr>
        <tr>
          <td><h4>Eye Colors:</h4> ${favoriteCat.description.eyeColor}</td>
        </tr>
        <tr>
          <td><h4>Lifespan:</h4> ${favoriteCat.description.lifeSpan}</td>
        </tr>
        <tr>
          <td><h4>Social Needs:</h4> ${favoriteCat.description.socialNeeds}</td>
        </tr>
      </table>
  `;
  favoriteCatFur.innerHTML = `
    <h4>All About Their Fur!</h4>
      <table>
        <tr>
          <td><h4>Length:</h4> ${favoriteCat.coat.length}</td>
        </tr>
        <tr>
          <td><h4>Straight Or Curly:</h4> ${favoriteCat.coat.type}</td>
        </tr>
        <tr>
          <td><h4>Colors:</h4> ${favoriteCat.coat.colors}</td>
        </tr>
        <tr>
          <td><h4>Patterns:</h4> ${favoriteCat.coat.pattern}</td>
        </tr>
        <tr>
          <td><h4>Grooming Needs:</h4> ${favoriteCat.coat.groomingNeeds}</td>
        </tr>
      </table>
  `
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