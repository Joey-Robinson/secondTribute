import { likes} from './likes';

fetch("https://raider.io/api/v1/characters/profile?region=us&realm=Zul'jin&name=Meerkatz&fields=gear,mythic_plus_scores,mythic_plus_ranks,mythic_plus_recent_runs")
.then((response) => {
  return response.json();
})
.then((data) => {
  
  const name = data.name;
  const spec = data.active_spec_name;
  const druid = data.class;
  const druidInformation = 'https://wow.gamepedia.com/Druid';
  const plusRankRegion = data.mythic_plus_ranks.class.region;
  const plusRankRealm = data.mythic_plus_ranks.class.realm;
  const recentPlus = data.mythic_plus_recent_runs[0];
  const recentPlusOne = data.mythic_plus_recent_runs[1];
  const recentPlusTwo = data.mythic_plus_recent_runs[2];
  const output = document.getElementById('output');
  

  const whoAmI = document.createElement('div');
  whoAmI.classList.add('output-who');
  whoAmI.innerHTML = `<h3>Name:</h3>`
  output.appendChild(whoAmI);


  // Container Div for Name
  const nameDiv = document.createElement('div');
  // h1 for name
  const nameHeader = document.createElement('h1');
  // contents of the h1
  nameHeader.innerHTML = `
    <a 
      href="${data.profile_url}" 
      target="_blank"
    >
      <hr />
        ${name}
      <hr />
    </a>
  `;
  // Appeding nameHeader to nameDiv
  nameDiv.appendChild(nameHeader);
  // Adding 'output-name' to the div (for positioning and styling)
  nameDiv.classList.add('output-name');
  // Appending nameDiv to output
  output.appendChild(nameDiv);

  const whatAmI = document.createElement('div');
  whatAmI.classList.add('output-what')
  whatAmI.innerHTML = `<h3>What Am I:</h3>`
  output.appendChild(whatAmI);


  const activeSpecDiv = document.createElement('div');
  const talents = "https://www.wowhead.com/talent-calc/druid/restoration/cSKz";
  const activeSpecHeader = document.createElement('h2');
  activeSpecHeader.innerHTML = `
    <a 
      href="${talents}" 
      target="_blank"
      rel="noopener noreferrer"
    >
      ${spec}
    </a>
    |
    <a 
      href="${druidInformation}"
      target="_blank"
      rel="noopener noreferrer"
    >
      ${druid}
    </a>
    <hr />
  `;
  activeSpecDiv.classList.add('output-spec');
  activeSpecDiv.appendChild(activeSpecHeader);
  output.appendChild(activeSpecDiv);


  const currentRanks = document.createElement('div');
  currentRanks.classList.add('output-ranks');
  currentRanks.innerHTML = `<h3>Current Ranks:</h3>`
  output.appendChild(currentRanks);

  const plusScoreDiv = document.createElement('div');
  const plusScoreHeader = document.createElement('h3');
  plusScoreHeader.innerHTML = `
    Region: ${plusRankRegion} <br />
    &nbsp;Realm: &nbsp; ${plusRankRealm}
    <hr />
  `
  plusScoreDiv.classList.add('output-score');
  plusScoreDiv.appendChild(plusScoreHeader);
  output.appendChild(plusScoreDiv);


  const mostRecent = document.createElement('div');
  mostRecent.classList.add('output-mostRecent');
  mostRecent.innerHTML = `<h3>Recent Keys:</h3>`;
  output.appendChild(mostRecent);

  const recentPlusRuns = document.createElement('div');
  const recentPlusRunsHeader = document.createElement('h3');
  recentPlusRunsHeader.innerHTML = `
    <a
      href="${recentPlus.url}"
      target="_blank"
      rel="noopener noreferrer"
    >
      ${recentPlus.mythic_level} -
      ${recentPlus.dungeon}
    </a>
    <br />
    <a 
      href="${recentPlusOne.url}"
      target="_blank"
      rel="noopener noreferrer"
    >
      ${recentPlusOne.mythic_level} -
      ${recentPlusOne.dungeon}
    </a>
    <br />
    <a 
      href="${recentPlusTwo.url}"
      target="_blank"
      rel="noopener noreferrer"
    >
      ${recentPlusTwo.mythic_level} -
      ${recentPlusTwo.dungeon}
    </a>
    <hr />
  `
  recentPlusRuns.classList.add('output-recent');
  recentPlusRuns.appendChild(recentPlusRunsHeader);
  output.appendChild(recentPlusRuns);


  const interests = document.createElement('div');
  interests.classList.add('output-interests');
  interests.innerHTML = `<h3>Likes:</h3>`
  output.appendChild(interests);

  const likesDiv = document.createElement('div');
  const likesList = document.createElement('ul');
  // likesList.innerHTML = likes.join(" <br />");
  likesList.innerHTML = likes.reduce((accumulator, like) => {
    accumulator += `<li>${like}</li>`; 
    return accumulator;
  });
  likesDiv.classList.add('output-likes');
  likesDiv.appendChild(likesList);
  output.appendChild(likesDiv);




  // FavIcon that has to be scoped
  const changeFavIcon = img => {
    let favIcon = document.querySelector('link[rel="shortcut icon"]');
    if (!favIcon) {
      favIcon = document.createElement("link");
      favIcon.setAttribute("rel", "shortcut icon");
      const head = document.querySelector("head");
      head.appendChild(favIcon);
    }
    favIcon.setAttribute("type", "image/jpg");
    favIcon.setAttribute("href", img);
  };
  const favImage = data.thumbnail_url;
  changeFavIcon(favImage);
})

const nav = document.getElementById('nav');
const wowSpan = document.createElement('span');
const armoryLink = "https://worldofwarcraft.com/en-us/character/zuljin/Meerkatz";
wowSpan.classList.add('nav-wow');
wowSpan.innerHTML = `
  <a 
    href="${armoryLink}"
    rel="noopener noreferrer"
  >
    wow
  </a>`
nav.appendChild(wowSpan);

