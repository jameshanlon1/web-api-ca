import asyncHandler from 'express-async-handler';
import express from 'express';
import {getActor} from '../tmdb-api';
import { getActors } from '../tmdb-api';
import { getMovieActors } from '../tmdb-api';
import { getActorMovies } from '../tmdb-api';
import { getActorImages } from '../tmdb-api';



const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    let { page = 1, limit = 10 } = req.query; // destructure page and limit and set default values
    [page, limit] = [+page, +limit]; //trick to convert to numeric (req.query will contain string values)
    res.status(200).json(returnObject);
}));


router.get('/tmdb/actors', asyncHandler(async (req, res) => {
    const actors = await getActors();
    res.status(200).json(actors);
}));


router.get('/tmdb/:id/movieActors', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const actors = await getMovieActors(id);
    res.status(200).json(actors);
}));

router.get('/tmdb/:id/images', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const images = await getActorImages(id);
    res.status(200).json(images);
}));

router.get('/tmdb/:id', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const actor = await getActor(id);
    if (actor) {
        res.status(200).json(actor);
    } else {
        res.status(404).json({message: 'The actor you requested could not be found.', status_code: 404});
    }
}));

router.get('/tmdb/:id/actorMovies', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const actorMovie = await getActorMovies(id);
    res.status(200).json(actorMovie);
}));


export default router;