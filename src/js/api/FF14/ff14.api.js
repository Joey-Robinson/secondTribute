
export const finalFantasyApiCall = async () => {
  const response = await fetch("https://xivapi.com/Character/10803092?key=e6a0198acbbf45bda79ab685");
  const data = await response.json()

  const meerkatsInformation = document.querySelector('.finalfantasy__information')
  const meerkatsPortraitImage = document.querySelector('.finalfantasy__image')

  const meerkatsArmory = 'https://na.finalfantasyxiv.com/lodestone/character/10803092/'
  const meerkatsFreeCompany = 'https://na.finalfantasyxiv.com/lodestone/freecompany/9234490298434948752/'

  const meerkatsName = data.Character.Name
  const meerkatsNameday = data.Character.Nameday
  const meerkatsServer = data.Character.Server
  const meerkatsPortrait = data.Character.Portrait
  const meerkatsAvatar = data.Character.Avatar

  meerkatsInformation.innerHTML = `
    <h1><span>Name:</span> ${meerkatsName}</h1>
      <h3><span>Nameday:</span> ${meerkatsNameday}</h3>
      <h3><span>Server:</span> ${meerkatsServer}</h3>
      <h3><span>Lodestone:</span> <a href=${meerkatsArmory} target="_blank" rel="noopener noreferrer">Lodestone Link</a></h3>
      <h3><span>Free Company:</span> <a href="${meerkatsFreeCompany}" target="_blank" rel="noopener noreferrer">The Last Homely House</a></h3>
  `
  meerkatsPortraitImage.innerHTML = `<a href=${meerkatsPortrait} target="_blank" rel="noopener noreferrer"><img data-src=${meerkatsPortrait} class="lazyload lazy" /></a>`
}

finalFantasyApiCall()