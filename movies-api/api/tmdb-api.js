import fetch from 'node-fetch';


export const getMovies = async () => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
        );

        if (!response.ok) {
            throw new Error(response.json().message);
        }

        return await response.json();
    } catch (error) {
        throw error;
    }
};

export const getUpcomingMovies = async () => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
        );

        if (!response.ok) {
            throw new Error(response.json().message);
        }

        return await response.json();
    } catch (error) {
        throw error;
    }
};

export const getMovieGenres = async () => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
        );

        if (!response.ok) {
            throw new Error(response.json().message);
        }

        return await response.json();
    } catch (error) {
        throw error;
    }
};

export const getTrendingMovies = async () => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.TMDB_KEY}&language=en-US`
        );

        if (!response.ok) {
            throw new Error(response.json().message);
        }

        return await response.json();
    } catch (error) {
        throw error;
    }
};


export const getTopRatedMovies = async () => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_KEY}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200`
        );

        if (!response.ok) {
            throw new Error(response.json().message);
        }

        return await response.json();
    } catch (error) {
        throw error;
    }
};


export const searchMovies = async (query) => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_KEY}&query=${encodeURIComponent(query)}&language=en-US&page=1&include_adult=false`
        );

        if (!response.ok) {
            throw new Error(response.json().message);
        }

        return await response.json();
    } catch (error) {
        throw error;
    }
};

export const getMovie = async (id) => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_KEY}`
        );

        if (!response.ok) {
            throw new Error(response.json().message);
        }

        return await response.json();
    } catch (error) {
        throw error;
    }
};