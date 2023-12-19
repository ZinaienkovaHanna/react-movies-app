import { FC } from 'react';
import { useLoaderData } from 'react-router-dom';
import MoviePage from '../../components/MoviePage';

import { MovieType } from '../../types/moviesTypes';

const TvSeries: FC = () => {
    const { tvSeries } = useLoaderData() as { tvSeries: MovieType };

    return <MoviePage movie={tvSeries} mediaType="TV Series" />;
};

export default TvSeries;
