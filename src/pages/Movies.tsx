import { FC } from 'react';
import { useLoaderData } from 'react-router-dom';
import Sections from '../containers/Sections';
import { SectionType, MovieType } from '../types/moviesTypes';

const Movies: FC = () => {
    const { moviesUpcoming, moviesNowPlaying, moviesPopular, moviesTopRated } =
        useLoaderData() as {
            moviesUpcoming: MovieType[];
            moviesNowPlaying: MovieType[];
            moviesPopular: MovieType[];
            moviesTopRated: MovieType[];
        };

    const sections: SectionType[] = [
        {
            id: 0,
            title: 'Upcoming',
            movies: moviesUpcoming,
            mediaType: 'movie',
        },
        {
            id: 1,
            title: 'Now Playing',
            movies: moviesNowPlaying,
            mediaType: 'movie',
        },
        {
            id: 2,
            title: 'Popular',
            movies: moviesPopular,
            mediaType: 'movie',
        },
        {
            id: 3,
            title: 'Top Rated',
            movies: moviesTopRated,
            mediaType: 'movie',
        },
    ];

    return <Sections sections={sections} pathLink="movies" />;
};

export default Movies;
