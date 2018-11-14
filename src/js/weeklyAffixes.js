export const weeklyAffixes = fetch("https://raider.io/api/v1/mythic-plus/affixes?region=us&locale=en")
.then((response) => {
  return response.json();
})
.then((data) => {
  console.log(data);
  const weeklyAffixes = data.affix_details;
  const output = document.getElementById('wow');
  const weeklyAffixDiv = document.createElement('div');
  weeklyAffixDiv.innerHTML = "<h1>This Week's Affixes</h1>";
  // const weeklyAffixHeading = document.createElement('div');
  // weeklyAffixHeading.innerHTML = "<h3>This Week's Affixes:</h3>";
  const affixList = document.createElement('ul');
  const affixListNew =  weeklyAffixes.map((affix) => {
    return `
    <li>
      <a 
        href="${affix.wowhead_url}#comments"
        target="_blank"
        rel="noopener noreferrer"
      >
        ${affix.name}
      </a> 
    </li>`
  })
  affixList.innerHTML = affixListNew.join(" ");
  // weeklyAffixHeading.classList.add('output-weeklyAffixesHeading');
  weeklyAffixDiv.classList.add('output-weeklyAffixes');
  weeklyAffixDiv.appendChild(affixList);
  // output.appendChild(weeklyAffixHeading);
  output.appendChild(weeklyAffixDiv);
})