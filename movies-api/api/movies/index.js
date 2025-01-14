import movieModel from './movieModel';
import asyncHandler from 'express-async-handler';
import express from 'express';
import {getUpcomingMovies} from '../tmdb-api';
import {getMovieGenres} from '../tmdb-api';
import {getMovies} from '../tmdb-api';
import { getTrendingMovies } from '../tmdb-api';
import { getTopRatedMovies } from '../tmdb-api';
import { searchMovies } from '../tmdb-api';
import { getMovie } from '../tmdb-api';
import { getMovieImages } from '../tmdb-api';
import { getMovieReviews } from '../tmdb-api';
import { getRecommendedMovies } from '../tmdb-api';


const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    let { page = 1, limit = 10 } = req.query; // destructure page and limit and set default values
    [page, limit] = [+page, +limit]; //trick to convert to numeric (req.query will contain string values)

    // Parallel execution of counting movies and getting movies using movieModel
    const [total_results, results] = await Promise.all([
        movieModel.estimatedDocumentCount(),
        movieModel.find().limit(limit).skip((page - 1) * limit)
    ]);
    const total_pages = Math.ceil(total_results / limit); //Calculate total number of pages (= total No Docs/Number of docs per page) 

    //construct return Object and insert into response object
    const returnObject = {
        page,
        total_pages,
        total_results,
        results
    };
    res.status(200).json(returnObject);
}));

// Get movie details
router.get('/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const movie = await movieModel.findByMovieDBId(id);
    if (movie) {
        res.status(200).json(movie);
    } else {
        res.status(404).json({message: 'The movie you requested could not be found.', status_code: 404});
    }
}));

router.get('/tmdb/discover', asyncHandler(async (req, res) => {
    const movies = await getMovies();
    res.status(200).json(movies);
}));

router.get('/tmdb/upcoming', asyncHandler(async (req, res) => {
    const upcomingMovies = await getUpcomingMovies();
    res.status(200).json(upcomingMovies);
}));

router.get('/tmdb/genres', asyncHandler(async (req, res) => {
    const movieGenres = await getMovieGenres();
    res.status(200).json(movieGenres);
}));

router.get('/tmdb/trending', asyncHandler(async (req, res) => {
    const movieTrending = await getTrendingMovies();
    res.status(200).json(movieTrending);
}));

router.get('/tmdb/topRated', asyncHandler(async (req, res) => {
    const movieTopRated = await getTopRatedMovies();
    res.status(200).json(movieTopRated);
}));

router.get('/tmdb/search', asyncHandler(async (req, res) => {
    const query = req.query.query; // Get the search query from the request query parameter
    const searchResults = await searchMovies(query);
    res.status(200).json(searchResults);

}));



router.get('/tmdb/:id', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const movie = await getMovie(id);
    if (movie) {
        res.status(200).json(movie);
    } else {
        res.status(404).json({message: 'The movie you requested could not be found.', status_code: 404});
    }
}));

router.get('/tmdb/:id/images', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const images = await getMovieImages(id);
    res.status(200).json(images);
}));

router.get('/tmdb/:id/reviews', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const reviews = await getMovieReviews(id);
    res.status(200).json(reviews);
}));

router.get('/tmdb/:id/recommended', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const recommendations = await getRecommendedMovies(id);
    res.status(200).json(recommendations);
}));


export default router;