export const weeklyAffixes = fetch("https://raider.io/api/v1/mythic-plus/affixes?region=us&locale=en")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const weeklyAffixes = data.affix_details;
    const output = document.getElementById('wow');
  })