export const meerkats = async () => {
  const response = await fetch("https://raider.io/api/v1/characters/profile?region=us&realm=Zul'jin&name=Meerkatz&fields=gear,mythic_plus_scores,mythic_plus_ranks,mythic_plus_recent_runs,mythic_plus_best_runs")
  const data = await response.json();
  console.log(data);
  const wow = document.querySelector(".wow-primary");
  const wowBest = document.querySelector(".wow-best");
  const recent = document.querySelector(".wow-recent");
  const profile = data.profile_url;
  const name = data.name;
  const spec = data.active_spec_name;
  const druid = data.class;
  const recentPlus = data.mythic_plus_recent_runs;
  const plusRankRegion = data.mythic_plus_ranks.class_healer.region;
  const plusRankRealm = data.mythic_plus_ranks.class_healer.realm;
  const bestOverall = data.mythic_plus_best_runs;
  const druidInformation = 'https://wow.gamepedia.com/Druid';

  const recentInner = recentPlus.map((dungeon) => {
    return `
      <table>
        <tr>
          <td>
            <a
              href=${dungeon.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              + ${dungeon.num_keystone_upgrades}
              ${dungeon.dungeon} &hybull;
              ${dungeon.mythic_level}
            </a>
          </td>
        </tr>
      </table>
    `
  });

  const wowBestInner = bestOverall.map((best) => {
    return `
    <table>
      <tr>
        <td>
          <a 
            href=${best.url}
            target="_blank"
            rel="noopener noreferrer"
          >
          ${best.mythic_level} -
          ${best.dungeon}
          </a>
        </td>
      </tr>
    </table>
  `
  });

  wow.innerHTML = `
    <h4>Character Information</h4>
      <table>
        <tr>
          <td>Name: <a href=${profile}>${name}</a></td>
        </tr>
        <tr>
          <td>Spec | Class: <a href=${druidInformation}> ${spec} ${druid}</a></td>
        </tr>
        <tr>
          <td>Current Realm Rank: ${plusRankRealm}</td>
        </tr>
      </table>
  `;

  recent.innerHTML = `<h4>Recent Mythic Plus Runs</h4>${recentInner.join(" ")}`;
  wowBest.innerHTML = `<h4>Best Mythic Plus Runs</h4>${wowBestInner.join(" ")}`;

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

meerkats();