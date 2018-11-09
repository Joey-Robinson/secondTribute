export const talents = fetch("https://us.api.blizzard.com/wow/character/zul'jin/meerkatz?fields=talents&locale=en_US&access_token=USdh1vWh91uESPweoiU5jeMv4agi830xVC")
.then((response) => {
  return response.json();
})
.then((data) => {
  console.log(data);
  const output = document.getElementById('wow');
  const talentsSection = document.createElement('section');
  const talentsDiv = document.createElement('section');
  const talentsHeading = document.createElement('h1');
  talentsHeading.innerHTML = 'Talents:';
  talentsDiv.classList.add('output-talentHeading');
  talentsSection.classList.add('output-talents');
  const talentList = document.createElement('ul');
  talentList.classList.add('output-talentList');
  const talentTest = data.talents[0].talents.map((talent) => {
    return `
      <li>
        <img
          src="https://render-us.worldofwarcraft.com/icons/56/${talent.spell.icon}.jpg"
          alt="${talent.spell.description}"
        >
        -
          ${talent.spell.name}
      </li>
      `
    })
  talentList.innerHTML = talentTest.join(" ");
  talentsSection.appendChild(talentList);
  talentsDiv.appendChild(talentsHeading);
  output.appendChild(talentsDiv);
  output.appendChild(talentsSection);
})