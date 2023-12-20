import { FC } from 'react';
import { useLoaderData } from 'react-router-dom';
import MoviePage from '../components/MoviePage';
import { MovieType } from '../types/moviesTypes';

const Movie: FC = () => {
    const { movie } = useLoaderData() as { movie: MovieType };

    return <MoviePage movie={movie} mediaType="movie" pathLink="movies" />;
};

export default Movie;
