import { FC } from 'react';
import { useLoaderData } from 'react-router-dom';
import Sections from '../../containers/Sections';
import { SectionType, MovieType } from '../../types/moviesTypes';

const TvSeries: FC = () => {
    const {
        tvSeriesAiringToday,
        tvSeriesOnTheAir,
        tvSeriesPopular,
        tvSeriesTopRated,
    } = useLoaderData() as {
        tvSeriesAiringToday: MovieType[];
        tvSeriesOnTheAir: MovieType[];
        tvSeriesPopular: MovieType[];
        tvSeriesTopRated: MovieType[];
    };

    const sections: SectionType[] = [
        {
            id: 0,
            title: 'Airing Today',
            movies: tvSeriesAiringToday,
            mediaType: 'TV Series',
        },
        {
            id: 1,
            title: 'On The Air',
            movies: tvSeriesOnTheAir,
            mediaType: 'TV Series',
        },
        {
            id: 2,
            title: 'Popular',
            movies: tvSeriesPopular,
            mediaType: 'TV Series',
        },
        {
            id: 3,
            title: 'Top Rated',
            movies: tvSeriesTopRated,
            mediaType: 'TV Series',
        },
    ];

    return <Sections sections={sections} pathLink="/tv/" />;
};

export default TvSeries;
