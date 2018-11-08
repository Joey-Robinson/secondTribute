export const ffLeft = () => {
  const finalFantasy = document.getElementById('finalfantasy');

  const nameLeft = document.createElement('div');
  const nameLeftHeading = document.createElement('h1');
  nameLeftHeading.innerHTML = 'Name:';
  nameLeft.classList.add('finalfantasy-nameLeft');
  nameLeft.appendChild(nameLeftHeading);
  finalFantasy.appendChild(nameLeft);

  const birthdayLeft = document.createElement('div');
  const birthdayLeftHeading = document.createElement('h3');
  birthdayLeftHeading.innerHTML = 'Birthday:';
  birthdayLeft.classList.add('finalfantasy-birthdayLeft');
  birthdayLeft.appendChild(birthdayLeftHeading);
  finalFantasy.appendChild(birthdayLeft);

  const serverLeft = document.createElement('div');
  const serverLeftHeading = document.createElement('h3');
  serverLeftHeading.innerHTML = 'Server:';
  serverLeft.classList.add('finalfantasy-serverLeft');
  serverLeft.appendChild(serverLeftHeading);
  finalFantasy.appendChild(serverLeft);

  const freeCompanyLeft = document.createElement('div');
  const freeCompanyLeftHeading = document.createElement('h3');
  freeCompanyLeftHeading.innerHTML = 'Free Company:';
  freeCompanyLeft.classList.add('finalfantasy-freecompanyLeft');
  freeCompanyLeft.appendChild(freeCompanyLeftHeading);
  finalFantasy.appendChild(freeCompanyLeft);
}

ffLeft();