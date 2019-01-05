import {
  finalFantasyProfessions
} from '../user/finalFantasyProfessions';

export const ffCall = async () => {
  const response = await fetch("https://xivapi.com/character/10803092");
  const data = await response.json();
  const primary = document.querySelector('.finalfantasy-primary');
  const ffProfessions = document.querySelector('.finalfantasy-professionsList');
  const name = data.Character.Name;
  const birthday = data.Character.Nameday;
  const server = data.Character.Server;
  const portrait = data.Character.Portrait;
  const moogles = "http://finalfantasy.wikia.com/wiki/Moogle_(race)";
  const miqote = "http://finalfantasy.wikia.com/wiki/Miqo%27te";
  const armory = "https://na.finalfantasyxiv.com/lodestone/character/10803092/";
  const freeCompany = "https://na.finalfantasyxiv.com/lodestone/freecompany/9234490298434948752/";
  const professions = finalFantasyProfessions;
  for (const professionImage in professions) {
    ffProfessions.innerHTML += `<img src="${professions[professionImage]}" alt="${professionImage}"/>`
  }
  primary.innerHTML = `
  <h1>A Bit About Me:</h1>
    <h3>Name: 
      <a
        href=${armory}
        target="_blank"
        rel="noopener noreferrer"
      >
        ${name}
      </a>
    </h3>
    <h3>Birthday: ${birthday}</h3>
    <h3>Server: ${server}</h3>
    <h3>Free Company: 
      <a
        href=${freeCompany}
        target="_blank"
        rel="noopener noreferrer"
      >
        The Last Homely House
      </a>
    </h3>
    <h3>Favorite NPC Race: 
      <a
        href=${moogles}
        target="_blank"
        rel="noopener noreferrer"
      >
        Moogles!
      </a>
    </h3>
    <h3>Favorite Playable Race:
      <a
        href=${miqote}
        target="_blank"
        rel="noopener noreferrer"
      >
        Female Miq'ote
      </a>
    </h3>
    <h3>Current Look:
      <br />
      <a
        href=${portrait}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="${portrait}" />
      </a>
    </h3>
  `
}

ffCall();