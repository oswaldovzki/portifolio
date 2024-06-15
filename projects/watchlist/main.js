import { apiKey } from "./key.js"


/*
<li class="movieslist__items">
    <img class="movieslist__items-img" src="${movies.image}" alt="movie-img">
    <h2 class="movieslist__items-title">${movies.title} (${movies.year})</h2>
    <div class="movieslist__items-info">
        <div class="movieslist__items-rating">
            <img class="movieslist__items-rating-star" src="./assets/icons/star.svg"
                alt="Rating from 0 to 10">
            <p class="movieslist__items-rating-text">${movies.rating}</p>
        </div>
        <div class="movieslist__items-fav">
            <img class="movieslist__items-fav-icon" src="./assets/icons/heart-off.svg" alt="Favorite">
            <p class="movieslist__items-fav-text">favorite</p>
        </div>
    </div>
    <p class="movieslist__items-info-description">${movies.description}</p>
</li>

*/
const movieContainer = document.querySelector('.movieslist');
const searchInput = document.getElementById('movie-search');
const searchBtn = document.getElementById('search-btn');

searchBtn.addEventListener('click', searchMovie);

searchInput.addEventListener('keyup', function(event) {
  if (event.keyCode == 13) { // Press enter (submit)
    searchMovie()
    return
  }
})

async function searchMovie() {
  const searchTitle = searchInput.value
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
  const url = `https://api.themoviedb.org/3/search/movie?query=${searchTitle}&api_key=${apiKey}`
  const fetchResponse = await fetch(url)
  const { results } = await fetchResponse.json()
  return results
} 

async function getPopularMovies() {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
  const fetchResponse = await fetch(url)
  const { results } = await fetchResponse.json()
  return results
} 

window.onload = async function() {
  const movies = await getPopularMovies()
  movies.forEach(movie => renderMovie(movie))
}


function renderMovie(movie) {


const movieElement = document.createElement('li');
movieElement.classList.add('movieslist__items');
movieContainer.appendChild(movieElement);

const movieImg = document.createElement('img');
movieImg.classList.add('movieslist__items-img');
movieImg.src = `https://media.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`;
movieElement.appendChild(movieImg);

const movieTitle = document.createElement('h2');
movieTitle.classList.add('movieslist__items-title');
movieTitle.textContent = movie.original_title;
movieElement.appendChild(movieTitle);

const movieRating = document.createElement('div');
movieRating.classList.add('movieslist__items-rating');
movieRating.textContent = movie.vote_average;
movieElement.appendChild(movieRating);

const movieFavorite = document.createElement('div');
movieFavorite.classList.add('movieslist__items-fav');
movieFavorite.textContent = movie.isFavorited;
movieElement.appendChild(movieFavorite);

const movieDescription = document.createElement('div');
movieDescription.classList.add('movieslist__items-description');
movieDescription.textContent = movie.overview;
movieElement.appendChild(movieDescription);

}

