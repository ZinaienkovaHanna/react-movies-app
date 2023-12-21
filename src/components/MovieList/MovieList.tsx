import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { MovieType, SeriesType } from '../../types/moviesTypes';
import MovieCard from '../MovieCard';
import Slider from '../Slider';

import './MovieList.css';

interface MovieCardProps {
    title: string;
    movies: MovieType[] | SeriesType[];
    children?: ReactNode;
}

const MovieList: FC<MovieCardProps> = ({ movies, title, children }) => {
    return (
        <section className="movie_container">
            <div className="section_title_container">
                <h2 className="section_title">{title}</h2>
                <div>{children}</div>
            </div>
            <Slider>
                {movies.map((movie) => (
                    <Link
                        to={`/${movie.mediaType}/${movie.id}`}
                        key={movie.id}
                        className="movie_card_link"
                    >
                        <MovieCard movie={movie} />
                    </Link>
                ))}
            </Slider>
        </section>
    );
};

export default MovieList;
