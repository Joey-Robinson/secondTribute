export const ffCall = async () => {
  const response = await fetch("https://xivapi.com/character/10803092");
  const data = await response.json();
  console.log(data);
}

ffCall();