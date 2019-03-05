export const RistrettaApiCall = async () => {
  const response = await fetch("https://raider.io/api/v1/characters/profile?region=us&realm=Burning%20Blade&name=Ristretta&fields=gear%2Cmythic_plus_recent_runs%2Cmythic_plus_ranks%2Cmythic_plus_best_runs%2Cmythic_plus_highest_level_runs%2Cmythic_plus_weekly_highest_level_runs")
  const data = await response.json()

  const ristrettaCard = document.querySelector('.card__ristretta-details')
  const ristrettaCta = document.querySelector('.card__cta-ristretta')
  const ristrettaModalTextLeft = document.querySelector('.rodal__text-left')
  const ristrettaModalTextRight = document.querySelector('.rodal__text-right')

  const ristrettaSpec = data.active_spec_name
  const ristrettaClass = data.class
  const ristrettaRealm = data.realm
  const ristrettaItemLevel = data.gear.item_level_equipped

  const ristrettaRecentRunDungeon = data.mythic_plus_recent_runs[0].dungeon
  const ristrettaRecentRunAffixes = data.mythic_plus_recent_runs[0].affixes
  const ristrettaRecentRunAffixesMap = ristrettaRecentRunAffixes.map((affix) => {
    return `${affix.name}`
  })

  const ristrettaBestOverallRuns = data.mythic_plus_highest_level_runs.map((info) => {
    return `
      <a
        href=${info.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <li>
          ${info.mythic_level}
          ${info.dungeon} -
          ${info.affixes.map((affix) => {
      return `${affix.name}`
    })}
        </li>
      </a>
    `
  })

  const ristrettaRecentWeeklyRuns = data.mythic_plus_weekly_highest_level_runs.map((info) => {
    return `
    <a 
      href=${info.url} 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <li>
        ${info.mythic_level}
        ${info.dungeon} - 
        ${info.affixes.map((affix) => {
      return `${affix.name}`
    })}
      </li>
    </a> 
    `
  })

  const ristrettaRecentRunLevel = data.mythic_plus_recent_runs[0].mythic_level
  const ristrettaRecentRunChests = data.mythic_plus_recent_runs[0].num_keystone_upgrades
  const ristrettaRecentRunLink = data.mythic_plus_recent_runs[0].url

  const ristrettaRealmRank = data.mythic_plus_ranks.class.realm
  const ristrettaRealmRankHealer = data.mythic_plus_ranks.class_healer.realm


  const ristrettaBestRuns = data.mythic_plus_best_runs.map((info) => {
    return `
      <a 
        href=${info.url} 
        target="_blank" 
        rel="noopener noreferrer"
      >
      <li>
        ${info.mythic_level}
        ${info.dungeon} - 
        ${info.affixes.map((affix) => {
      return `${affix.name}`
    })}
      </li>
      </a>
    `
  })

  const ristrettaRecentRuns = data.mythic_plus_recent_runs.map((recent) => {
    return `
        <a 
          href=${recent.url} 
          target="_blank" 
          rel="noopener noreferrer"
        >
        <li>
        ${recent.mythic_level}
        ${recent.dungeon} - ${recent.affixes.map((affix) => {
      return `${affix.name}`
    })}
        </li>
        </a>
    `
  })



  ristrettaCard.innerHTML = `
    <ul>
      <li><span>Spec:</span> ${ristrettaSpec} ${ristrettaClass}</li>
      <li><span>Healer Realm Rank:</span> ${ristrettaRealmRankHealer}</li>
      <li><span>Realm Rank:</span> ${ristrettaRealmRank}</li>
      <li><span>Realm:</span> ${ristrettaRealm}</li>
      <li><span>Item Level:</span> ${ristrettaItemLevel}</li>
    </ul>
  `

  ristrettaCta.innerHTML += `
    <ul>
      <li><span>Dungeon:</span> ${ristrettaRecentRunDungeon}</li>
      <li><span>Affixes:</span> ${ristrettaRecentRunAffixesMap.join("  ")}</li>
      <li><span>Level:</span> ${ristrettaRecentRunLevel}</li>
      <li><span>Chests:</span> ${ristrettaRecentRunChests}</li>
      <li><span>R.io:</span> <a target="_blank" rel="noopener noreferrer" href=${ristrettaRecentRunLink}>Link</a></li>
    </ul>
  `

  ristrettaModalTextLeft.innerHTML += `
    <ul>
      <li>${ristrettaRecentRuns.join(" ")}</li>
    </ul>
    <h1>Weekly Best Runs</h1>
    <ul>
      <li>${ristrettaRecentWeeklyRuns.join(" ")}</li>
    </ul>
  `

  ristrettaModalTextRight.innerHTML += `
    <ul>
      <li>${ristrettaBestRuns.join(" ")}</li>
    </ul>
    <h1>Overall Highest Runs</h1>
    <ul>
      <li>${ristrettaBestOverallRuns.join(" ")}</li>
    </ul>
  `

}

RistrettaApiCall()