export const talents = fetch("https://us.api.blizzard.com/wow/character/zul'jin/meerkatz?fields=talents&locale=en_US&access_token=USdh1vWh91uESPweoiU5jeMv4agi830xVC")
.then((response) => {
  return response.json();
})
.then((data) => {
  console.log(data);
  const output = document.getElementById('wow');
  const talentList = document.createElement('ul');
  const talentTest = data.talents[0].talents.map((talent) => {
    return `
      <li>
        <img
          src="https://render-us.worldofwarcraft.com/icons/56/${talent.spell.icon}.jpg"
          alt="${talent.spell.description}"
        >
        ${talent.spell.name}
      </li>
    `
  })
  talentList.innerHTML = talentTest.join(" ")
  output.appendChild(talentList);
})