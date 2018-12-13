// export const ffCall = () => {
//   fetch("https://xivapi.com/character/10803092")
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       const lodestoneLink = "https://na.finalfantasyxiv.com/lodestone/character/10803092/";
//       const ffName = data.Character.Name;
//       const ffBirthday = data.Character.Nameday;
//       const ffServer = data.Character.Server;
//       const hoh = "https://na.finalfantasyxiv.com/lodestone/ranking/deepdungeon2/";
//       const finalFantasy = document.getElementById('finalfantasy');
//       const freeCompany = "https://na.finalfantasyxiv.com/lodestone/freecompany/9234490298434948752/";
//     });
// };

// ffCall();

export const ffCall = async () => {
  const response = await fetch("https://xivapi.com/character/10803092");
  const data = await response.json();
  console.log(data);
}

ffCall();