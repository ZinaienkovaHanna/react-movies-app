import { MovieType, MovieTypeApiName } from '../types/moviesTypes';
import * as token from './TOKEN.json';

const { ACCESS_TOKEN } = token;
const BASE_URL = 'http://api.themoviedb.org';
const BASE_URL_IMAGE = 'https://image.tmdb.org/t/p/w500';

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
};

const fetchMovies = async (ENDPOINT: string): Promise<MovieType[]> => {
    try {
        const response = await fetch(`${BASE_URL}${ENDPOINT}`, options);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        return data.results.map((movie: MovieTypeApiName) => ({
            id: movie.id,
            title: movie.title,
            releaseDate: movie.release_date,
            voteAverage: movie.vote_average,
            voteCount: movie.vote_count,
            posterPath: `${BASE_URL_IMAGE}${movie.poster_path}`,
        }));
    } catch (error) {
        throw new Error('Error getting movies');
    }
};

export const getTopRatedMovies = () => {
    return fetchMovies('/3/movie/top_rated');
};

export const getPopularMovies = () => {
    return fetchMovies('/3/movie/popular');
};
