import { FC } from 'react';
import { useLoaderData, Params } from 'react-router-dom';
import MovieTrailerModal from '../components/MovieTrailerModal';
import { getMovieTrailerById } from '../services';

export const loader = async ({ params }: { params: Params<'movieId'> }) => {
    const movieId = params.movieId;

    if (!movieId) {
        throw new Error('Movie ID ///is undefined');
    }

    const trailerKey = await getMovieTrailerById(movieId);
    return { trailerKey };
};

const Trailer: FC = () => {
    const { trailerKey } = useLoaderData() as { trailerKey: string };
    return <MovieTrailerModal trailerKey={trailerKey} />;
};

export default Trailer;
