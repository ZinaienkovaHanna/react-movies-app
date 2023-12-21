import { FC } from 'react';
import { useLoaderData } from 'react-router-dom';
import { MovieType } from '../types/moviesTypes';
import MovieBookmarkedList from '../components/MovieBookmarkedList';

const MyList: FC = () => {
    const { bookmarkedMoviesAndSerieses } = useLoaderData() as {
        bookmarkedMoviesAndSerieses: MovieType[];
    };

    return (
        <MovieBookmarkedList bookmarkedMovies={bookmarkedMoviesAndSerieses} />
    );
};

export default MyList;
