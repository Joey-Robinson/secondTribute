export const MeerkatsApiCall = async () => {
  const response = await fetch("https://raider.io/api/v1/characters/profile?region=us&realm=Burning%20Blade&name=Meerkatz&fields=gear%2Cmythic_plus_recent_runs%2Cmythic_plus_ranks%2Cmythic_plus_best_runs%2Cmythic_plus_highest_level_runs%2Cmythic_plus_weekly_highest_level_runs")
  const data = await response.json()
  console.log(data)
  const meerkatsCard = document.querySelector('.card__meerkats-details')
  const meerkatsCta = document.querySelector('.card-cta')
  const meerkatsSpec = data.active_spec_name
  const meerkatsClass = data.class
  const meerkatsRace = data.race
  const meerkatsRealm = data.realm
  const meerkatsItemLevel = data.gear.item_level_equipped

  const meerkatsRecentRunDungeon = data.mythic_plus_recent_runs[0].dungeon
  const meerkatsRecentRunAffixes = data.mythic_plus_recent_runs[0].affixes
  const meerkatsRecentRunAffixesMap = meerkatsRecentRunAffixes.map((affix) => { return affix.name })
  const meerkatsRecentRunLevel = data.mythic_plus_recent_runs[0].mythic_level
  const meerkatsRecentRunChests = data.mythic_plus_recent_runs[0].num_keystone_upgrades
  const meerkatsRecentRunLink = data.mythic_plus_recent_runs[0].url

  const meerkatsRegion = data.region
  meerkatsCard.innerHTML = `
    <ul>
      <li><em>Spec:</em> ${meerkatsSpec} ${meerkatsClass}</li>
      <li><em>Race:</em> ${meerkatsRace}</li>
      <li><em>Realm:</em> ${meerkatsRealm}</li>
      <li><em>Region:</em> ${meerkatsRegion}</li>
      <li><em>Item Level:</em> ${meerkatsItemLevel}</li>
    </ul>
  `
  meerkatsCta.innerHTML = `
    <ul>
      <li><em>Dungeon:</em> ${meerkatsRecentRunDungeon}</li>
      <li><em>Affixes:</em> ${meerkatsRecentRunAffixesMap.join("  ")}</li>
      <li><em>Level:</em> ${meerkatsRecentRunLevel}</li>
      <li><em>Chests:</em> ${meerkatsRecentRunChests}</li>
      <li><em>rio:</em> <a target="_blank" rel="noopener noreferrer" href=${meerkatsRecentRunLink}>Link</a></li>
    </ul>
  `
}

MeerkatsApiCall()