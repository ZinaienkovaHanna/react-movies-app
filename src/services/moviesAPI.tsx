import axios from 'axios';
import { MovieType } from '../types/moviesTypes';
// import dotenv from 'dotenv';

// dotenv.config();

// const BASE_URL: string | undefined = process.env.REACT_APP_BASE_URL;
// const BASE_URL_IMAGE: string | undefined = process.env.REACT_APP_BASE_URL_IMAGE;
// const ACCESS_TOKEN: string | undefined = process.env.REACT_APP_ACCESS_TOKEN;

const instance = axios.create({
    baseURL: BASE_URL,
    headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
});

const getTopRatedMovies = async (): Promise<MovieType[]> => {
    try {
        const response = await instance.get('/3/discover/movie');
        const movies: MovieType[] = response.data.results.map(
            (movie: MovieType) => ({
                id: movie.id,
                title: movie.title,
                release_date: movie.release_date,
                vote_average: movie.vote_average,
                vote_count: movie.vote_count,
                backdrop_path: `${BASE_URL_IMAGE}${movie.backdrop_path}`,
                poster_path: `${BASE_URL_IMAGE}${movie.poster_path}`,
            })
        );
        return movies;
    } catch (error) {
        throw new Error('Error getting top rated movies');
    }
};

const getPopularMovies = async (): Promise<MovieType[]> => {
    try {
        const response = await instance.get('/3/movie/popular');
        const movies: MovieType[] = response.data.results.map(
            (movie: MovieType) => ({
                id: movie.id,
                title: movie.title,
                release_date: movie.release_date,
                vote_average: movie.vote_average,
                vote_count: movie.vote_count,
                backdrop_path: `${BASE_URL_IMAGE}${movie.backdrop_path}`,
                poster_path: `${BASE_URL_IMAGE}${movie.poster_path}`,
            })
        );
        return movies;
    } catch (error) {
        throw new Error('Error getting popular movies');
    }
};

const getMoviesWithFilters = async (): Promise<MovieType[]> => {
    try {
        const response = await instance.get('/3/discover/movie');
        const movies: MovieType[] = response.data.results.map(
            (movie: MovieType) => ({
                id: movie.id,
                title: movie.title,
                release_date: movie.release_date,
                vote_average: movie.vote_average,
                vote_count: movie.vote_count,
                backdrop_path: `${BASE_URL_IMAGE}${movie.backdrop_path}`,
                poster_path: `${BASE_URL_IMAGE}${movie.poster_path}`,
            })
        );
        return movies;
    } catch (error) {
        throw new Error('Error getting movies with filters');
    }
};

export { getMoviesWithFilters, getTopRatedMovies, getPopularMovies };
