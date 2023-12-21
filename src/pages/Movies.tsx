import { FC } from 'react';
import { useLoaderData } from 'react-router-dom';
import Sections from '../containers/Sections';
import { SectionType, MovieType } from '../types/moviesTypes';

const Movies: FC = () => {
    const { upcomingMovies, nowPlayingMovies, popularMovies, topRatedMovies } =
        useLoaderData() as {
            upcomingMovies: MovieType[];
            nowPlayingMovies: MovieType[];
            popularMovies: MovieType[];
            topRatedMovies: MovieType[];
        };

    const sections: SectionType[] = [
        {
            id: 0,
            title: 'Upcoming',
            movies: upcomingMovies,
            mediaType: 'movie',
        },
        {
            id: 1,
            title: 'Now Playing',
            movies: nowPlayingMovies,
            mediaType: 'movie',
        },
        {
            id: 2,
            title: 'Popular',
            movies: popularMovies,
            mediaType: 'movie',
        },
        {
            id: 3,
            title: 'Top Rated',
            movies: topRatedMovies,
            mediaType: 'movie',
        },
    ];

    return <Sections sections={sections} />;
};

export default Movies;
