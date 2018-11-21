import { ffLikes } from './ffLikes';
import { ffResources } from './ffResources';
import { ffSprites } from './ffSprites';

export const ffCall = () => {
  fetch("https://xivapi.com/character/10803092")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const lodestoneLink = "https://na.finalfantasyxiv.com/lodestone/character/10803092/";
    const ffName = data.Character.Name;
    const ffBirthday = data.Character.Nameday;
    const ffServer = data.Character.Server;
    const hoh = "https://na.finalfantasyxiv.com/lodestone/ranking/deepdungeon2/";
    const finalFantasy = document.getElementById('finalfantasy');
    const hohRank = "../../images/hohff14.jpg";
    const freeCompany = "https://na.finalfantasyxiv.com/lodestone/freecompany/9234490298434948752/";
    
    const nameDiv = document.createElement('div');
    nameDiv.innerHTML =`
      <h1>
        Name:
          <a 
            href="${lodestoneLink}"
            target="_blank"
            rel="noopener noreferrer"
          >
            ${ffName}
          </a>
      </h1>
    `
    nameDiv.classList.add('finalfantasy-name');
    finalFantasy.appendChild(nameDiv);

    const birthdayDiv = document.createElement('div');
    birthdayDiv.classList.add('finalfantasy-birthday');
    birthdayDiv.innerHTML = `
      <h3>Birthday: ${ffBirthday}</h3>
    `
    finalFantasy.appendChild(birthdayDiv);


    const serverNameDiv = document.createElement('div');
    serverNameDiv.innerHTML = `<h3>Server: ${ffServer}</h3>`;
    serverNameDiv.classList.add('finalfantasy-server');
    finalFantasy.appendChild(serverNameDiv)

    const freeCompanyDiv = document.createElement('div');
    freeCompanyDiv.classList.add('finalfantasy-freecompany');
    freeCompanyDiv.innerHTML = `
    <h3>
    Free Company: 
      <a 
        href="${freeCompany}" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        Last Homely House
      </a>
    </h3>
    `;
    finalFantasy.appendChild(freeCompanyDiv);


    const hohDiv = document.createElement('div');
    hohDiv.innerHTML = `
    <a
      href="${hoh}"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="${hohRank}"
        alt="Image For Heaven On High Ranking"
      >
    </a>
    `
    hohDiv.classList.add('finalfantasy-hohrank');
    finalFantasy.appendChild(hohDiv);

    const ffActivities = document.createElement('div');
    const ffActivitiesList = document.createElement('ul');
    const ffActivitiesHeading = document.createElement('h3');
    ffActivitiesHeading.innerHTML = 'Activities & Interests';
    ffActivities.appendChild(ffActivitiesHeading);
    ffActivitiesList.innerHTML = ffLikes.reduce((accumulator, like) => {
      accumulator += `<li>${like}</li>`;
      return accumulator;
    });
    ffActivities.classList.add('finalfantasy-activities');
    ffActivities.appendChild(ffActivitiesList);
    finalFantasy.appendChild(ffActivities);

    const ffInformation = document.createElement('div');
    const ffInformationList = document.createElement('ul');
    const ffInformationHeading = document.createElement('h3');
    ffInformation.appendChild(ffInformationHeading);
    ffInformationHeading.innerHTML = 'Favorite Resources';
    ffInformationList.innerHTML = ffResources.reduce((accumulator, resource) => {
      accumulator += `<li>${resource}<li>`;
      return accumulator;
    });
    ffInformation.classList.add('finalfantasy-resources');
    ffInformation.appendChild(ffInformationList);
    finalFantasy.appendChild(ffInformation);

    const ffSprite = document.createElement('div');
    const ffSpriteList = document.createElement('ul');
    const somethingstupid = ffSprites.map((sprite, index) => {
      return `<li><img src=${sprite} alt="Sprite Image Number ${index+1}"></li>`
    });
    ffSpriteList.innerHTML = somethingstupid.join(" ");
    ffSprite.classList.add('finalfantasy-sprites');
    ffSprite.appendChild(ffSpriteList);
    finalFantasy.appendChild(ffSprite);

    const catVideo = '../../images/fatcat.mp4';
    const fatCatDiv = document.createElement('div');
    fatCatDiv.classList.add('finalfantasy-fatCat');
    fatCatDiv.innerHTML = `
      <video 
        autoplay 
        loop 
        controls
      >
        <source src="${catVideo}" type="video/mp4">
      </video>
    `;
    finalFantasy.appendChild(fatCatDiv);

    const fatChoco = '../../images/fatchoco.gif';
    const fatChocoDiv = document.createElement('div');
    fatChocoDiv.classList.add('finalfantasy-fatChoco');
    fatChocoDiv.innerHTML = `
      <img 
        src="${fatChoco}" 
        alt="Fat Chocobo Gif Number One" 
      />
    `;
    finalFantasy.appendChild(fatChocoDiv);

    const fatChocoTwo = '../../images/fatchocotwo.gif';
    const fatChocoTwoDiv = document.createElement('div');
    fatChocoTwoDiv.classList.add('finalfantasy-fatChocoTwo');
    fatChocoTwoDiv.innerHTML = `
      <img 
        src="${fatChocoTwo}" 
        alt="Fat Chocobo Gif Number Two" 
      />
    `;
    finalFantasy.appendChild(fatChocoTwoDiv);
  });
};

ffCall();