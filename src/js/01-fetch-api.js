// import '../css/common.css';
// import template from '../templates/pokemon-card.hbs';
// import API from './api-service';

// const pokemonContainer = document.querySelector('.js-card-container');
// const searchForm = document.querySelector('.js-search-form');
// searchForm.addEventListener('submit', onSearchForm);

// function onSearchForm(e) {
//   e.preventDefault();

//   const form = e.currentTarget;
//   const swarchQuery = form.elements.query.value;

//   API.fetchPokemonById(swarchQuery)
//     .then(renderPokemonCard)
//     .catch(onError)
//     .finally(form.reset());
// }

// function renderPokemonCard(pokemon) {
//   const markup = template(pokemon);
//   pokemonContainer.innerHTML = markup;
// }

// function onError(error) {
//   alert('Упс, что то пошло не так');
// }

// function fetchPokemonById(pokemonId) {
//   return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`).then(r =>
//     r.json(),
//   );
// }

// function renderPokemonCard(pokemon) {
//   const markup = `<div class="card">
//     <div class="card-img-top">
//         <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
//     </div>
//     <div class="card-body">
//         <h2 class="card-title">Имя: ${pokemon.name}</h2>
//         <p class="card-text">Вес: ${pokemon.weight}</p>
//         <p class="card-text">Рост: ${pokemon.height}</p>
//         <p class="card-text"><b>Умения</b></p>
//         <ul class="list-group"></ul>
//        ${getPokemonAbilityName(pokemon)}
//         </ul>
//     </div>
// </div>`;
//   pokemonContainer.innerHTML = markup;
// }

// function getPokemonAbilityName(pokemon) {
//   return pokemon.abilities
//     .map(ability => `<li class ="list-group-item">${ability.ability.name}</li>`)
//     .join('');
// }

// ==================================================================================
// ==================================================================================
// ------------------------1--------------------------
// import "../css/common.css";
// import pokemonCardTpl from "../templates/pokemon-card.hbs";

// const refs = {
//   cardContainer: document.querySelector(".js-card-container"),
// };

// fetch(`https://pokeapi.co/api/v2/pokemon/1`)
//   .then((response) => {
//     console.log(response);

//     return response.json();
//   })
//   .then((pokemon) => {
//     const markup = pokemonCardTpl(pokemon);
//     console.log(pokemon);
//     console.log(markup);
//     refs.cardContainer.innerHTML = markup;
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//------------------------2--------------------------
// import "../css/common.css";
// import pokemonCardTpl from "../templates/pokemon-card.hbs";

// const refs = {
//   cardContainer: document.querySelector(".js-card-container"),
//   searchForm: document.querySelector(".js-search-form"),
// };

// refs.searchForm.addEventListener("submit", onSearch);

// function onSearch(event) {
//   event.preventDefault();

//   const form = event.currentTarget;
//   const searchQuery = form.elements.query.value;

//   fetchPokemon(searchQuery)
//     .then(renderPokemonCard)
//     .catch(onFetchError)
//     .finally(() => form.reset());
// }

// function fetchPokemon(pokemonId) {
//   const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
//   return fetch(url).then((response) => response.json());
// }

// // Хороший результат
// function renderPokemonCard(pokemon) {
//   const markup = pokemonCardTpl(pokemon);
//   refs.cardContainer.innerHTML = markup;
// }

// // Плохой результат
// function onFetchError(error) {
//   alert("Что-то пошло не так");
// }

//------------------------3--------------------------
import '../css/common.css';
import pokemonCardTpl from '../templates/pokemon-card.hbs';
import API from './api-service';
import getRefs from './get-refs';

const refs = getRefs();

refs.searchForm.addEventListener('submit', onSearch);

function onSearch(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const searchQuery = form.elements.query.value;

  API.fetchPokemonById(searchQuery)
    .then(renderPokemonCard)
    .catch(onFetchError)
    .finally(() => form.reset());
}

//Результат упішного виконання промісу
function renderPokemonCard(pokemon) {
  const markup = pokemonCardTpl(pokemon);
  refs.cardContainer.innerHTML = markup;
}

//Результат помилки
function onFetchError(error) {
  alert('Что-то пошло не так');
}

// ====================Параметри запросу + Аутентифікація=====================
// const url = "https://newsapi.org/v2/everything?q=cars";
// const options = {
//   headers: {
//     Authorization: "4330ebfabc654a6992c2aa792f3173a3",
//   },
// };

// fetch(url, options)
//   .then((r) => r.json())
//   .then((data) => console.log(data));
