export const ffCall = () => {
  fetch("https://xivapi.com/character/10803092")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    console.log(data.Character.Name);

    const lodestoneLink = "https://na.finalfantasyxiv.com/lodestone/character/10803092/";
    const ffName = data.Character.Name;
    const ffBirthday = data.Character.Nameday;
    const ffServer = data.Character.Server;
    const finalFantasy = document.getElementById('finalfantasy');
    
    
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
      `
    nameDiv.appendChild(nameHeading);
    finalFantasy.appendChild(nameDiv);

    const birthdayDiv = document.createElement('div');
    const birthdayHeading = document.createElement('h2');
    birthdayDiv.classList.add('finalfantasy-birthday');
    birthdayHeading.innerHTML = `${ffBirthday}`;
    birthdayDiv.appendChild(birthdayHeading);
    finalFantasy.appendChild(birthdayDiv);


    const serverNameDiv = document.createElement('div');
    const serverNameHeading = document.createElement('h2'); 
    serverNameDiv.classList.add('finalfantasy-server');
    serverNameHeading.innerHTML = `Server: ${ffServer}`;
    serverNameDiv.appendChild(serverNameHeading);
    finalFantasy.appendChild(serverNameDiv)
  });
};

ffCall();