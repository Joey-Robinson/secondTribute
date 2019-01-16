import {
  finalFantasyProfessions
} from '../user/finalFantasyProfessions';

import {
  finalFantasyJobs
} from '../user/finalFantasyJobs';

import {
  finalFantasyMounts
} from '../user/finalFantasyMounts';

import {
  finalFantasyMinions
} from '../user/finalFantasyMinions';

import {
  ffResourcesList
} from '../user/ffResources';

export const ffCall = async () => {
  const response = await fetch("https://xivapi.com/Character/10803092?key=e6a0198acbbf45bda79ab685");
  const data = await response.json();
  const resourcesTwo = document.querySelector('.finalfantasy-activities__two');
  const primary = document.querySelector('.finalfantasy-primary');
  const ffProfessions = document.querySelector('.finalfantasy-professions__one');
  const ffProfessionsTwo = document.querySelector('.finalfantasy-professions__two');
  const ffMounts = document.querySelector('.finalfantasy-professions__three');
  const ffMinions = document.querySelector('.finalfantasy-professions__four');
  const name = data.Character.Name;
  const birthday = data.Character.Nameday;
  const server = data.Character.Server;
  const portrait = data.Character.Portrait;
  const moogles = "http://finalfantasy.wikia.com/wiki/Moogle_(race)";
  const miqote = "http://finalfantasy.wikia.com/wiki/Miqo%27te";
  const armory = "https://na.finalfantasyxiv.com/lodestone/character/10803092/";
  const freeCompany = "https://na.finalfantasyxiv.com/lodestone/freecompany/9234490298434948752/";
  const jobs = finalFantasyJobs;
  const professions = finalFantasyProfessions;
  const mounts = finalFantasyMounts;
  const minions = finalFantasyMinions;
  for (const professionImage in professions) {
    ffProfessions.innerHTML += `<img class="lazyload" data-src="${professions[professionImage]}" alt="Profession Job ${professionImage}"/>`
  }
  for (const combatImage in jobs) {
    ffProfessionsTwo.innerHTML += `<img class="lazyload" data-src="${jobs[combatImage]}" alt="Combat Job ${combatImage}" />`
  }
  for (const mountImage in mounts) {
    ffMounts.innerHTML += `<img class="lazyload" data-src=${mounts[mountImage]} alt="Favorite Mount ${mountImage}" />`
  }
  for (const minionImage in minions) {
    ffMinions.innerHTML += `<img class="lazyload" data-src=${minions[minionImage]} alt="Favorite Minion ${minionImage}" />`;
  }
  resourcesTwo.innerHTML = ffResourcesList.join(" ");
  primary.innerHTML = `
  <h1>A Bit About Me:</h1>
    <h3>Name: 
      <a
        aria-label="Lodestone Link For Meerkats Comparthe"
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
        aria-label="Lodestone Link For The Last Homely House"
        href=${freeCompany}
        target="_blank"
        rel="noopener noreferrer"
      >
        The Last Homely House
      </a>
    </h3>
    <h3>Favorite NPC Race: 
      <a
        aria-label="Link For Final Fantasy Wiki For Moogles"
        href=${moogles}
        target="_blank"
        rel="noopener noreferrer"
      >
        Moogles!
      </a>
    </h3>
    <h3>Favorite Playable Race:
      <a
        aria-label="Link For Final Fantasy Wiki For Miqote" 
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
        aria-label="Link For Current Look Image"
        href=${portrait}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img class="lazyload" data-src="${portrait}" alt="Current Look In Final Fantasy 14"/>
      </a>
    </h3>
  `
}

ffCall();