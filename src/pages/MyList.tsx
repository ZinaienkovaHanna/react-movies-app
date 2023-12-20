import { FC } from 'react';
import { useLoaderData } from 'react-router-dom';
import { MovieType } from '../types/moviesTypes';
import MovieBookmarkedList from '../components/MovieBookmarkedList';

const MyList: FC = () => {
    const { bookmarkedMovies } = useLoaderData() as {
        bookmarkedMovies: MovieType[];
    };

    return <MovieBookmarkedList bookmarkedMovies={bookmarkedMovies} />;
};

export default MyList;
