// import { apiKey } from "./key.js"
let apiKey = prompt('Pease, isert your API Key');

let movieContainer = document.querySelector('.movieslist');
const searchInput = document.getElementById('movie-search');
const searchBtn = document.getElementById('search-btn');

searchBtn.addEventListener('click', searchMovie);

searchInput.addEventListener('keyup', function(event) {
  if (event.keyCode == 13) { // Press enter (submit)
    searchMovie();
    return;
  }
});

async function searchMovie() {
  const searchTitle = searchInput.value;
  cleanAllMovies();

  if (searchTitle != '') {
    const movies = await getSearchMovie(searchTitle);
    movies.forEach(movie => renderMovie(movie));
  } else {
    const movies = await getPopularMovies()
    movies.forEach(movie => renderMovie(movie))
  }
}

function cleanAllMovies() {
  movieContainer.innerHTML = '';
}

async function getSearchMovie(searchTitle) {
  const url = `https://api.themoviedb.org/3/search/movie?query=${searchTitle}&api_key=${apiKey}`;
  const fetchResponse = await fetch(url);
  const { results } = await fetchResponse.json();
  return results;
} 

async function getPopularMovies() {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
  const fetchResponse = await fetch(url);
  const { results } = await fetchResponse.json();
  return results;
} 

window.onload = async function() {
  const movies = await getPopularMovies();
  movies.forEach(movie => renderMovie(movie));
}

function renderMovie(movie) {
  const li = document.createElement("li");
  movieContainer.appendChild(li);
  li.classList.add('movieslist__items');
  li.innerHTML = `
    <img class="movieslist__items-img" src="https://media.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}" alt="${movie.original_title} poster">
    <h2 class="movieslist__items-title">${movie.original_title}<br>(${movie.release_date})</h2>
    <div class="movieslist__items-info">
        <div class="movieslist__items-rating">
            <img class="movieslist__items-rating-star" src="./assets/icons/star.svg" alt="Rating from 0 to 10">
            <p class="movieslist__items-rating-text">${movie.vote_average}</p>
        </div>
        <div class="movieslist__items-fav">
            <input type="checkbox" class="movieslist__items-fav-checkbox" id="${movie.id}" data-movie-id="${movie.id}" ${isMovieFavorited(movie.id) ? 'checked' : ''}>
            <label for="${movie.id}" class="movieslist__items-fav-text">favorite</label>
        </div>
    </div>
    <p class="movieslist__items-info-description">${movie.overview}</p>
  `;

  const favoriteCheckbox = li.querySelector('.movieslist__items-fav-checkbox');
  favoriteCheckbox.addEventListener('change', (event) => favoriteCheckboxChanged(event, movie));
}

function favoriteCheckboxChanged(event, movie) {
  if (event.target.checked) {
    saveToLocalStorage(movie);
  } else {
    removeFromLocalStorage(movie.id);
  }
}

function isMovieFavorited(movieId) {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  return favorites.some(movie => movie.id === movieId);
}

function saveToLocalStorage(movie) {
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  if (!favorites.some(fav => fav.id === movie.id)) {
    favorites.push(movie);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }
}

function removeFromLocalStorage(movieId) {
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  favorites = favorites.filter(movie => movie.id !== movieId);
  localStorage.setItem('favorites', JSON.stringify(favorites));
}

function getFavoriteMovies() {
  return JSON.parse(localStorage.getItem('favorites')) || [];
}

// Show only Favorite
const favoriteSearchCheckbox = document.querySelector('.search__container__checkbox');
favoriteSearchCheckbox.addEventListener('change', (event) => favoriteSearchCheckboxChanged(event));

function favoriteSearchCheckboxChanged(event) {
  if (event.target.checked) {
    renderFavoriteMovies();
  } else {
    renderPopularMovies();
  }
}

function renderFavoriteMovies() {
  const movies = getFavoriteMovies();
  cleanAllMovies();
  movies.forEach(movie => renderMovie(movie));
}

function renderPopularMovies() {
  getPopularMovies().then(movies => {
    cleanAllMovies();
    movies.forEach(movie => renderMovie(movie));
  });
}
