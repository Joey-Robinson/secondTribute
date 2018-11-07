export const wowLeft = () => {
  const wow = document.getElementById('wow');

  const nameLeft = document.createElement('div');
  const nameLeftHeading = document.createElement('h1');
  nameLeftHeading.innerHTML = 'Name:';
  nameLeft.classList.add('output-nameLeft');
  nameLeft.appendChild(nameLeftHeading);
  wow.appendChild(nameLeft);

  const specClass = document.createElement('div');
  const specClassHeading = document.createElement('h2');
  specClassHeading.innerHTML = 'Spec | Class:';
  specClass.classList.add('output-specLeft');
  specClass.appendChild(specClassHeading);
  wow.appendChild(specClass);

  const ranks = document.createElement('div');
  const ranksHeading = document.createElement('h3');
  ranksHeading.innerHTML = `
    Region Rank: <br />
    &nbsp;Realm Rank:
  `
  ranks.classList.add('output-ranksLeft');
  ranks.appendChild(ranksHeading);
  wow.appendChild(ranks);

  const recent = document.createElement('div');
  const recentHeading = document.createElement('h3');
  recentHeading.innerHTML = 'Recent Dungeons:';
  recent.classList.add('output-recentLeft');
  recent.appendChild(recentHeading);
  wow.appendChild(recent);

  const likesLeft = document.createElement('div');
  const likesLeftHeading = document.createElement('h3');
  likesLeftHeading.innerHTML = 'Likes:';
  likesLeft.classList.add('output-likesLeft');
  likesLeft.appendChild(likesLeftHeading);
  wow.appendChild(likesLeft);
}

wowLeft();