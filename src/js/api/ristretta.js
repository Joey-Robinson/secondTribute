export const ristretta = async () => {
  const response = await fetch("https://raider.io/api/v1/characters/profile?region=us&realm=Zul'jin&name=Ristretta&fields=gear,mythic_plus_scores,mythic_plus_ranks,mythic_plus_recent_runs,mythic_plus_best_runs")
  const data = await response.json();
  const wow = document.querySelector(".wow-ristretta");
  const wowBest = document.querySelector(".wow-ristrettaBest");
  const recent = document.querySelector(".wow-ristrettaRecent");
  const profile = data.profile_url;
  const name = data.name;
  const spec = data.active_spec_name;
  const druid = data.class;
  const recentPlus = data.mythic_plus_recent_runs;
  const plusRankRealm = data.mythic_plus_ranks.class_healer.realm;
  const bestOverall = data.mythic_plus_best_runs;
  const druidInformation = 'https://wow.gamepedia.com/Monk';

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
    <h4>Monk Information</h4>
      <table>
        <tr>
          <td>Name: <a target="_blank" rel="noreferrer noopener" href=${profile}>${name}</a></td>
        </tr>
        <tr>
          <td>Spec | Class: <a target="_blank" rel="noreferrer noopener" href=${druidInformation}> ${spec} ${druid}</a></td>
        </tr>
        <tr>
          <td>Current Realm Rank: ${plusRankRealm}</td>
        </tr>
      </table>
  `;

  recent.innerHTML = `<h4>Recent Mythic Plus Runs</h4>${recentInner.join(" ")}`;
  wowBest.innerHTML = `<h4>Best Mythic Plus Runs</h4>${wowBestInner.join(" ")}`;

}

ristretta();