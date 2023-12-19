import { MovieType, MovieTypeApiName } from '../types/moviesTypes';
import * as token from './TOKEN.json';

const { ACCESS_TOKEN } = token;
const BASE_URL = 'http://api.themoviedb.org';
const BASE_URL_IMAGE = 'https://image.tmdb.org/t/p/w500';

const serializeMovie = (movie: MovieTypeApiName): MovieType => {
    return {
        id: movie.id,
        title: movie.title || movie.name,
        releaseDate: movie.release_date || movie.first_air_date,
        voteAverage: movie.vote_average,
        voteCount: movie.vote_count,
        posterPath: `${BASE_URL_IMAGE}${movie.poster_path}`,
        backdropPath: `${BASE_URL_IMAGE}${movie.backdrop_path}`,
        genres: movie.genres,
        overview: movie.overview,
        runtime: movie.runtime,
        tagline: movie.tagline,
        episodes: movie.number_of_episodes,
        seasons: movie.number_of_seasons,
    };
};

const getData = async (path: string) => {
    try {
        const response = await fetch(`${BASE_URL}${path}`, {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${ACCESS_TOKEN}`,
            },
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        return data;
    } catch (error) {
        throw new Error('Error getting data');
    }
};

export const getTrendingMovies = async (timeWindow: string) => {
    try {
        const data = await getData(`/3/trending/movie/${timeWindow}`);
        return data.results.map(serializeMovie);
    } catch (error) {
        throw new Error('Error getting trending all');
    }
};

export const getMovies = async (path: string) => {
    try {
        const data = await getData(`/3/movie/${path}`);
        return data.results.map(serializeMovie);
    } catch (error) {
        throw new Error(`Error getting ${path} movies`);
    }
};

export const getTvSeries = async (path: string) => {
    try {
        const data = await getData(`/3/tv/${path}`);
        return data.results.map(serializeMovie);
    } catch (error) {
        throw new Error(`Error getting ${path} TV series`);
    }
};

export const getMovieById = async (mediaType: string, movieId: string) => {
    try {
        const data = await getData(`/3/${mediaType}/${movieId}`);
        return serializeMovie(data);
    } catch (error) {
        throw new Error('Error getting movie');
    }
};

export const getMovieTrailerById = async (movieId: string) => {
    try {
        const data = await getData(`/3/movie/${movieId}/videos`);

        return data.results[0].key;
    } catch (error) {
        throw new Error('Error getting movie trailer');
    }
};
