# Assignment 2 - Web API.

Name: James Hanlon

## Features. 

+ Improved Search Endpoint
+ Enhanced Authentication System
+ Protected Routes for Actors API

## Setup requirements.

[ Outline any non-standard setup steps necessary to run your app locally after cloning the repo.]

## API Configuration

Describe any configuration that needs to take place before running the API. For example, creating an `.env` file and what variables to put in it. Give an example of how this might be done.

REMEMBER: DON'T PUT YOUR OWN USERNAMES/PASSWORDS/AUTH KEYS IN THE README OR ON GITHUB, just placeholders as indicated below:

______________________
NODEENV=development
PORT=8080
HOST=localhost
mongoDB=mongodb://localhost:27017/movies_db
secret=ilikecake
TMDB_KEY=
______________________

## API Design

- /api/movies/tmdb/discover | GET | Gets a list of movies
- /api/movies/tmdb/{id} | GET | Gets a single movie
- /api/movies/tmdb/{id}/images | GET | Gets all images for a movie
- /api/movies/tmdb/{id}/reviews | POST | Creates a new review for a movie
- /api/movies/tmdb/upcoming | GET | Gets a list of upcoming movies
- /api/movies/tmdb/genres | GET | Gets a list of genres
- /api/movies/tmdb/trending | GET | Gets a list of trending movies
- /api/movies/tmdb/topRated | GET | Gets a list of top-rated movies
- /api/movies/tmdb/search?query={query} | GET | Searches for movies by query
- /api/movies/tmdb/{movieId}/recommended | GET | Gets recommended movies for a given movie
- 
- /api/actors/tmdb/{id}/movieActors | GET | Gets all actors for a movie
- /api/actors/tmdb/actors | GET | Gets a list of all actors
- /api/actors/tmdb/{id}/images | GET | Gets images for a specific actor
- /api/actors/tmdb/{id} | GET | Gets details of a single actor
- /api/actors/tmdb/{actorID}/actorMovies | GET | Gets all movies for a specific actor
- 
- /api/users | POST | Logs in a user
- /api/users?action=register | POST | Registers a new user

## Security and Authentication

The movies website requires users to log in or sign up to access its full features. Only the home page is available without logging in, giving users a trial experience of the site. All other routes are protected.

JWT Authentication:
JWT is used to ensure secure authentication and access to protected routes.

Password Management:
Passwords are securely handled with bcrypt, eliminating the use of plaintext credentials.

## Integrating with React App

1. Search Feature
The search bar has been updated to fetch results through /api/movies/tmdb/search using a query parameter.
This improves control and security by routing all search requests through the backend.
2. Web API Integration
All views now use the web API instead of the TMDB API directly.
This ensures consistency and better security in handling data.
3. Authentication System
Login and Signup:
Users must log in or sign up through /api/users.
Protected Views:
Views such as "Favorites" are now protected, requiring authentication to access.
Session Management:
JWT tokens manage sessions, ensuring smooth transitions between views.
4. Design Updates
The app now shows the signed-in user or a message prompting the user to log in.
The interface has been improved to make the app more user-friendly.
 
## Independent learning (if relevant)

Favorites managment attempted, could not get to save for the signed in user.
