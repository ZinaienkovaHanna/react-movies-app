import { FC } from 'react';
import { useLoaderData } from 'react-router-dom';
import Sections from '../containers/Sections';
import { SectionType, SeriesType } from '../types/moviesTypes';

const Series: FC = () => {
    const { airingTodaySeries, onTheAirSeries, popularSeries, topRatedSeries } =
        useLoaderData() as {
            airingTodaySeries: SeriesType[];
            onTheAirSeries: SeriesType[];
            popularSeries: SeriesType[];
            topRatedSeries: SeriesType[];
        };

    const sections: SectionType[] = [
        {
            id: 0,
            title: 'Popular',
            movies: popularSeries,
            mediaType: 'TV Series',
        },
        {
            id: 1,
            title: 'Top Rated',
            movies: topRatedSeries,
            mediaType: 'TV Series',
        },
        {
            id: 2,
            title: 'Airing Today',
            movies: airingTodaySeries,
            mediaType: 'TV Series',
        },
        {
            id: 3,
            title: 'On The Air',
            movies: onTheAirSeries,
            mediaType: 'TV Series',
        },
    ];

    return <Sections sections={sections} />;
};

export default Series;
