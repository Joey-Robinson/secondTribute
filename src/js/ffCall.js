export const ffCall = () => {
  fetch("https://xivapi.com/character/10803092")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);    
    const lodestoneLink = "https://na.finalfantasyxiv.com/lodestone/character/10803092/";
    const ffName = data.Character.Name;
    const ffBirthday = data.Character.Nameday;
    const ffServer = data.Character.Server;
    const finalFantasy = document.getElementById('finalfantasy');
    const freeCompany = "https://na.finalfantasyxiv.com/lodestone/freecompany/9234490298434948752/";
    
    const nameDiv = document.createElement('div');
    const nameHeading = document.createElement('h1');
    nameDiv.classList.add('finalfantasy-name');
    nameHeading.innerHTML = `
      <a 
        href="${lodestoneLink}"
        target="_blank"
        rel="noopener noreferrer"
      >
        ${ffName}
      </a>
      <br />

      `
    nameDiv.appendChild(nameHeading);
    finalFantasy.appendChild(nameDiv);

    const birthdayDiv = document.createElement('div');
    const birthdayHeading = document.createElement('h3');
    birthdayDiv.classList.add('finalfantasy-birthday');
    birthdayHeading.innerHTML = `${ffBirthday}`;
    birthdayDiv.appendChild(birthdayHeading);
    finalFantasy.appendChild(birthdayDiv);


    const serverNameDiv = document.createElement('div');
    const serverNameHeading = document.createElement('h3'); 
    serverNameDiv.classList.add('finalfantasy-server');
    serverNameHeading.innerHTML = `${ffServer}`;
    serverNameDiv.appendChild(serverNameHeading);
    finalFantasy.appendChild(serverNameDiv)

    const freeCompanyDiv = document.createElement('div');
    const freeCompanyHeading = document.createElement('h3');
    freeCompanyDiv.classList.add('finalfantasy-freecompany');
    freeCompanyHeading.innerHTML = `
      <a 
        href="${freeCompany}" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        Last Homely House
      </a>
    `
    freeCompanyDiv.appendChild(freeCompanyHeading);
    finalFantasy.appendChild(freeCompanyDiv);
  });
};

ffCall();