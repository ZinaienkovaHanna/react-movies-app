import { FC } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../MovieCard';
import { MovieType } from '../../types/moviesTypes';

import './MovieBookmarkedList.css';

interface MovieBookmarkedListProps {
    bookmarkedMovies: MovieType[];
}

const MovieBookmarkedList: FC<MovieBookmarkedListProps> = ({
    bookmarkedMovies,
}) => {
    return (
        <div className="movie_bookmarked_list_container">
            {bookmarkedMovies.map((movie) => (
                <Link
                    to={`/${movie.mediaType}/${movie.id}`}
                    key={movie.id}
                    className="movie_card_link"
                >
                    <MovieCard movie={movie} />
                </Link>
            ))}
        </div>
    );
};

export default MovieBookmarkedList;
