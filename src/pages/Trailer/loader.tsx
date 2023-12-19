import { Params } from 'react-router-dom';
import { getMovieTrailerById } from '../../services';

export const loader = async ({ params }: { params: Params<'movieId'> }) => {
    const movieId = params.movieId;

    if (!movieId) {
        throw new Error('Movie ID is undefined');
    }

    const trailerKey = await getMovieTrailerById(movieId);
    return { trailerKey };
};
