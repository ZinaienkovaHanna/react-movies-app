import { FC } from 'react';
import { useLoaderData } from 'react-router-dom';
import MovieTrailerModal from '../components/MovieTrailerModal';

const TrailerSeries: FC = () => {
    const { trailerKeyTv } = useLoaderData() as { trailerKeyTv: string };

    return <MovieTrailerModal trailerKey={trailerKeyTv} />;
};

export default TrailerSeries;
