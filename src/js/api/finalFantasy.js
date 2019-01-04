import {
  finalFantasyProfessions
} from '../user/finalFantasyProfessions';

export const ffCall = async () => {
  const response = await fetch("https://xivapi.com/character/10803092");
  const data = await response.json();
  console.log(data);
  const name = data.Character.Name;
  const birthday = data.Character.Nameday;
  const server = data.Character.Server;
  const portrait = data.Character.Portrait;
  const armory = "https://na.finalfantasyxiv.com/lodestone/character/10803092/";
  const freeCompany = "https://na.finalfantasyxiv.com/lodestone/freecompany/9234490298434948752/";
  console.log(finalFantasyProfessions);
}

ffCall();