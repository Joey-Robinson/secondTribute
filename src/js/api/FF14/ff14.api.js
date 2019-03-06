export const finalFantasyApiCall = async () => {
  const response = await fetch("https://xivapi.com/Character/10803092?key=e6a0198acbbf45bda79ab685");
  const data = await response.json()
  console.log(data.Character)
}

finalFantasyApiCall()