export const wowCharacter = async () => {
  const response = await fetch("https://raider.io/api/v1/characters/profile?region=us&realm=Zul'jin&name=Meerkatz&fields=gear,mythic_plus_scores,mythic_plus_ranks,mythic_plus_recent_runs,mythic_plus_best_runs")
  const data = await response.json();
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
  const recentPlusChestTwo = data.mythic_plus_recent_runs[2].num_keystone_upgrade;

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
}

wowCharacter();