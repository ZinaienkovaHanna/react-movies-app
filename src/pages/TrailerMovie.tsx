import { FC } from 'react';
import { useLoaderData } from 'react-router-dom';
import MovieTrailerModal from '../components/MovieTrailerModal';

const Trailer: FC = () => {
    const { trailerKeyMovie } = useLoaderData() as { trailerKeyMovie: string };

    return <MovieTrailerModal trailerKey={trailerKeyMovie} />;
};

export default Trailer;
