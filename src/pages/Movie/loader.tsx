import { Params } from 'react-router-dom';
import { getMovieById } from '../../services';

export const loader = async ({ params }: { params: Params<'movieId'> }) => {
    const movieId = params.movieId;

    if (!movieId) {
        throw new Error('Movie ID is undefined');
    }

    const movie = await getMovieById('movie', movieId);

    return { movie };
};
