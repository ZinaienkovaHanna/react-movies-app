import { FC } from 'react';
import { useLoaderData, Outlet } from 'react-router-dom';
import MoviePage from '../components/MoviePage';
import { SeriesType } from '../types/moviesTypes';

const Series: FC = () => {
    const { tvSeries } = useLoaderData() as { tvSeries: SeriesType };

    return (
        <>
            <MoviePage movie={tvSeries} />
            <Outlet />
        </>
    );
};

export default Series;
