export const ffCall = () => {
  fetch("https://xivapi.com/character/10803092")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    console.log(data.Character.Name);
    // console.log(JSON.stringify(data, null, 2));
  });
};

ffCall();