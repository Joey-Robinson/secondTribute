export const MeerkatsApiCall = async () => {
  const response = await fetch("https://raider.io/api/v1/characters/profile?region=us&realm=Burning%20Blade&name=Meerkatz&fields=gear%2Cmythic_plus_recent_runs%2Cmythic_plus_ranks%2Cmythic_plus_best_runs%2Cmythic_plus_highest_level_runs%2Cmythic_plus_weekly_highest_level_runs")
  const data = await response.json()

  const meerkatsCard = document.querySelector('.card__meerkats-details')
  const meerkatsCta = document.querySelector('.card-cta')
  const meerkatsModalTextLeft = document.querySelector('.modal__text-left')
  const meerkatsModalTextRight = document.querySelector('.modal__text-right')

  const meerkatsSpec = data.active_spec_name
  const meerkatsClass = data.class
  const meerkatsRealm = data.realm
  const meerkatsItemLevel = data.gear.item_level_equipped

  const meerkatsRecentRunDungeon = data.mythic_plus_recent_runs[0].dungeon
  const meerkatsRecentRunAffixes = data.mythic_plus_recent_runs[0].affixes
  const meerkatsRecentRunAffixesMap = meerkatsRecentRunAffixes.map((affix) => {
    return `${affix.name}`
  })

  const meerkatsBestOverallRuns = data.mythic_plus_highest_level_runs.map((info) => {
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

  const meerkatsRecentWeeklyRuns = data.mythic_plus_weekly_highest_level_runs.map((info) => {
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

  const meerkatsRecentRunLevel = data.mythic_plus_recent_runs[0].mythic_level
  const meerkatsRecentRunChests = data.mythic_plus_recent_runs[0].num_keystone_upgrades
  const meerkatsRecentRunLink = data.mythic_plus_recent_runs[0].url

  const meerkatsRealmRank = data.mythic_plus_ranks.class.realm
  const meerkatsRealmRankHealer = data.mythic_plus_ranks.class_healer.realm


  const meerkatsBestRuns = data.mythic_plus_best_runs.map((info) => {
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

  const meerkatsRecentRuns = data.mythic_plus_recent_runs.map((recent) => {
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



  meerkatsCard.innerHTML = `
    <ul>
      <li><span>Spec:</span> ${meerkatsSpec} ${meerkatsClass}</li>
      <li><span>Healer Realm Rank:</span> ${meerkatsRealmRankHealer}</li>
      <li><span>Realm Rank:</span> ${meerkatsRealmRank}</li>
      <li><span>Realm:</span> ${meerkatsRealm}</li>
      <li><span>Item Level:</span> ${meerkatsItemLevel}</li>
    </ul>
  `

  meerkatsCta.innerHTML += `
    <ul>
      <li><span>Dungeon:</span> ${meerkatsRecentRunDungeon}</li>
      <li><span>Affixes:</span> ${meerkatsRecentRunAffixesMap.join("  ")}</li>
      <li><span>Level:</span> ${meerkatsRecentRunLevel}</li>
      <li><span>Chests:</span> ${meerkatsRecentRunChests}</li>
      <li><span>R.io:</span> <a target="_blank" rel="noopener noreferrer" href=${meerkatsRecentRunLink}>Link</a></li>
    </ul>
  `

  meerkatsModalTextLeft.innerHTML += `
    <ul>
      <li>${meerkatsRecentRuns.join(" ")}</li>
    </ul>
    <h1>Weekly Best Runs</h1>
    <ul>
      <li>${meerkatsRecentWeeklyRuns.join(" ")}</li>
    </ul>
  `

  meerkatsModalTextRight.innerHTML += `
    <ul>
      <li>${meerkatsBestRuns.join(" ")}</li>
    </ul>
    <h1>Overall Highest Runs</h1>
    <ul>
      <li>${meerkatsBestOverallRuns.join(" ")}</li>
    </ul>
  `
}

MeerkatsApiCall()