import { finalFantasyJobs } from '../../user/jobs.ff14'

export const finalFantasyApiCall = async () => {
  // const response = await fetch("https://xivapi.com/Character/10803092?key=e6a0198acbbf45bda79ab685");
  // const data = await response.json()
  // console.log(data.Character)

  const jobs = document.querySelector('.finalfantasy__jobs')
  const jobsJoin = finalFantasyJobs.map((job) => {
    return `
      <li>
        <img src=${job} />
      </li>
    `
  })
  jobs.innerHTML = jobsJoin.join(" ")


  // const meerkatsName = data.Character.Name
  // const meerkatsNameday = data.Character.Nameday
  // const meerkatsServer = data.Character.Server
  // const meerkatsPortrait = data.Character.Portrait
  // const meerkatsAvatar = data.Character.Avatar
}

finalFantasyApiCall()