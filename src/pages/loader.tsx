import { Params } from 'react-router-dom';
import {
    getTrendingMovies,
    getMovies,
    getMovieById,
    getSeries,
    getSeriesById,
    getMovieTrailerById,
    getSeriesTrailerById,
} from '../services';
import { getBookmarkedKeys } from '../utils/localStorage';

export const homeLoader = async () => {
    try {
        const dailyMovies = await getTrendingMovies('day');
        const weeklyMovies = await getTrendingMovies('week');
        const popularMovies = await getMovies('popular');
        const topRatedMovies = await getMovies('top_rated');

        return { dailyMovies, weeklyMovies, popularMovies, topRatedMovies };
    } catch (error) {
        throw new Error('Error loading home data');
    }
};

export const moviesLoader = async () => {
    try {
        const upcomingMovies = await getMovies('upcoming');
        const nowPlayingMovies = await getMovies('now_playing');
        const popularMovies = await getMovies('popular');
        const topRatedMovies = await getMovies('top_rated');

        return {
            upcomingMovies,
            nowPlayingMovies,
            popularMovies,
            topRatedMovies,
        };
    } catch (error) {
        throw new Error('Error loading movies');
    }
};

export const movieLoader = async ({ params }: { params: Params<'movieId'> }) => {
    try {
        const movieId = params.movieId;

        if (!movieId) {
            throw new Error('Movie ID is undefined');
        }

        const movie = await getMovieById(movieId);

        return { movie };
    } catch (error) {
        throw new Error('Error loading movie');
    }
};

export const trailerMovieLoader = async ({ params }: { params: Params<'movieId'> }) => {
    try {
        const movieId = params.movieId;

        if (!movieId) {
            throw new Error('Movie ID is undefined');
        }

        const trailerKeyMovie = await getMovieTrailerById(movieId);

        return { trailerKeyMovie };
    } catch (error) {
        throw new Error('Error loading trailer movie');
    }
};

export const seriesesLoader = async () => {
    try {
        const airingTodaySeries = await getSeries('airing_today');
        const onTheAirSeries = await getSeries('on_the_air');
        const popularSeries = await getSeries('popular');
        const topRatedSeries = await getSeries('top_rated');

        return {
            airingTodaySeries,
            onTheAirSeries,
            popularSeries,
            topRatedSeries,
        };
    } catch (error) {
        throw new Error('Error loading TV Serieses');
    }
};

export const seriesLoader = async ({ params }: { params: Params<'tvId'> }) => {
    try {
        const tvId = params.tvId;

        if (!tvId) {
            throw new Error('TV Series ID is undefined');
        }

        const tvSeries = await getSeriesById(tvId);

        return { tvSeries };
    } catch (error) {
        throw new Error('Error loading TV Series');
    }
};

export const trailerSeriesLoader = async ({ params }: { params: Params<'tvId'> }) => {
    try {
        const tvId = params.tvId;

        if (!tvId) {
            throw new Error('TV Series ID is undefined');
        }

        const trailerKeyTv = await getSeriesTrailerById(tvId);

        return { trailerKeyTv };
    } catch (error) {
        throw new Error('Error loading trailer TV Series');
    }
};

export const movieBookmakedLoader = async () => {
    const bookmarkedKeys = getBookmarkedKeys();
    const bookmarkedMoviesAndSerieses = [];

    for (const keyObj of bookmarkedKeys) {
        const keys = Object.keys(keyObj);
        const key = keys[0];
        const id = keyObj[key];

        try {
            let movie = null;

            if (key === 'movies') {
                movie = await getMovieById(id);
            } else if (key === 'tv') {
                movie = await getSeriesById(id);
            }

            if (movie) {
                bookmarkedMoviesAndSerieses.push(movie);
            }
        } catch (error) {
            console.error(`Error fetching movie:`, error);
        }
    }

    return { bookmarkedMoviesAndSerieses };
};
