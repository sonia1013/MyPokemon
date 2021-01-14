window.onload = getPokemonJSON();
let pokemonArray = [];
function getPokemonJSON() {
  let xhr = new XMLHttpRequest();
  xhr.onload = function () {
    pokemonArray = JSON.parse(this.responseText);
    //debugger;
  };
  xhr.open(
    "GET",
    "https://raw.githubusercontent.com/apprunner/pokemon.json/master/pokedex.json"
  );
  xhr.send();
}
