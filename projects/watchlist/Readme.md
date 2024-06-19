# Favourite Movies

Favourite Movies is a simple web application that allows users to search for movies, view popular movies, and mark their favorite movies using The Movie Database (TMDb) API.

## Features

- Search for movies by title.
- View popular movies.
- Mark movies as favorite.
- View only favorite movies.

## Disclaimer

**API Key Required:** To run this application, you need an API key from The Movie Database (TMDb). Please follow the instructions below to obtain your API key.

## Getting Started

### Prerequisites

- A web browser (e.g., Chrome, Firefox)
- An API key from TMDb

### Obtaining the API Key

1. Go to [TMDb Developer Portal](https://developer.themoviedb.org/docs/getting-started).
2. Sign up for an account or log in if you already have one.
3. Navigate to the API section and click on "Create API Key."
4. Follow the instructions to create your API key.
5. Note down your API key for use in this application.

### Setting Up the Application

1. Clone this repository to your local machine:

```
git clone https://github.com/your-username/oswaldovzki-watchlist.git
```

2. Navigate to the project directory:

```
cd oswaldovzki-watchlist
```

3. Create a new file named config.js in the root directory of the project and add your API key:

```
// key.js
const apiKey = 'YOUR_API_KEY_HERE';
export default apiKey;
```

4. Open index.html in your web browser to run the application.

### Usage
- Search Movies: Type a movie title in the search bar and press Enter or click the search icon.
- View Popular Movies: The popular movies list is displayed by default.
- Mark as Favorite: Click the favorite checkbox on a movie card to mark it as a favorite.
- View Favorite Movies: Check the "Show my favourite movies" checkbox to view only your favorite movies.

### License
This project is licensed under the MIT License - see the LICENSE file for details.

### Acknowledgements
The Movie Database (TMDb) for providing the movie data.