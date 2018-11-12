export const weeklyAffixes = fetch("https://raider.io/api/v1/mythic-plus/affixes?region=us&locale=en")
.then((response) => {
  return response.json();
})
.then((data) => {
  console.log(data)
  const output = document.getElementById('wow');
  const weeklyAffixes = data.affix_details;
  const weeklyAffixDiv = document.createElement('div');
  const affixList = document.createElement('ul');
  const affixListNew =  weeklyAffixes.map((affix) => {
    return `
    <li>
      <a 
        href="${affix.wowhead_url}#comments"
        target="_blank"
        rel="noopener noreferrer"
      >${affix.name}</a> 
    </li>`
  })
  affixList.innerHTML = affixListNew.join(" ");
  weeklyAffixDiv.classList.add('output-weeklyAffixes');
  weeklyAffixDiv.appendChild(affixList);
  output.appendChild(weeklyAffixDiv);
})