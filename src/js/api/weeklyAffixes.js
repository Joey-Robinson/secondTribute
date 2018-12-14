export const weeklyAffixes = async () => {
  const response = await fetch("https://raider.io/api/v1/mythic-plus/affixes?region=us&locale=en");
  const data = await response.json();
  console.log(data);
}

weeklyAffixes();