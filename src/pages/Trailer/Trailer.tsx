import { FC } from 'react';
import { useLoaderData } from 'react-router-dom';
import MovieTrailerModal from '../../components/MovieTrailerModal';

const Trailer: FC = () => {
    const { trailerKey } = useLoaderData() as { trailerKey: string };
    return <MovieTrailerModal trailerKey={trailerKey} />;
};

export default Trailer;
