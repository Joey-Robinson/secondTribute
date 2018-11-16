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
    const finalFantasy = document.getElementById('finalfantasy');
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
  });
};

ffCall();