import { Params } from 'react-router-dom';
import {
    getTrendingMovies,
    getMovies,
    getMovieById,
    getTvSeries,
    getMovieTrailerById,
} from '../services';

export const homeLoader = async () => {
    const moviesDay = await getTrendingMovies('day');
    const moviesWeek = await getTrendingMovies('week');
    const moviesTopRated = await getMovies('top_rated');

    return { moviesDay, moviesWeek, moviesTopRated };
};

export const moviesLoader = async () => {
    const moviesUpcoming = await getMovies('upcoming');
    const moviesNowPlaying = await getMovies('now_playing');
    const moviesPopular = await getMovies('popular');
    const moviesTopRated = await getMovies('top_rated');

    return { moviesUpcoming, moviesNowPlaying, moviesPopular, moviesTopRated };
};

export const movieLoader = async ({
    params,
}: {
    params: Params<'movieId'>;
}) => {
    const movieId = params.movieId;

    if (!movieId) {
        throw new Error('Movie ID is undefined');
    }

    const movie = await getMovieById('movie', movieId);

    return { movie };
};

export const trailerMovieLoader = async ({
    params,
}: {
    params: Params<'movieId'>;
}) => {
    const movieId = params.movieId;

    if (!movieId) {
        throw new Error('Movie ID is undefined');
    }

    const trailerKeyMovie = await getMovieTrailerById('movie', movieId);

    return { trailerKeyMovie };
};

export const tvSeriesesLoader = async () => {
    const tvSeriesAiringToday = await getTvSeries('airing_today');
    const tvSeriesOnTheAir = await getTvSeries('on_the_air');
    const tvSeriesPopular = await getTvSeries('popular');
    const tvSeriesTopRated = await getTvSeries('top_rated');

    return {
        tvSeriesAiringToday,
        tvSeriesOnTheAir,
        tvSeriesPopular,
        tvSeriesTopRated,
    };
};

export const tvSeriesLoader = async ({
    params,
}: {
    params: Params<'tvId'>;
}) => {
    const tvId = params.tvId;

    if (!tvId) {
        throw new Error('TV Series ID is undefined');
    }

    const tvSeries = await getMovieById('tv', tvId);

    return { tvSeries };
};

export const trailerTvLoader = async ({
    params,
}: {
    params: Params<'tvId'>;
}) => {
    const tvId = params.tvId;

    if (!tvId) {
        throw new Error('TV ID is undefined');
    }

    const trailerKeyTv = await getMovieTrailerById('tv', tvId);

    return { trailerKeyTv };
};

export const movieBookmakedLoader = async () => {
    const bookmarkStatus = localStorage.getItem('bookmarked_movies');

    if (bookmarkStatus !== null) {
        const bookmarkedMoviesId = JSON.parse(bookmarkStatus);

        const bookmarkedMovies = [];

        for (const movieId of bookmarkedMoviesId) {
            try {
                const movie = await getMovieById('movie', movieId);
                bookmarkedMovies.push(movie);
            } catch (error) {
                console.error(
                    `Error fetching movie with ID ${movieId}:`,
                    error
                );
            }
        }

        return { bookmarkedMovies };
    }

    return { bookmarkedMovies: [] };
};
