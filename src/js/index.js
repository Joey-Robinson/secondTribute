import { favoriteAffixes } from './favoriteAffixes';
import { ffCall } from './ffCall';
import { wowLeft } from './wowLeft';
import { streamers } from './streamers';
import { weeklyAffixes } from './weeklyAffixes';
import { favCat } from './favCat';
import { catFacts } from './catFacts';

fetch("https://raider.io/api/v1/characters/profile?region=us&realm=Zul'jin&name=Meerkatz&fields=gear,mythic_plus_scores,mythic_plus_ranks,mythic_plus_recent_runs,mythic_plus_best_runs")
.then((response) => {
  return response.json();
})
.then((data) => {
  const name = data.name;
  const spec = data.active_spec_name;
  const druid = data.class;
  const druidInformation = 'https://wow.gamepedia.com/Druid';
  const plusRankRegion = data.mythic_plus_ranks.class.region;
  const bestOverall = data.mythic_plus_best_runs;
  const plusRankRealm = data.mythic_plus_ranks.class.realm;
  const recentPlus = data.mythic_plus_recent_runs[0];
  const recentPlusChest = data.mythic_plus_recent_runs[0].num_keystone_upgrades;
  const recentPlusOne = data.mythic_plus_recent_runs[1];
  const recentPlusChestOne = data.mythic_plus_recent_runs[1].num_keystone_upgrades;
  const recentPlusTwo = data.mythic_plus_recent_runs[2];
  const recentPlusChestTwo = data.mythic_plus_recent_runs[2].num_keystone_upgrades;
  const output = document.getElementById('wow');

  // Container Div for Name
  const nameDiv = document.createElement('div');
  // h1 for name
  const nameHeader = document.createElement('h1');
  // contents of the h1
  nameHeader.innerHTML = `
    <a 
      href="${data.profile_url}" 
      target="_blank"
      rel="noopener noreferrer"
    >
    
        ${name}
    
    </a>
  `;
  // Appeding nameHeader to nameDiv
  nameDiv.appendChild(nameHeader);
  // Adding 'output-name' to the div (for positioning and styling)
  nameDiv.classList.add('output-name');
  // Appending nameDiv to output
  output.appendChild(nameDiv);

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
    &nbsp;|
    <a 
      href="${druidInformation}"
      target="_blank"
      rel="noopener noreferrer"
    >
      ${druid}
    </a>
  
  `;
  activeSpecDiv.classList.add('output-spec');
  activeSpecDiv.appendChild(activeSpecHeader);
  output.appendChild(activeSpecDiv);

  const plusScoreDiv = document.createElement('div');
  const plusScoreHeader = document.createElement('h3');
  plusScoreHeader.innerHTML = `
    ${plusRankRegion}<br />
    ${plusRankRealm}
  
  `
  plusScoreDiv.classList.add('output-score');
  plusScoreDiv.appendChild(plusScoreHeader);
  output.appendChild(plusScoreDiv);

  const recentPlusRuns = document.createElement('div');
  const recentPlusRunsHeader = document.createElement('h3');
  recentPlusRunsHeader.innerHTML = `
    <a
      href="${recentPlus.url}"
      target="_blank"
      rel="noopener noreferrer"
    >
      +${recentPlusChest} &hybull;
      ${recentPlus.dungeon}
      ${recentPlus.mythic_level}
    </a>
    <br />
    <a 
      href="${recentPlusOne.url}"
      target="_blank"
      rel="noopener noreferrer"
    >
      +${recentPlusChestOne} &hybull;
      ${recentPlusOne.dungeon}
      ${recentPlusOne.mythic_level}
    </a>
    <br />
    <a 
      href="${recentPlusTwo.url}"
      target="_blank"
      rel="noopener noreferrer"
    >
      +${recentPlusChestTwo} &hybull;
      ${recentPlusTwo.dungeon}
      ${recentPlusTwo.mythic_level} 
    </a>
  
  `
  recentPlusRuns.classList.add('output-recent');
  recentPlusRuns.appendChild(recentPlusRunsHeader);
  output.appendChild(recentPlusRuns);

  const likesDiv = document.createElement('div');
  const openButton = document.createElement('button');
  const closeButton = document.createElement('button');
  const modalBackdrop = document.createElement('div');
  const modal = document.createElement('div');

  modal.classList.add('modal');
  modal.innerHTML = `
    <div class="modal-one">
      <p>Mythic Plus</p>
      <p>Researching Mythic Plus</p>
      <p>
        <a
          href="http://www.wow-petopia.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Looking at cute pets
        </a>
      </p>
    </div>
    <div class="modal-two">
      <p>
        <a
          href="https://questionablyepic.com/restodruid-catweaving/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Catweaving
        </a>
      </p>
      <p>Tinkering With My UI</p>
      <p>
        <a
          href="https://theunderminejournal.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Talking to Goblins
        </a>
      </p>
    </div>
    <div class="modal-three">
      <p>
        <a
          href="https://dreamgrove.gg/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Reading Dreamgrove
        </a>
      </p>
      <p>
        <a
          href="https://wowhead.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Reading wowhead
        </a>
      </p>
      <p>
        <a
          href="https://wow.gamepedia.com/Wowpedia"
          target="_blank"
          rel="noopener noreferrer"
        >
          Reading ALL THE LORE!
        </a>
      </p>
    </div>
  `
  modalBackdrop.classList.add('backdrop');

  const closeModal = () => {
    modal.style.display = 'none';
    modalBackdrop.style.display = 'none';
  }
  openButton.classList.add('openButton');
  openButton.innerText = 'My Likes';
  openButton.addEventListener('click', () => {
    modal.style.display = 'grid';
    modalBackdrop.style.display = 'block';
  });

  closeButton.classList.add('close');
  closeButton.innerText = 'Close';
  closeButton.addEventListener('click', () => {
    closeModal();
  });
  modalBackdrop.addEventListener('click', closeModal);

  likesDiv.classList.add('output-likes');
  modal.appendChild(closeButton);
  likesDiv.appendChild(modal);
  likesDiv.appendChild(openButton);
  output.appendChild(likesDiv);
  likesDiv.appendChild(modalBackdrop);

  const streamersDiv = document.createElement('div');
  const streamersList = document.createElement('ul');
  streamersList.innerHTML = streamers.reduce((accumulator, streamer) => {
    accumulator += `<li>${streamer}</li>`;
    return accumulator;
  });
  streamersDiv.classList.add('output-streamers');
  streamersDiv.appendChild(streamersList);
  output.appendChild(streamersDiv);

  const bestOverallDiv = document.createElement('div');
  bestOverallDiv.innerHTML = "<h1>Best Runs</h1>";
  const bestOverallList = document.createElement('ul');
  const bestTest = bestOverall.map((best) => {
    return `
      <li>
        <a 
          href="${best.url}"
          target="_blank"
          rel="noopener noreferrer"
        >
          ${best.mythic_level} &hybull;
          ${best.dungeon}
        </a>
     </li>
    `
  })
  bestOverallDiv.classList.add('output-bestOverall');
  bestOverallDiv.appendChild(bestOverallList);
  output.appendChild(bestOverallDiv);
  bestOverallList.innerHTML = bestTest.join(" ");

  const favorite = document.createElement('div');
  const favoriteHeading = document.createElement('h3');
  const favoriteList = document.createElement('ul');
  favoriteHeading.innerHTML = "<h1>Favorite Affixes</h1>";
  favoriteList.innerHTML = favoriteAffixes.reduce((accumulator, favs) => {
    accumulator += `<li>${favs}</li>`;
    return accumulator;
  });
  favorite.classList.add('output-favorites');
  favorite.appendChild(favoriteHeading);
  favorite.appendChild(favoriteList);
  output.appendChild(favorite);


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