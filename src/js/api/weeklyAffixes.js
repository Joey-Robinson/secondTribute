// export const weeklyAffixes = fetch("https://raider.io/api/v1/mythic-plus/affixes?region=us&locale=en")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     const weeklyAffixes = data.affix_details;
//     const output = document.getElementById('wow');
//   })

export const weeklyAffixes = async () => {
  const response = await fetch("https://raider.io/api/v1/mythic-plus/affixes?region=us&locale=en");
  const data = await response.json();
  console.log(data);
}

weeklyAffixes();