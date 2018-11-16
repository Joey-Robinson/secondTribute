import { ffLikes } from './ffLikes';
import { ffResources } from './ffResources';

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
    `
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

  });
};

ffCall();