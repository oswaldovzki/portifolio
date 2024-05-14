const resultArtist = document.getElementById("result-artist");
const playlistContainer = document.getElementById("result-playlists");
const searchInput = document.getElementById("search-input");
let timeoutId;

function requestApi(searchTerm) {
  fetch(`http://localhost:3000/artists?name_like=${searchTerm}`)
    .then((response) => response.json())
    .then((results) => displayResults(results));
}

function displayResults(results) {
  hidePlaylists();
  const artistImage = document.getElementById("artist-img");
  const artistName = document.getElementById("artist-name");

  results.forEach((element) => {
    artistImage.src = element.urlImg;
    artistName.innerText = element.name;
  });
  resultArtist.classList.remove("hidden");
}

function hidePlaylists() {
  playlistContainer.classList.add("hidden");
}

searchInput.addEventListener("input", function () {
  const searchTerm = searchInput.value.toLowerCase();

  // Clear the previous timeout
  clearTimeout(timeoutId);

  // Set a new timeout to delay the API request
  timeoutId = setTimeout(function () {
    if (searchTerm === "") {
      resultArtist.classList.add("hidden");
      playlistContainer.classList.remove("hidden");
      return;
    }
    requestApi(searchTerm);
  }, 500); // Adjust the delay time (in milliseconds) as needed
});
