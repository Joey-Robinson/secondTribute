import {
  finalFantasyProfessions
} from '../user/finalFantasyProfessions';

export const ffCall = async () => {
  const response = await fetch("https://xivapi.com/character/10803092");
  const data = await response.json();
  const ffProfessions = document.querySelector('.finalfantasy-professions');
  const name = data.Character.Name;
  const birthday = data.Character.Nameday;
  const server = data.Character.Server;
  const portrait = data.Character.Portrait;
  const armory = "https://na.finalfantasyxiv.com/lodestone/character/10803092/";
  const freeCompany = "https://na.finalfantasyxiv.com/lodestone/freecompany/9234490298434948752/";
  const professions = finalFantasyProfessions;
  for (const professionImage in professions) {
    ffProfessions.innerHTML += `<img src="${professions[professionImage]}" alt="${professionImage}"/>`
  }
}

ffCall();