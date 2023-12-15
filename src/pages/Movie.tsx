import { FC } from 'react';
import { useLoaderData, Params } from 'react-router-dom';
import MoviePage from '../components/MoviePage';
import { getMovieById } from '../services';
import { MovieType } from '../types/moviesTypes';

export const loader = async ({ params }: { params: Params<'movieId'> }) => {
    const movieId = params.movieId;
    if (!movieId) {
        throw new Error('Movie ID is undefined');
    }
    const movie = await getMovieById(movieId);
    return { movie };
};

const Movie: FC = () => {
    const { movie } = useLoaderData() as { movie: MovieType };
    return <MoviePage movie={movie} />;
};

export default Movie;
